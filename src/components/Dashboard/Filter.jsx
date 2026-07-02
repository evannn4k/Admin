import { Button } from "@/components/ui/button";

export default function Filter({filter, setFilter}) {
  return (
    <div className="flex gap-2 justify-between w-full">
      <Button
        className="px-6"
        variant={filter == "ready" ? "default" : "outline"}
        onClick={() => {
          setFilter("ready");
        }}
      >
        Ready
      </Button>
      <Button
        className="px-6"
        variant={filter == "stand_by" ? "default" : "outline"}
        onClick={() => {
          setFilter("stand_by");
        }}
      >
        Standby
      </Button>
      <Button
        className="px-6"
        variant={filter == "not_ready" ? "default" : "outline"}
        onClick={() => {
          setFilter("not_ready");
        }}
      >
        Not Ready
      </Button>
      <Button
        className="px-6"
        variant={filter == "Complete" ? "default" : "outline"}
        onClick={() => {
          setFilter("Complete");
        }}
      >
        Complete
      </Button>
      <Button
        className="px-6"
        variant={filter == "absent" ? "default" : "outline"}
        onClick={() => {
          setFilter("absent");
        }}
      >
        Absent
      </Button>
    </div>
  );
}
