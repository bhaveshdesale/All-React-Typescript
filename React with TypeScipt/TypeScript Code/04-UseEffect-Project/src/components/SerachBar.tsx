interface SearchBarProps {
  value: string;
  onChange: (  e: React.ChangeEvent<HTMLInputElement> ) => void;
}

function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Enter GitHub Username"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;

