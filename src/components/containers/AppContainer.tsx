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
      <div className="relative px-6 pt-4 lg:px-8">
        <div className="mx-auto max-w-5xl py-8 sm:py-16 lg:py-32">
          {children}
        </div>
      </div>
    </div>
  );
}
