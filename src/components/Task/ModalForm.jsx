import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ModalForm({
  initialData,
  formDialog,
  setFormDialog,
  setDialog,
}) {
  return (
    <AlertDialog
      open={formDialog.open}
      onOpenChange={(open) => setFormDialog({ ...formDialog, open: open })}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex w-full justify-between gap-4">
            <AlertDialogTitle>
              {formDialog.type == "create"
                ? "Create Task"
                : formDialog.type == "edit"
                ? "Edit Task"
                : "Transfer Task"}
            </AlertDialogTitle>
            <div className="flex gap-2 items-start text-brand-500">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setFormDialog({ open: false, data: initialData })
                }
              >
                <FontAwesomeIcon icon={faX} />
              </Button>
            </div>
          </div>
          <FieldSet className="w-full pt-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="task_name">Task</FieldLabel>
                <Input
                  id="task_name"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                />
              </Field>
              {(formDialog.type == "transfer" ||
                formDialog.type == "create") && (
                <Field>
                  <FieldLabel htmlFor="task_name">Project</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a peoject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Project</SelectLabel>
                        <SelectItem value="Website Management Company">
                          Website Management Company
                        </SelectItem>
                        <SelectItem value="TokoKu Online Marketplace Application">
                          TokoKu Online Marketplace Application
                        </SelectItem>
                        <SelectItem value="CafeLink Menu Transactions Via Website">
                          CafeLink Menu Transactions Via Website
                        </SelectItem>
                        <SelectItem value="SiteCraft Websites That Bring Your Business to Life">
                          SiteCraft Websites That Bring Your Business to Life
                        </SelectItem>
                        <SelectItem value="VirtuSphere Digital Innovation Without Borders">
                          VirtuSphere Digital Innovation Without Borders
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              )}
              {formDialog.type == "transfer" && (
                <Field>
                  <FieldLabel htmlFor="task_name">Send to</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Send to</SelectLabel>
                        <SelectItem value="adam">Adam</SelectItem>
                        <SelectItem value="evan">Evan</SelectItem>
                        <SelectItem value="tiyor">Tiyor</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              )}
              <Field>
                <FieldLabel>Task Level</FieldLabel>
                <RadioGroup
                  defaultValue="comfortable"
                  className="w-fit flex justify-center gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </RadioGroup>
              </Field>
              <Field>
                <div className="bg-brand-300 text-xs text-brand-red py-2 px-4 rounded-lg  flex justify-between">
                  <span>Low : {">"} 2 hours</span>
                  <span>Medium : {">"} 6 hours</span>
                  <span>High : {">"} 8 hours</span>
                </div>
              </Field>
              <Field>
                <Button
                  onClick={() => {
                    toast.success("Berhasil!");
                    setFormDialog({ open: false, data: [] });
                    setDialog({ open: false, data: initialData });
                  }}
                >
                  Submit{" "}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
