import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SocialButton from "../../Login/components/social-button";
import AuthImage from "../../components/auth-image";
import DATA_IMAGE from "@/constants/DATA_IMAGE";
import useRegisterForm from "../hooks/useRegisterForm";
import { Loader2 } from "lucide-react";

const RegisterForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { registerForm, handleSubmitRegister, isLoading } = useRegisterForm();

  return (
    <Form {...registerForm}>
      <div
        className={cn(
          "flex flex-col gap-6 max-w-2xl w-full mx-4 md:mx-0",
          className
        )}
        {...props}
      >
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form
              onSubmit={registerForm.handleSubmit(handleSubmitRegister)}
              className="p-4 md:p-6 w-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Hey, Welcome!</h1>
                  <p className="text-muted-foreground text-balance">
                    Create a new account
                  </p>
                </div>

                {/* Email Field */}
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                  {/* Name Field */}
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Age Field */}
                  <FormField
                    control={registerForm.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="age">Age</FormLabel>
                        <FormControl>
                          <Input
                            // value={age}
                            id="age"
                            type="number"
                            placeholder="Enter your age"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Password Field */}
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter Password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={registerForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition-colors cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      <span className="text-sm">Loading...</span>
                    </div>
                  ) : (
                    "Register"
                  )}
                </Button>

                {/* Other methods */}
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or register with
                  </span>
                </div>
                {/* social button component */}
                <SocialButton />

                {/* Sign up link */}
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>

            {/* login image components */}
            <AuthImage
              src={DATA_IMAGE.registerIlustration}
              alt="register-image-ilustration"
            />
          </CardContent>
        </Card>

        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          By clicking continue, you agree to our{" "}
          <Link to={"/terms"}>Terms of Service</Link> and{" "}
          <Link to={"/privacy"}>Privacy Policy</Link>.
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
