interface DeveloperSearchProps {
  value: string;
  onChange: (value: string) => void;
}

function DeveloperSearch({
  value,
  onChange,
}: DeveloperSearchProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search developers..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}

export default DeveloperSearch;