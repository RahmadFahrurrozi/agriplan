import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="text-lg">This is a simple React application.</p>
        <Link to="/about">
          <Button className="cursor-pointer">Go to About Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
