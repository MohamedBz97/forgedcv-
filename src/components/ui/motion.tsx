import * as React from "react"
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useMotionValue,
  type Variants,
} from "framer-motion"

/* Amicro motion language — easeOutExpo physics */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const SPRING = { damping: 20, stiffness: 200, mass: 0.5 }

/* ------------------------------------------------------------------ */
/* Scroll-reveal — fade + rise into view, once.                        */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  as?: "div" | "section" | "li" | "span" | "header" | "footer"
}) {
  const reduce = useReducedMotion()
  const MotionTag = {
    div: motion.div,
    section: motion.section,
    li: motion.li,
    span: motion.span,
    header: motion.header,
    footer: motion.footer,
  } as const
  const Comp = MotionTag[as]

  return (
    <Comp
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </Comp>
  )
}

/* ------------------------------------------------------------------ */
/* Mount fade-up — for content that should appear on load, not scroll. */
/* ------------------------------------------------------------------ */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.6,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Stagger group + items — consistent rise sequence for grids/lists.   */
/* ------------------------------------------------------------------ */
const staggerContainer = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

const staggerItem = (y = 22): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
})

export function Stagger({
  children,
  className,
  stagger = 0.06,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 22,
}: {
  children: React.ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div variants={staggerItem(y)} className={className}>
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Word reveal — masked rise per word, the premium headline signature. */
/* ------------------------------------------------------------------ */
export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  duration?: number
}) {
  const reduce = useReducedMotion()
  const words = text.split(" ")

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay },
    },
  }
  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : "110%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASE_OUT },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      className={className}
      aria-label={text}
      role="text"
    >
      {words.map((wordText, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top ${wordClassName ?? ""}`}
        >
          <motion.span variants={word} className="inline-block will-change-transform">
            {wordText}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

/* ------------------------------------------------------------------ */
/* Marquee — continuous drift for template/skill strips.               */
/* ------------------------------------------------------------------ */
export function Marquee({
  children,
  className,
  duration = 28,
  reverse = false,
}: {
  children: React.ReactNode
  className?: string
  duration?: number
  reverse?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <div className={`relative flex overflow-hidden ${className ?? ""}`}>
      <div className="flex shrink-0 animate-marquee items-center" style={{ animationDuration: `${duration}s` }}>
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Tilt card — amicro pointer-follow 3D hover.                         */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  cardClassName,
  maxTilt = 6,
}: {
  children: React.ReactNode
  className?: string
  cardClassName?: string
  maxTilt?: number
}) {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), SPRING)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), SPRING)

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className={className}
      style={{ perspective: 900 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cardClassName}
      >
        {children}
      </motion.div>
    </div>
  )
}