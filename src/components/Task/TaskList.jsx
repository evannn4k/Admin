import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskList({ task, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer border border-brand-400 rounded-lg p-4 flex flex-col gap-2">
      <div className="flex justify-between gap-4">
        <h4 className="text-wrap font-medium">{task.task_name}</h4>
        {task.task_level == "High" ? (
          <Badge className="p-2 bg-brand-red rounded-sm">
            {task.task_level}
          </Badge>
        ) : task.task_level == "Medium" ? (
          <Badge className="p-2 bg-brand-yellow rounded-sm">
            {task.task_level}
          </Badge>
        ) : (
          <Badge className="p-2 bg-brand-blue rounded-sm">
            {task.task_level}
          </Badge>
        )}
      </div>
      <div className="text-sm font-light">{task.project_name}</div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-brand-500">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{task.created_at}</span>
        </div>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
