import { type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  vertical?: boolean
  repeat?: number
  duration?: string
  gap?: string
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{
        "--duration": duration,
        "--gap": gap,
        ...props.style,
      } as React.CSSProperties}
      className={cn(
        "group flex overflow-hidden p-2",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              gap,
              animationDirection: reverse ? "reverse" : "normal",
              animationPlayState: "running",
            }}
            onMouseEnter={
              pauseOnHover
                ? (e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"
                  }
                : undefined
            }
            onMouseLeave={
              pauseOnHover
                ? (e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"
                  }
                : undefined
            }
            className={cn(
              "flex shrink-0 justify-around",
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}