interface AuthImageProps {
  src: string;
  alt?: string;
}

const AuthImage = ({ src, alt = "Auth Ilustration" }: AuthImageProps) => (
  <div className="bg-muted relative hidden md:block p-3">
    <img
      src={src}
      alt={alt}
      className="inset-0 h-full w-full bg-white rounded-md shadow-md object-fill dark:brightness-[0.2] dark:grayscale"
    />
  </div>
);

export default AuthImage;
