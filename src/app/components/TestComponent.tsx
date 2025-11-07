"use client";

import React, { useState } from "react";

const TestComponent = () => {
  const [text, setText] = useState("");

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Colonne gauche */}
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={20}
            placeholder="Tapez votre texte..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Colonne droite */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Résultats</h1>
          <div className="p-4 border border-gray-200 rounded-lg min-h-[200px] bg-gray-50">
            {text || "Votre texte s'affichera ici..."}
          </div>
        </div>
      </div>
    </div>  );
};

export default TestComponent;

/* const SideProject = (props: { Logo: LucideIcon, title: string, description: string }) => {
    return (
        <div>
            <span className="bg-accent text-accent-foreground p-4 rounded-sm"> 
                <props.Logo />
            </span>
        </div>
        <div>

        </div>
    )
} 

créer fake data et l'interface */