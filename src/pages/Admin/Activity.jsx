import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "@/components/Activity/ActivityCard";

export default function Activity() {
  const [activities, setActivities] = useState([]);

  const fetchActivity = async () => {
    try {
      const res = await fetch("/data/activity.json");
      const result = await res.json();

      setActivities(result);
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);
  console.log(activities);
  return (
    <div className="p-6 w-full">
      <div className="rounded-2xl border border-zinc-200 bg-brand-100 w-full overflow-hidden p-4 flex flex-col gap-4">
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faSliders} />
              <SelectValue placeholder="Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter</SelectLabel>
              <SelectItem value="project">Project</SelectItem>
              <SelectItem value="task done">Task Done</SelectItem>
              <SelectItem value="leave entitlement">
                Leave Entitlement
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
