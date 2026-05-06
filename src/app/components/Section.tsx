
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

const Section = (props: PropsWithChildren<{className?:string}>) => {
  return (
    // <section className={cn("xl:bg-purple-500 lg:bg-orange-500 md:bg-blue-500 max-md:bg-blue-500 max-[36rem]:mb-0 max-[36rem]:bg-pink-500 px-4 pt-8", props.className)}>
    //     {props.children}
    // </section>
     <section className={cn(" max-[36rem]:mb-0 max-[36rem]:bg-pink-500 px-4 pt-8", props.className)}>
     {props.children}
 </section>  
  )
}

export default Section