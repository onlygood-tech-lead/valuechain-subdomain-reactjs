import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type AppContainerProps = {
  children?: ReactNode;
  className?: string;
};

export default function AppContainer({
  children,
  className,
}: AppContainerProps) {
  return (
    <div className={cn("bg-white", className)}>
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          {children}
        </div>
      </div>
    </div>
  );
}
