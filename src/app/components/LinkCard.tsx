import React from "react";
import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/src/components/ui/button";

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
      <div className="">
        <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Contactez moi</Button>
        <Button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-400 text-black border border-white mt-3">Télécharger CV</Button>

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
