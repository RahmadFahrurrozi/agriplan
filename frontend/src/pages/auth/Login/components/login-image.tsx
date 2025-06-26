import DATA_IMAGE from "@/constants/DATA_IMAGE";

const LoginImage = () => (
  <div className="bg-muted relative hidden md:block p-3">
    <img
      src={DATA_IMAGE.loginIlustration}
      alt="Login"
      className="inset-0 h-full w-full bg-white rounded-md shadow-md object-fill dark:brightness-[0.2] dark:grayscale"
    />
  </div>
);

export default LoginImage;
