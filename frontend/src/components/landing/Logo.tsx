interface LogoProps {
  className?: string;
  testId?: string;
}

export default function Logo({ className = "h-11 w-auto", testId = "foodysh-logo" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Foodysh — Good Food. Faster. Happier."
      className={className}
      data-testid={testId}
      draggable={false}
    />
  );
}
