import { useForm } from "react-hook-form";
import type { loginSchemaType } from "../schema/login-schema";
import loginSchema from "../schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginFrom = () => {
  const loginForm = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: loginSchemaType) => {
    console.log("Form submitted with data:", values);
  };

  return {
    loginForm,
    handleSubmit,
  };
};

export default useLoginFrom;
