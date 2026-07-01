import React from "react";

interface SearchBarProps {
  search: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

function SearchBar({
  search,
  onChange,
  inputRef,
}: SearchBarProps) {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search Product..."
      value={search}
      onChange={onChange}
    />
  );
}

export default SearchBar;
