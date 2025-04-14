import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const AnimatedCounter = ({ value, duration = 1.5 }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString())
    const [display, setDisplay] = useState("0")
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        // IntersectionObserver untuk memantau apakah komponen terlihat di viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.5 } // Mengaktifkan observer jika 50% komponen terlihat di viewport
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            const controls = animate(count, value, { duration })
            const unsubscribe = rounded.on("change", (v) => setDisplay(v))

            return () => {
                controls.stop()
                unsubscribe()
            }
        }
    }, [isVisible, value, duration])

    return <motion.span ref={ref}>{display}</motion.span>
}
