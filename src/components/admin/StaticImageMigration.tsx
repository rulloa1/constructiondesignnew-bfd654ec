import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, AlertCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface StaticImageMigrationProps {
  projectId: string;
}

export const StaticImageMigration = ({ projectId }: StaticImageMigrationProps) => {
  const [migrating, setMigrating] = useState(false);

  const handleMigration = async () => {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
      toast.error("Project not found");
      return;
    }

    // Check if images already exist in database
    const { data: existing } = await supabase
      .from('project_images')
      .select('id')
      .eq('project_id', projectId);

    if (existing && existing.length > 0) {
      const confirm = window.confirm(
        `This project already has ${existing.length} images in the database. This will add ${project.images.length} more images. Continue?`
      );
      if (!confirm) return;
    }

    setMigrating(true);

    try {
      const startOrder = existing?.length || 0;
      const imagesToInsert = project.images.map((imageUrl, index) => ({
        project_id: projectId,
        image_url: imageUrl,
        title: `Image ${startOrder + index + 1}`,
        description: null,
        display_order: startOrder + index,
        is_before: false,
        is_after: false,
      }));

      const { error } = await supabase
        .from('project_images')
        .insert(imagesToInsert);

      if (error) throw error;

      toast.success(`Successfully migrated ${project.images.length} images!`);
      window.location.reload();
    } catch (error: any) {
      toast.error(`Migration failed: ${error.message}`);
    } finally {
      setMigrating(false);
    }
  };

  const project = projects.find(p => p.id === projectId);
  if (!project || project.images.length === 0) return null;

  return (
    <Alert className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <div>
          <p className="font-medium mb-1">Static Images Detected</p>
          <p className="text-sm text-muted-foreground">
            This project has {project.images.length} static images. Migrate them to the database to enable drag-and-drop reordering.
          </p>
        </div>
        <Button
          onClick={handleMigration}
          disabled={migrating}
          variant="outline"
          size="sm"
        >
          <Download className="mr-2 h-4 w-4" />
          {migrating ? "Migrating..." : "Migrate to Database"}
        </Button>
      </AlertDescription>
    </Alert>
  );
};
