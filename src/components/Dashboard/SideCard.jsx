import {
  faClipboardCheck,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
export default function SideCard() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 p-2 bg-brand-green rounded-2xl flex flex-col gap-2">
        <div className="flex items-center gap-2 text-white text-lg">
          <FontAwesomeIcon icon={faClipboardCheck} />
          Task
        </div>

        <div className="p-2 bg-white rounded-lg flex flex-col gap-2">
          <div className="leading-base/6 text-sm font-medium text-black">
            Create filter to find data resource
          </div>
          <p className="text-xs leading-base/6 text-brand-500">
            Create button and if click data will show
          </p>
          <div className="">
            <Button
              size="sm"
              className="bg-brand-blue hover:bg-brand-blue-dark"
            >
              Low
            </Button>
          </div>
        </div>
        <div className="p-2 bg-white rounded-lg flex flex-col gap-2">
          <div className="leading-base/6 text-sm font-medium text-black">
            Create filter to find data resource
          </div>
          <p className="text-xs leading-base/6 text-brand-500">
            Create button and if click data will show
          </p>
          <div className="">
            <Button
              size="sm"
              className="bg-brand-yellow hover:bg-brand-yellow-dark"
            >
              Medium
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 bg-brand-yellow rounded-2xl flex flex-col gap-2">
        <div className="flex items-center gap-2 text-white text-lg">
          <FontAwesomeIcon icon={faDiagramProject} />
          Project
        </div>

        <div className="p-2 bg-white rounded-lg flex flex-col gap-2">
          <div className="leading-base/6 text-sm font-medium text-black">
            CODESHOP
          </div>
          <p className="text-xs leading-base/6 text-brand-500">
            Create a web, to buy mod game GTA V, Payment must use
            Dana/Paypal/Steam
          </p>
          <div className="flex justify-between  items-end">
            <Button size="sm" className="bg-brand-red hover:bg-brand-red-dark">
              On Create
            </Button>
            <AvatarGroup className="grayscale">
              <Avatar size="sm">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <Avatar size="sm">
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
              </Avatar>
              <Avatar size="sm">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
