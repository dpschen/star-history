import { useState, useEffect } from "react"

type Breakpoint = "desktop" | "tablet" | "mobile" | null

export function useBreakpoint(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(null)

    useEffect(() => {
        const xlMq = window.matchMedia("(min-width: 1280px)")
        const lgMq = window.matchMedia("(min-width: 1024px)")

        const update = () => {
            if (xlMq.matches) setBreakpoint("desktop")
            else if (lgMq.matches) setBreakpoint("tablet")
            else setBreakpoint("mobile")
        }

        update()
        xlMq.addEventListener("change", update)
        lgMq.addEventListener("change", update)
        return () => {
            xlMq.removeEventListener("change", update)
            lgMq.removeEventListener("change", update)
        }
    }, [])

    return breakpoint
}
