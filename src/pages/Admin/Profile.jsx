import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function Profile() {
  const [date, setDate] = useState();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="p-6 w-full">
      <div className="rounded-2xl border border-zinc-200 bg-brand-100 w-full p-14">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <Avatar className="h-36 w-36">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
            </Avatar>
            <div className="flex w-full justify-between items-end">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-semibold">Freya</div>
                <p className="text-brand-500">Admin</p>
                <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                  Change Picture
                </Button>
              </div>
              <Button
                className="px-8"
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 items-center">
            <div className="col-span-1 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="col-span-1 text-brand-500">Project Total</div>
                <div className="col-span-1 flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                  10
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="col-span-1 text-brand-500">Project Total</div>
                <div className="col-span-1 flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                  10
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="col-span-1 text-brand-500">Project Total</div>
                <div className="col-span-1 flex items-center justify-center font-semibold px-1 py-1.5 rounded-lg border border-zinc-200">
                  10
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email" className="text-brand-500">
                      Email
                    </FieldLabel>
                    <Input
                      type="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Email..."
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      htmlFor="phone_number"
                      className="text-brand-500"
                    >
                      Phone Number
                    </FieldLabel>
                    <Input
                      type="number"
                      id="phone_number"
                      autoComplete="off"
                      placeholder="Email..."
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="Address" className="text-brand-500">
                      Address
                    </FieldLabel>
                    <Input
                      id="Address"
                      autoComplete="off"
                      placeholder="Address..."
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="col-span-1">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="password" className="text-brand-500">
                      Password
                    </FieldLabel>
                    <Input
                      type="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Password..."
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      htmlFor="link_telegram"
                      className="text-brand-500"
                    >
                      Link Telegram
                    </FieldLabel>
                    <Input
                      id="link_telegram"
                      autoComplete="off"
                      placeholder="t.me/..."
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-brand-500">Birth</FieldLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          data-empty={!date}
                          className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                        >
                          <CalendarIcon />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Working Hours</div>
                <div className="flex items-center gap-4">
                  <span>70%</span>
                  <Progress value="70" className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
