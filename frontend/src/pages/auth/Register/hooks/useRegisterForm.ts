import { useForm } from "react-hook-form";
import type { registerSchemaType } from "../schemas/register-schema";
import registerSchema from "../schemas/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const registerForm = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      age: undefined,
      password: "",
      confirmPassword: "",
    },
  });
  const handleSubmitRegister = async (values: registerSchemaType) => {
    setIsLoading(true);
    if (registerForm.formState.isValid) {
      // Handle form submission
      console.log("Registration successful!", values);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
      toast.success("Registration successful!");
    } else {
      // Handle form validation errors
      console.log("Form validation errors:", registerForm.formState.errors);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
      toast.error("Faied to register!");
    }
  };

  return {
    registerForm,
    handleSubmitRegister,
    isLoading,
  };
};

export default useRegisterForm;
