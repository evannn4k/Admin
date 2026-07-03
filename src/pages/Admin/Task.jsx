import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPlus,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import TaskList from "@/components/Task/TaskList";
import Modal from "@/components/Task/Modal";
import ModalForm from "@/components/Task/ModalForm";
import { vi } from "date-fns/locale";

export default function Task() {
  const [date, setDate] = useState();
  const [tasks, setTasks] = useState({
    toDo: [],
    inProgress: [],
    review: [],
    completed: [],
  });
  const initialData = {
    id: null,
    task_name: "",
    project_name: "",
    assigned_employees: [],
    task_level: "",
    task_status: "",
    created_at: "",
  };
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

  const fetchTask = async () => {
    try {
      const res = await fetch("/data/task.json");
      const result = await res.json();

      const toDo = result.filter((e) => e.task_status == "To do");
      const inProgress = result.filter((e) => e.task_status == "In progress");
      const review = result.filter((e) => e.task_status == "Review");
      const completed = result.filter((e) => e.task_status == "Completed");

      setTasks({
        toDo: toDo,
        inProgress: inProgress,
        review: review,
        completed: completed,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTask();
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
        setFormDialog={setFormDialog}
        dialog={dialog}
        setDialog={setDialog}
        initialData={initialData}
      />

      <div className="p-6 flex flex-col gap-6 w-full">
        <div className="w-full flex justify-between gap-4">
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-full bg-brand-100 w-48">
                <SelectValue placeholder="Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Project</SelectLabel>
                  <SelectItem value="Website Management Company">
                    Website Management Company
                  </SelectItem>
                  <SelectItem value="TokoKu Online Marketpleace Application">
                    TokoKu Online Marketpleace Application
                  </SelectItem>
                  <SelectItem value="CaffeLink Menu Transaction Via Website">
                    CaffeLink Menu Transaction Via Website
                  </SelectItem>
                  <SelectItem value="SiteCraft Websites That Bring Your Business to Life">
                    SiteCraft Websites That Bring Your Business to Life
                  </SelectItem>
                  <SelectItem value="VirtuSphere Digital Innovation Without Borders">
                    VirtuSphere Digital Innovation Without Borders
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="flex gap-6 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                >
                  {date ? format(date, "PPP") : <span>Date</span>}
                  <FontAwesomeIcon icon={faCalendarDays} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  defaultMonth={date}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-2">
            <Button
              className="px-4"
              onClick={() => setFormDialog({ open: true, type: "create" })}
            >
              <FontAwesomeIcon icon={faPlus} /> Create task
            </Button>
            <Button
              className="px-4"
              onClick={() => setFormDialog({ open: true, type: "transfer" })}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Transfer Task
            </Button>
            <Button className="px-4" asChild>
              <a href="/task/all">View All Task</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="bg-brand-100 rounded-lg overflow-hidden">
              <div className="bg-brand-red w-full py-1"></div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">To Do</h4>
                {tasks.toDo.map((task, i) => {
                  return (
                    <TaskList
                      key={task.id}
                      task={task}
                      onClick={() => setDialog({ open: true, data: task })}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-brand-100 rounded-lg overflow-hidden">
              <div className="bg-brand-yellow w-full py-1"></div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">In Progress</h4>
                {tasks.inProgress.map((task, i) => {
                  return (
                    <TaskList
                      key={task.id}
                      task={task}
                      onClick={() => setDialog({ open: true, data: task })}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-brand-100 rounded-lg overflow-hidden">
              <div className="bg-brand-blue w-full py-1"></div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Review</h4>
                {tasks.review.map((task, i) => {
                  return (
                    <TaskList
                      key={task.id}
                      task={task}
                      onClick={() => setDialog({ open: true, data: task })}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-brand-100 rounded-lg overflow-hidden">
              <div className="bg-brand-green w-full py-1"></div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Completed</h4>
                {tasks.completed.map((task, i) => {
                  return (
                    <TaskList
                      key={task.id}
                      task={task}
                      onClick={() => setDialog({ open: true, data: task })}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
