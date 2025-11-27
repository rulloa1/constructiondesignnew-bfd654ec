// Deployment test - changes automatically deploy to mcdesign.bio
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// Lazy load all route components for better code splitting
const Index = lazy(() => import("./pages/Index"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const Login = lazy(() => import("./pages/Login"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Design = lazy(() => import("./pages/Design"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream/30">
    <div className="text-charcoal font-light">Loading...</div>
  </div>
);

const queryClient = new QueryClient();

// Create router with future flag
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
