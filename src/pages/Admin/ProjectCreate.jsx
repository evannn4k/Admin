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

export default function ProjectCreate() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
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
                  <Input
                    id="name"
                    autoComplete="off"
                    placeholder="Project name..."
                  />
                </Field>
                <Field>
                  <FieldLabel className="text-brand-500">Date</FieldLabel>
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          data-empty={!startDate}
                          className="w-[280px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                        >
                          {startDate ? (
                            format(startDate, "PPP")
                          ) : (
                            <span>Start</span>
                          )}
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
                          className="w-[280px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
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
                  <FieldLabel className="text-brand-500">
                    Level Project
                  </FieldLabel>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a level project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Level project</SelectLabel>
                        <SelectItem value="low">
                          <Badge variant="default" className="bg-brand-blue">
                            Low
                          </Badge>
                        </SelectItem>
                        <SelectItem value="low">
                          <Badge variant="default" className="bg-brand-yellow">
                            Medium
                          </Badge>
                        </SelectItem>
                        <SelectItem value="low">
                          <Badge variant="default" className="bg-brand-red">
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
          <div className="rounded-2xl border border-zinc-200 bg-brand-100 flex-1 p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi natus delectus animi. Facere fuga totam adipisci
            asperiores neque, exercitationem et tempore quibusdam quos. Facere
            quis mollitia quisquam quos labore.
          </div>
        </div>
        <div className="w-full flex justify-end gap-2">
          <Button className="px-6" variant="outline" asChild>
            <a href="/project">Create</a>
          </Button>
          <Button className="px-6">Create</Button>
        </div>
      </div>
    </div>
  );
}
