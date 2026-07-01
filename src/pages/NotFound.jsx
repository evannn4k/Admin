import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex w-full h-lvh justify-center items-center flex-col">
      <h3 className="text-2xl font-semibold tracking-tight">Not Found</h3>
      <Button variant="Link" className="underline" asChild>
        <a href="/">Kembali Kehalaman Login</a>
      </Button>
    </div>
  );
}
