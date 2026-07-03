import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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

export default function Admin() {
  return (
    <div className="p-6 w-full flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="w-full rounded-2xl border border-zinc-200 bg-brand-100 p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Create New Account</h3>
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input
                      id="username"
                      autoComplete="off"
                      placeholder="Enter your username"
                    />
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      type="password"
                      id="password"
                      autoComplete="off"
                      placeholder="password"
                    />
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      type="email"
                      id="email"
                      autoComplete="off"
                      placeholder="contohemail@gmail.com"
                    />
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field>
                    <FieldLabel htmlFor="password_confirmation">
                      Konfirmasi Password
                    </FieldLabel>
                    <Input
                      type="password"
                      id="password_confirmation"
                      autoComplete="off"
                      placeholder="Konfirmasi password"
                    />
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field>
                    <FieldLabel>Divisi</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Enter Divisi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Divisi</SelectLabel>
                          <SelectItem value="Web engineer">
                            Web Engineer
                          </SelectItem>
                          <SelectItem value="UI/UX">UI/UX</SelectItem>
                          <SelectItem value="Project Manager">
                            Project Manager
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </div>
              <Field>
                <div className="w-full flex justify-center">
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
