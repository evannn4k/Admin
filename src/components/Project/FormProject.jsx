import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

export default function FormProject() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
        <div className="rounded-2xl border border-zinc-200 bg-brand-100 flex-1 p-6 flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        New Project
      </h3>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name" className="text-brand-500">
              Project
            </FieldLabel>
            <Input id="name" autoComplete="off" placeholder="Project name..." />
          </Field>
          <Field>
            <FieldLabel className="text-brand-500">Date</FieldLabel>
            <div className="flex gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!startDate}
                    className="flex-1 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {startDate ? format(startDate, "PPP") : <span>Start</span>}
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!endDate}
                    className="flex-1 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {endDate ? format(endDate, "PPP") : <span>End</span>}
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </Field>
          <Field>
            <FieldLabel className="text-brand-500">Level Project</FieldLabel>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a level project" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Level project</SelectLabel>
                  <SelectItem value="low">
                    <Badge
                      variant="default"
                      className="bg-brand-blue rounded-sm"
                    >
                      Low
                    </Badge>
                  </SelectItem>
                  <SelectItem value="Medium">
                    <Badge
                      variant="default"
                      className="bg-brand-yellow rounded-sm"
                    >
                      Medium
                    </Badge>
                  </SelectItem>
                  <SelectItem value="High">
                    <Badge
                      variant="default"
                      className="bg-brand-red rounded-sm"
                    >
                      High
                    </Badge>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="about" className="text-brand-500">
              About Project
            </FieldLabel>
            <Textarea id="about" placeholder="About project..." />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
