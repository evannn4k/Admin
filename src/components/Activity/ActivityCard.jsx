import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityCard({ activity }) {
  return (
    <>
      <div className="col-span-1 bg-brand-100 p-4 rounded-lg border border-zinc-200">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col items-start justify-center">
              <div className="leading-base/6 text-sm font-medium text-black">
                {activity.name}
              </div>
              <p className="text-xs leading-base/6 text-brand-500">
                {activity.role}
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div className="text-sm font-medium">Project</div>
              <div className="flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                {activity.projects}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="text-sm font-medium">Tasks Done</div>
              <div className="flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                {activity.tasks_done}
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 flex flex-col gap-2 text-center">
              <div className="text-sm font-medium">Leave Entitlement</div>
              <div className="flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                {activity.leave_entitlement}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Working Hours</div>
            <div className="grid grid-cols-3 w-full items-center gap-2">
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm">
                    {activity.work_hours_percentage}%
                  </div>
                  <Progress
                    value={activity.work_hours_percentage}
                    className="h-4"
                  />
                </div>
              </div>
              {activity.work_hours_percentage >= 100 && (
                <div className="col-span-1">
                  <div className="text-sm text-brand-red">
                    <FontAwesomeIcon icon={faCircleExclamation} /> Over Working
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
