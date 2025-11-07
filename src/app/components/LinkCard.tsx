import React from "react";
import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

interface User {
  id: number
  name: string
}

let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

let names = users.map((user) => user.name)
console.log(names) // Output: ['Alice', 'Bob']

const LinkCard = () => {
  return (
    <div className="text-center mt-5 m-auto">
      <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto">
        <Button className="  bg-blue-500 text-white text-center font-bold p-9 w-3xs">Contactez moi</Button>
        <a className="px-1 py-3 w-full md:w-fit rounded-full bg-transparent hover:bg-slate-400 text-black border border-white mt-3">Télécharger CV</a>

        {/* <Card className="w-full max-w-sm mb-3">
        </Card> */}
      </div>
        {/* <Card className="w-full max-w-sm mb-3">
          <Button>Je suis Linketree</Button>
        </Card>
        <Card className="w-full max-w-sm">
          <Button>Je suis Linketree</Button>
        </Card> */}
    </div>
  )
};

export default LinkCard;
