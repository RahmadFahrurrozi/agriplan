import { useForm } from "react-hook-form";
import type { loginSchemaType } from "../schema/login-schema";
import loginSchema from "../schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const useLoginFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginForm = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: loginSchemaType) => {
    setIsLoading(true);

    console.log("Form submitted with data:", values);

    if (loginForm.formState.isValid) {
      // Handle form submission
      console.log("Login successful!");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
      toast.success("Login successful!");
    } else {
      // Handle form validation errors
      console.log("Form validation errors:", loginForm.formState.errors);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
      toast.error("Failed to login!");
    }
  };

  return {
    loginForm,
    handleSubmit,
    isLoading,
  };
};

export default useLoginFrom;
