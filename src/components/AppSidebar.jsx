import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faClipboardCheck,
  faDiagramProject,
  faChartLine,
  faBook,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useLocation } from "react-router-dom";

export default function AppSidebar() {
  const url = useLocation();
  return (
    <>
      <aside className="bg-brand-100 border-r border-zinc-200 flex flex-col">
        <ul className="flex flex-col gap-4 w-full p-6">
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/dashboard"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/dashboard">
                      <FontAwesomeIcon icon={faChartColumn} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Dashboard</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/project" || url.pathname == "/project/create"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/project">
                      <FontAwesomeIcon icon={faDiagramProject} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Project</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/task" || url.pathname == "/task/all"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/task">
                      <FontAwesomeIcon icon={faClipboardCheck} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Task</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/activity"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/activity">
                      <FontAwesomeIcon icon={faChartLine} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Activity</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/admin"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/admin">
                      <FontAwesomeIcon icon={faUserTie} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Admin</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className={`rounded-full border border-brand-300 shadow shadow-neutral-300 hover:text-white hover:scale-110 h-[42px] w-[42px] ${
                      url.pathname == "/administration"
                        ? "bg-brand-blue text-brand-100 hover:bg-brand-blue-dark"
                        : "bg-brand-300 text-brand-500 hover:bg-brand-blue"
                    }`}
                    asChild
                  >
                    <a href="/administration">
                      <FontAwesomeIcon icon={faBook} />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <a>Administration</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </aside>
    </>
  );
}
