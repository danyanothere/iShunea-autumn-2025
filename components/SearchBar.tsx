"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const [manufacturer, setManufacturer] = useState<string>(searchParams.get("manufacturer") || "");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (manufacturer.trim()) {
      params.set("manufacturer", manufacturer);
    } else {
      
      return;
    }
    router.push(`/?${params.toString()}`);
  };

  

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          onEnterEmpty={() => {
            setManufacturer("");
            const params = new URLSearchParams(searchParams.toString());
            params.delete("manufacturer");
            router.push(`/?${params.toString()}`);
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          setManufacturer("");
          const params = new URLSearchParams(searchParams.toString());
          params.delete("manufacturer");
          router.push(`/?${params.toString()}`);
        }}
        className="ml-3 clear-btn"
      >
        Clear
      </button>
    </form>
  );
};

export default SearchBar;
