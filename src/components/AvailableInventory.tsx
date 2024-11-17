"use client";

import { useState } from "react";

export function AvailableInventory({
  inventory,
  title,
}: {
  inventory: string[];
  title: string;
}) {
  const [activeInventory, setActiveInventory] = useState(inventory[0]);
  console.log(activeInventory, "colosr");

  return (
    <div className="flex align-middle gap-2">
      <p className="p-2">{title}</p>
      {inventory.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveInventory(item)}
          className={`flex cursor-pointer gap-1 border p-2 rounded-md  ${
            item === activeInventory ? "border-red-500" : ""
          }`}
        >
          <button onClick={() => setActiveInventory(item)}>
            <p>{item}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
