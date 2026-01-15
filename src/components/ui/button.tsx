import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Bootstrap Primary (Blue)
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm border border-transparent shadow-[0_2px_4px_rgba(13,110,253,0.3)]",
        // Bootstrap Danger (Red)
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-[0_2px_4px_rgba(220,53,69,0.3)]",
        // Bootstrap Outline Primary
        outline: "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white",
        // Bootstrap Secondary (Gray)
        secondary: "bg-gray-500 text-white hover:bg-gray-600 shadow-sm shadow-[0_2px_4px_rgba(108,117,125,0.3)]",
        // Bootstrap Light (Ghost-like)
        ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
        // Bootstrap Link
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-800",

        // Custom Animated Variants (kept but styled to match Bootstrap theme)
        hero: "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 animate-gradient border border-transparent",
        shimmer: "relative overflow-hidden bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent border border-transparent",
        pulse: "bg-blue-600 text-white font-bold animate-[pulse-glow_2s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(13,110,253,0.5)] border border-transparent",
        glass: "bg-white/50 backdrop-blur-xl border border-white/20 text-gray-900 hover:bg-white/80 hover:border-white/40 shadow-sm",

        // Extra Bootstrap Colors (mapped to existing props might be hard, but adding just in case valid props are passed)
        success: "bg-green-600 text-white hover:bg-green-700 shadow-sm shadow-[0_2px_4px_rgba(25,135,84,0.3)]",
        warning: "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-sm shadow-[0_2px_4px_rgba(255,193,7,0.3)]",
        info: "bg-cyan-400 text-gray-900 hover:bg-cyan-500 shadow-sm shadow-[0_2px_4px_rgba(13,202,240,0.3)]",
        dark: "bg-gray-900 text-white hover:bg-black shadow-sm shadow-[0_2px_4px_rgba(33,37,41,0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
