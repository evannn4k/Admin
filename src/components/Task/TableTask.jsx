import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TableTAsk({ tasks, setDialog }) {
  return (
    <Table className="font-semibold">
      <TableHeader className="bg-brand-300">
        <TableRow>
          <TableHead className="text-center font-semibold text-brand-500">
            #
          </TableHead>
          <TableHead className="font-semibold text-brand-500">
            Task Name
          </TableHead>
          <TableHead className="font-semibold text-brand-500">task</TableHead>
          <TableHead className="font-semibold text-brand-500">
            Assigned Employee
          </TableHead>
          <TableHead className="font-semibold text-brand-500">
            Task Level
          </TableHead>
          <TableHead className="font-semibold text-brand-500">
            Task Status
          </TableHead>
          <TableHead className="font-semibold text-brand-500">
            Created
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, i) => {
          return (
            <TableRow
              className="cursor-pointer"
              key={task.id}
              onClick={() => setDialog({ open: true, data: task })}
            >
              <TableCell className="text-center">{i + 1}</TableCell>
              <TableCell className="py-4">{task.task_name}</TableCell>
              <TableCell className="py-4">{task.project_name}</TableCell>
              <TableCell className="py-4">
                {task.assigned_employees.map((e, i) => {
                  return `${e}${
                    i <= task.assigned_employees.length - 2 ? ", " : ""
                  }`;
                })}
              </TableCell>
              <TableCell className="py-4">
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
              </TableCell>
              <TableCell className="py-4">
                {task.task_status == "To do" ? (
                  <Badge className="p-2 bg-brand-red rounded-sm">
                    {task.task_status}
                  </Badge>
                ) : task.task_status == "Review" ? (
                  <Badge className="p-2 bg-brand-blue rounded-sm">
                    {task.task_status}
                  </Badge>
                ) : task.task_status == "Completed" ? (
                  <Badge className="p-2 bg-brand-green rounded-sm">
                    {task.task_status}
                  </Badge>
                ) : (
                  <Badge className="p-2 bg-brand-yellow rounded-sm">
                    {task.task_status}
                  </Badge>
                )}
              </TableCell>
              <TableCell className="py-4">{task.created_at}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
