type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
  renderItem: (item: T) => React.ReactNode;
};
export const List = <T,>({items,onClick,renderItem,}: ListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {renderItem(item)}
        </div>
      ))}
    </>
  );
};