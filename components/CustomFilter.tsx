"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fuels, yearsOfProduction } from "@/constants";

interface CustomFilterProps {
  title: "fuel" | "year";
}

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get(title) || "";

  const options = title === "fuel" ? fuels : yearsOfProduction;

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(title, value);
    } else {
      params.delete(title);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="min-w-[160px]">
      <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
        {title}
      </label>
      <select
        className="filter-select"
        value={current}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.title} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
