import { Button } from "@/components/ui/button";
import FormProject from "@/components/Project/FormProject";
import FormSdm from "@/components/Project/FormSdm";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function ProjectCreate() {
  const redirect = useNavigate();
  const handleClick = () => {
    toast.success("Berhasil menambahkan project");
    redirect("/project");
  };
  return (
    <div className="p-6 flex flex-col gap-4 w-full">
      <div className="w-full flex gap-4">
        <FormProject />
        <FormSdm />
      </div>
      <div className="w-full flex justify-end gap-2">
        <Button className="px-6" variant="outline" asChild>
          <a href="/project">Cancel</a>
        </Button>
        <Button className="px-6" onClick={handleClick}>Create</Button>
      </div>
    </div>
  );
}
