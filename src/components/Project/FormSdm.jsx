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

export default function FormSdm() {
  return (
    <div className="rounded-2xl border border-zinc-200 flex-1 bg-brand-100 p-6 flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">SDM</h3>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel className="text-brand-500">Project Director</FieldLabel>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a project director" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Project Director</SelectLabel>
                  <SelectItem value="adam">Adam</SelectItem>
                  <SelectItem value="evan">Evan</SelectItem>
                  <SelectItem value="tiyor">Tiyor</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <div className="flex gap-4">
            <Field>
              <FieldLabel className="text-brand-500">Engineer Web</FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a engineer Web" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Engineer Web</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel className="text-brand-500">Analis</FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a project analis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Analis</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="flex gap-4">
            <Field>
              <FieldLabel className="text-brand-500">
                Engineer Android
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a engineer android" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Engineer Android</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel className="text-brand-500">
                Content Creator
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a content creator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Content Creator</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="flex gap-4">
            <Field>
              <FieldLabel className="text-brand-500">
                Engineer IOS
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a engineer IOS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Engineer IOS</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel className="text-brand-500">
                Copywriter
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a copywriter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Copywriter</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="flex gap-4">
            <Field>
              <FieldLabel className="text-brand-500">
                UI/UX
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a UI/UX" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>UI/UX</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel className="text-brand-500">
                Tester
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a tester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tester</SelectLabel>
                    <SelectItem value="adam">Adam</SelectItem>
                    <SelectItem value="evan">Evan</SelectItem>
                    <SelectItem value="tiyor">Tiyor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
