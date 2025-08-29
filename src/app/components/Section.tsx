
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

const Section = (props: PropsWithChildren<{className?:string}>) => {
  return (
    <section className={cn("md:bg-blue-500 max-md:bg-blue-500 max-[36rem]:bg-pink-500 px-4", props.className)}>
        {props.children}
    </section>
  )
}

export default Section