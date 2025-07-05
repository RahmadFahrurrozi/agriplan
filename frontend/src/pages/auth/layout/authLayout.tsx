import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
