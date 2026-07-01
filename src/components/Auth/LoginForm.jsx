import { MailIcon, EyeOffIcon, LockKeyhole } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
} from "@/components/ui/field";

export default function LoginForm({ className, ...props }) {
  return (
    <>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="p-10 bg-white/75 shadow-xl">
          <CardHeader className="flex justify-center mb-4 p-0">
            <img src="/images/logo.png" alt="" className="p-4 h-[70px]" />
          </CardHeader>
          <CardContent className="p-0">
            <form>
              <FieldGroup>
                <Field>
                  <InputGroup>
                    <InputGroupInput
                      type="email"
                      placeholder="Emailmu@gmail.com"
                    />
                    <InputGroupAddon>
                      <MailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field>
                  <InputGroup>
                    <InputGroupInput type="password" placeholder="Password" />
                    <InputGroupAddon>
                      <LockKeyhole />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <EyeOffIcon />
                    </InputGroupAddon>
                  </InputGroup>
                  <div className="w-full flex justofy-end">
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline mb-1"
                    >
                      Forgot password?
                    </a>
                  </div>
                </Field>

                <Field>
                  <Button asChild>
                    <a href="/dashboard">Login</a>
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
