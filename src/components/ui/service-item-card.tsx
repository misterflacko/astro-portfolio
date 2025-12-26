import * as React from "react";
import { cn } from "@/lib/utils";

interface ServiceItemCardProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

/**
 * ServiceItemCard - A Graphite-inspired service item card with:
 * - Left teal accent border
 * - Dark semi-transparent background
 * - Hover lift and glow effect
 * - Smooth transitions respecting prefers-reduced-motion
 */
function ServiceItemCard({
  children,
  className,
  animationDelay = 0,
  ...props
}: ServiceItemCardProps) {
  return (
    <div
      className={cn(
        // Base styles
        "service-item-card",
        "relative",
        "px-4 py-3",
        "rounded-lg",
        "cursor-default",
        "select-none",
        // Transitions
        "transition-all duration-200 ease-out",
        // Hover states handled via CSS
        className
      )}
      style={{
        "--animation-delay": `${animationDelay}ms`,
      } as React.CSSProperties}
      {...props}
    >
      <span className="service-item-text">{children}</span>
    </div>
  );
}

export { ServiceItemCard };
