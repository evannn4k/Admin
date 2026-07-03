import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea";

export default function Administration() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="w-full rounded-2xl border border-zinc-200 bg-brand-100 p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Leave Submission</h3>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>Leave Category</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Leave Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Leave Category</SelectLabel>
                      <SelectItem value="Web engineer">Web Engineer</SelectItem>
                      <SelectItem value="UI/UX">UI/UX</SelectItem>
                      <SelectItem value="Project Manager">
                        Project Manager
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  autoComplete="off"
                  placeholder="Description"
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Field>
                    <FieldLabel>
                      Do you bring laptop? (if there is a super urgent matter)
                    </FieldLabel>
                    <RadioGroup defaultValue="yes">
                      <div className="flex gap-4 border border-zinc-200 p-2 rounded-lg">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field>
                    <FieldLabel>
                      Do you still be Contacted? (if there is super urgent
                      matter)
                    </FieldLabel>
                    <RadioGroup defaultValue="yes">
                      <div className="flex gap-4 border border-zinc-200 p-2 rounded-lg">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </Field>
                </div>
              </div>
              <Field>
                <div className="w-full flex justify-center gap-4">
                  <Button className="w-48" variant="outline">
                    Cancel
                  </Button>
                  <Button className="w-48">Create Account</Button>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>
    </div>
  );
}
