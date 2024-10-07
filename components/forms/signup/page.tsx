import React from "react";
import { schemaLogin } from "@/app/schemas/login.schema";
import { useForm, FieldPath, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const form =
    useForm<z.infer<typeof schemaLogin>>({
      resolver: zodResolver(schemaLogin),
      defaultValues: {
        email: "",
        username: "",
        password: "",
      },
    })

  const onSubmit = (values: z.infer<typeof schemaLogin>) => {
    console.log("values", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Enter your email"
          description="We'll never share your email."
          inputType="email"
          formControl={form.control}
        />
        <SignupFormField
          name="password"
          label="Password"
          placeholder="Password"
          description="Password must be at least 6 characters"
          inputType="password"
          formControl={form.control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
};

interface SignUpFormFieldProps {
  name: FieldPath<z.infer<typeof schemaLogin>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<z.infer<typeof schemaLogin>, any>;
}

const SignupFormField: React.FC<SignUpFormFieldProps> = ({
  name, label, placeholder, description, inputType, formControl
}) => {
  return (
    <FormField
      name={name}
      control={formControl}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}