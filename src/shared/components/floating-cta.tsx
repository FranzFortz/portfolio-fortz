"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/cn";

export function FloatingCta() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (pathname === "/contact") return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-30 sm:bottom-8 sm:right-8"
      {...(!reduceMotion
        ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }
        : {})}
    >
      <Link
        href="/contact"
        className={cn(
          "inline-flex items-center rounded-lg border border-accent/35 bg-card/95 px-4 py-3 text-sm font-medium text-accent shadow-soft backdrop-blur-sm",
          "transition-colors hover:border-accent hover:bg-muted-bg/90 hover:text-accent-hover",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        Let&apos;s work together
      </Link>
    </motion.div>
  );
}
