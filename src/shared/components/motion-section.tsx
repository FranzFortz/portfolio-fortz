"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const scrollReveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" } as const,
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

type MotionSectionProps = HTMLMotionProps<"section">;

export function MotionSection({
  className,
  children,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : scrollReveal.initial}
      whileInView={reduceMotion ? undefined : scrollReveal.whileInView}
      viewport={scrollReveal.viewport}
      transition={scrollReveal.transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}

type FadeInProps = HTMLMotionProps<"div">;

/** Use inside a semantic `<section>` to avoid nested section elements. */
export function FadeIn({ className, children, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : scrollReveal.initial}
      whileInView={reduceMotion ? undefined : scrollReveal.whileInView}
      viewport={scrollReveal.viewport}
      transition={scrollReveal.transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
