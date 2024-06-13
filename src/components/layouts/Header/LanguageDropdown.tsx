"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const languageOptions = [
  { label: "Indonesia", value: "id" },
  { label: "English", value: "en" },
];

const LanguageDropdown = () => {
  const data = languageOptions;

  const [selectedLanguage, setSelectedLanguage] = useState(data[0]);

  const handleSelectLanguage = (item: any) => {
    setSelectedLanguage(item);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {
          <div className="uppercase inline-flex items-center gap-1">
            {selectedLanguage.value} <ChevronDown />
          </div>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.map((item: any, index: number) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => handleSelectLanguage(item)}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LanguageDropdown;
