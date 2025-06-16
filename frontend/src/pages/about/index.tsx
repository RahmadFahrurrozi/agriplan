import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg">
          This page provides information about our application.
        </p>
        <Link to={"/"}>
          <Button className="cursor-pointer">Go to Home Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
