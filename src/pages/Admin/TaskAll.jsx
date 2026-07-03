import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Modal from "@/components/Task/Modal";
import TableTask from "@/components/Task/TableTask";
import ModalForm from "@/components/Task/ModalForm";

export default function AllTask() {
  const initialData = {
    id: null,
    task_name: "",
    project_name: "",
    assigned_employees: [],
    task_level: "",
    task_status: "",
    created_at: "",
  };

  const [tasks, setTasks] = useState([]);
  const [dialog, setDialog] = useState({
    open: false,
    data: initialData,
  });
  const formInitialData = {
    task: "",
    task_level: "",
  };
  const [formDialog, setFormDialog] = useState({
    open: false,
    type: "create",
    data: formInitialData,
  });

  const fetchtask = async () => {
    try {
      const res = await fetch("/data/task.json");
      const result = await res.json();

      setTasks(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchtask();
  }, []);

  return (
    <>
      <ModalForm
        formDialog={formDialog}
        setDialog={setDialog}
        setFormDialog={setFormDialog}
        formInitialData={formInitialData}
      />
      <Modal
        dialog={dialog}
        setDialog={setDialog}
        initialData={initialData}
        setFormDialog={setFormDialog}
      />

      <div className="p-6 w-full">
        <div className="rounded-2xl border border-zinc-200 bg-brand-100 w-full overflow-hidden">
          <div className="p-4 flex justify-between">
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
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="level">Task Level</SelectItem>
                  <SelectItem value="status">Task Status</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button asChild>
              <a href="/task">Task Board View</a>
            </Button>
          </div>
          <TableTask setDialog={setDialog} tasks={tasks} />
        </div>
      </div>
    </>
  );
}
