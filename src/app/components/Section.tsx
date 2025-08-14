
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

const Section = (props: PropsWithChildren<{className?:string}>) => {
  return (
    <section className={cn("max-w-6xl m-auto")}>
        {props.children}
    </section>
  )
}

export default Section