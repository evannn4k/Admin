import {
  faX,
  faPenToSquare,
  faDiagramProject,
  faTimeline,
  faUsers,
  faTag,
  faChartColumn,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Modal({ initialData, dialog, setDialog, setFormDialog }) {
  return (
    <AlertDialog
      open={dialog.open}
      onOpenChange={(open) => setDialog({ ...dialog, open: open })}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex w-full justify-between gap-4">
            <AlertDialogTitle>Task</AlertDialogTitle>
            <div className="flex gap-2 items-start text-brand-500">
              <Button variant="outline" size="sm" onClick={() => setFormDialog({ open: true, type: "edit", data: dialog.data })}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDialog({ open: false, data: initialData })}
              >
                <FontAwesomeIcon icon={faX} />
              </Button>
            </div>
          </div>
          <h4 className="text-brand-600 text-xl font-semibold p-2">
            {dialog.data?.task_name ?? "-"}
          </h4>
          <table className="text-sm">
            <tbody>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faChartColumn} />
                    </span>
                    Status
                  </div>
                </td>
                <td className="py-2 px-4">
                  {dialog.data?.task_status == "To do" ? (
                    <Badge className="p-2 bg-brand-red rounded-sm">
                      {dialog.data?.task_status}
                    </Badge>
                  ) : dialog.data?.task_status == "Review" ? (
                    <Badge className="p-2 bg-brand-blue rounded-sm">
                      {dialog.data?.task_status}
                    </Badge>
                  ) : dialog.data?.task_status == "Completed" ? (
                    <Badge className="p-2 bg-brand-green rounded-sm">
                      {dialog.data?.task_status}
                    </Badge>
                  ) : (
                    <Badge className="p-2 bg-brand-yellow rounded-sm">
                      {dialog.data?.task_status}
                    </Badge>
                  )}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faDiagramProject} />
                    </span>
                    Project
                  </div>
                </td>
                <td className="py-2 px-4">{dialog.data?.project_name ?? "-"}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faTimeline} />
                    </span>
                    Timeline
                  </div>
                </td>
                <td className="py-2 px-4">{dialog.data?.created_at ?? "-"}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                    Assignee
                  </div>
                </td>
                <td className="py-2 px-4">
                  {dialog.data?.assigned_employees.map((e, i) => {
                    return `${e}${
                      i <= dialog.data?.assigned_employees.length - 2 ? ", " : ""
                    }`;
                  }) ?? "-"}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faImage} />
                    </span>
                    Assignee Profile
                  </div>
                </td>
                <td className="py-2 px-4">
                  <AvatarGroup className="grayscale">
                    <Avatar size="sm">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+3</AvatarGroupCount>
                  </AvatarGroup>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 flex items-start">
                  <div className="flex gap-2 items-start text-brand-500">
                    <span className="text-sm">
                      <FontAwesomeIcon icon={faTag} />
                    </span>
                    Label
                  </div>
                </td>
                <td className="py-2 px-4">
                  {dialog.data?.task_level == "High" ? (
                    <Badge className="p-2 bg-brand-red rounded-sm">
                      {dialog.data?.task_level}
                    </Badge>
                  ) : dialog.data?.task_level == "Medium" ? (
                    <Badge className="p-2 bg-brand-yellow rounded-sm">
                      {dialog.data?.task_level}
                    </Badge>
                  ) : (
                    <Badge className="p-2 bg-brand-blue rounded-sm">
                      {dialog.data?.task_level}
                    </Badge>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
