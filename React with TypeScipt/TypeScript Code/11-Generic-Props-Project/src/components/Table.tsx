type TableProps<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export function Table<T>({data,renderRow,}: TableProps<T>) {
  return (
    <div>
      {data.map(
        (item, index) => (
          <div key={index}>
            {renderRow(item)}
          </div>
        )
      )}
    </div>
  );
}