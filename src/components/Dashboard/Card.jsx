import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Card({ employe, filter }) {
  return (
    <>
      {filter == "ready" ? (
        <div className="col-span-1 bg-brand-100 p-4 rounded-lg border border-zinc-200">
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/images/default-pp.jpg" />
                </Avatar>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="leading-base/6 text-sm font-medium text-black">
                    {employe.name}
                  </div>
                  <p className="text-xs leading-base/6 text-brand-500">
                    {employe.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="leading-base/6 text-sm font-medium text-black">
                  Working on {employe.project_name} :
                </div>
                <p className="text-xs leading-base/6 text-brand-500">
                  {employe.task_description}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {employe.status == "Review" ? (
                <Badge className="p-2 bg-brand-300 rounded-sm text-brand-500">
                  {employe.status}
                </Badge>
              ) : (
                <Badge className="p-2 bg-brand-green rounded-sm">
                  {employe.status}
                </Badge>
              )}
              {employe.priority == "High" ? (
                <Badge className="p-2 bg-brand-red rounded-sm">
                  {employe.priority}
                </Badge>
              ) : employe.priority == "Medium" ? (
                <Badge className="p-2 bg-brand-yellow rounded-sm">
                  {employe.priority}
                </Badge>
              ) : (
                <Badge className="p-2 bg-brand-blue rounded-sm">
                  {employe.priority}
                </Badge>
              )}
            </div>
          </div>
        </div>
      ) : filter == "not_ready" || filter == "stand_by" ? (
        <div className="col-span-1 bg-brand-100 p-4 rounded-lg border border-zinc-200">
          <div className="flex gap-3 items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/images/default-pp.jpg" />
            </Avatar>
            <div className="flex flex-col items-start justify-center gap-1">
              <div className="leading-base/6 text-sm font-medium text-black">
                {employe.name}
              </div>
              <p className="text-xs leading-base/6 text-brand-500">
                {employe.role}
              </p>
            </div>
          </div>
        </div>
      ) : filter == "Complete" ? (
        <div className="col-span-1 bg-brand-100 p-4 rounded-lg border border-zinc-200">
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/images/default-pp.jpg" />
                </Avatar>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="leading-base/6 text-sm font-medium text-black">
                    {employe.name}
                  </div>
                  <p className="text-xs leading-base/6 text-brand-500">
                    {employe.leave_duration}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="leading-base/6 text-sm font-medium text-black">
                  {employe.absence_category}
                </div>
                <p className="text-xs leading-base/6 text-brand-500">
                  {employe.task_description}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {employe.status == "Review" ? (
                <Badge className="p-2 bg-brand-300 rounded-sm text-brand-500">
                  {employe.status}
                </Badge>
              ) : (
                <Badge className="p-2 bg-brand-green rounded-sm">
                  {employe.status}
                </Badge>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-1 bg-brand-100 p-4 rounded-lg border border-zinc-200">
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/images/default-pp.jpg" />
                </Avatar>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="leading-base/6 text-sm font-medium text-black">
                    {employe.name}
                  </div>
                  <p className="text-xs leading-base/6 text-brand-500">
                    {employe.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="leading-base/6 text-sm font-medium text-black">
                  Working on {employe.project_name} :
                </div>
                <p className="text-xs leading-base/6 text-brand-500">
                  {employe.task_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
