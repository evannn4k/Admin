import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const redirect = useNavigate();

  const handleClick = () => {
    if (pathname == "/profile") {
      redirect(-1);
    } else {
      redirect("/profile");
    }
  };

  return (
    <nav className="sticky top-0 bg-brand-100 w-full p-6 border-b border-zinc-200">
      <div className="flex justify-between items-center h-[42px]">
        <img src="/images/logo.png" className="h-[38px]" />
        <InputGroup className="max-w-xs h-full rounded-full px-2">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputGroupAddon>
        </InputGroup>
        <div className="flex items-center gap-4">
          <div className="text-end">
            <p className="font-semibold text-sm">Evann</p>
            <p className="font-light text-xs">Admin</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  onClick={handleClick}
                  className="rounded-full bg-brand-300 border hover:scale-110 border-brand-300 shadow shadow-neutral-300 text-brand-500 hover:text-white hover:bg-brand-blue h-[42px] w-[42px]"
                >
                  <FontAwesomeIcon icon={faUser} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Account</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="rounded-full bg-brand-300 hover:scale-110 border border-brand-300 shadow shadow-neutral-300 text-brand-500 hover:text-white hover:bg-brand-blue h-[42px] w-[42px]"
                  asChild
                >
                  <a href="/">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <a>Logout</a>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </nav>
  );
}
