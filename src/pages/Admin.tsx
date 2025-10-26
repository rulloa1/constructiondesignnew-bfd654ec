import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  budget_range: string | null;
  message: string | null;
  status: string | null;
  conversation_history: any;
  created_at: string;
}

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUserId(session.user.id);
    setIsAdmin(true); // Assume admin, let RLS enforce access control
    fetchLeads(); // If fetch fails due to RLS, user will see "Access Denied"
  };

  const fetchLeads = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    const { data, error } = await supabase
      .from("client_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      // RLS will prevent access if user is not admin
      console.error('Error fetching leads:', error);
      setIsAdmin(false); // Access denied by RLS
      toast({
        title: "Access Denied",
        description: "You don't have permission to view leads",
        variant: "destructive",
      });
    } else {
      setLeads(data || []);
      
      // Log admin access to customer leads for audit trail
      if (session?.user?.id && data && data.length > 0) {
        await supabase.from("audit_logs").insert({
          table_name: "client_leads",
          operation: "SELECT_ALL",
          user_id: session.user.id,
        });
      }
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You need admin privileges to access this page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You don't have permission to access this page. Please contact the administrator if you believe this is an error.
            </p>
            <Button onClick={() => navigate("/")} className="w-full">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage customer leads</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Leads ({leads.length})</CardTitle>
            <CardDescription>
              All inquiries from the chatbot and contact form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No leads yet
                </p>
              ) : (
                leads.map((lead) => (
                  <Card key={lead.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{lead.name}</CardTitle>
                          <CardDescription>{lead.email}</CardDescription>
                        </div>
                        <Badge variant={lead.status === "new" ? "default" : "secondary"}>
                          {lead.status || "new"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {lead.phone && (
                        <p className="text-sm">
                          <strong>Phone:</strong> {lead.phone}
                        </p>
                      )}
                      {lead.project_type && (
                        <p className="text-sm">
                          <strong>Project Type:</strong> {lead.project_type}
                        </p>
                      )}
                      {lead.budget_range && (
                        <p className="text-sm">
                          <strong>Budget:</strong> {lead.budget_range}
                        </p>
                      )}
                      {lead.message && (
                        <p className="text-sm">
                          <strong>Message:</strong> {lead.message}
                        </p>
                      )}
                      {lead.conversation_history && Array.isArray(lead.conversation_history) && lead.conversation_history.length > 0 && (
                        <div className="mt-4">
                          <strong className="text-sm">Conversation History:</strong>
                          <ScrollArea className="h-48 mt-2 rounded border p-3">
                            <div className="space-y-2">
                              {lead.conversation_history.map((msg: any, idx: number) => (
                                <div key={idx} className="text-sm">
                                  <strong className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
                                    {msg.role}:
                                  </strong>{" "}
                                  {msg.content}
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Received: {new Date(lead.created_at).toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
