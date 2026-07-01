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

export default function Navbar() {
  return (
    <navbar>
      <div className="w-full p-6 border-b border-zinc-200">
        <div className="flex justify-between items-center h-[42px]">
          <img src="/images/logo.png" className="img-fluid" />
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
                <TooltipTrigger asChild>
                  <Button className="rounded-full bg-neutral-100 shadow shadow-neutral-300 text-neutral-600 hover:text-white hover:bg-brand h-[42px] w-[42px]">
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
                    className="rounded-full bg-neutral-100 shadow shadow-neutral-300 text-neutral-600 hover:text-white hover:bg-brand h-[42px] w-[42px]"
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
      </div>
    </navbar>
  );
}
