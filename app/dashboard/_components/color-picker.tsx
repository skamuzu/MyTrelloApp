"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BASE_COLORS = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#843BFF",
  "#FF8E72",
  "#FFC6FF",
  "#70D6FF",
  "#FFD670",
  "#C1FBA4",
  "#A2D2FF",
  "#B388EB",
];

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(BASE_COLORS[0]);

  return (
    <div>
      <Label htmlFor="color">Choose a Color</Label>
      <div className="flex flex-row gap-1">
        <Input type="hidden" id="color" name="color" value={selectedColor} />
        <div className="grid grid-cols-6 gap-1 w-4/5">
          {BASE_COLORS.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="w-10 h-10 rounded hover:opacity-80"
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div>
          <input type="color" className="h-full rounded-md border-0" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
