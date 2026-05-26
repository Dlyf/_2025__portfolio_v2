import React from "react";
// import Section from "./Section";
// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface User {
//   id: number
//   name: string
// }

// let users: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ]

// let names = users.map((user) => user.name)
// console.log(names) // Output: ['Alice', 'Bob']

const LinkCard = () => {
  return (
    <div className=" mt-5 m-auto">
        <Button className="w-32 h-12 bg-blue-500 hover:bg-blue-600 text-white">
         Contactez moi
        </Button>

        <Button className="w-32 h-12 bg-blue-500 hover:bg-blue-600 text-white">
          test
        </Button>
        {/* <Button className=" bg-blue-500 hover:bg-blue-600 text-white text-center px-6 py-6">Contactez moi</Button>
        <Button className=" bg-blue-500 hover:bg-blue-600 text-white text-center px-6 py-6">Contactez moi</Button>

        <Button variant="secondary" className=" bg-blue-500 hover:bg-blue-600 text-white text-center ml-6 px-6 py-6">test</Button> */}

        {/* <a className="px-1 py-3 w-full md:w-fit rounded-full bg-transparent hover:bg-slate-400 text-black border border-white mt-3">Télécharger CV</a> */}

        {/* <Card className="w-full max-w-sm mb-3">
        </Card> */}
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
