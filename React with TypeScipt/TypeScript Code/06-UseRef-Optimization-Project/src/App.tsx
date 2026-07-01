import {
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

import { type Product } from "./types/product";

function App() {
  const [search, setSearch] =useState("");

  const inputRef = useRef<HTMLInputElement>(null!);

  const products: Product[] = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 150000,
      category: "Laptop",
    },
    {
      id: 2,
      name: "iPhone 16",
      price: 80000,
      category: "Mobile",
    },
    {
      id: 3,
      name: "Samsung S25",
      price: 70000,
      category: "Mobile",
    },
    {
      id: 4,
      name: "Dell XPS",
      price: 120000,
      category: "Laptop",
    },
  ];

  const handleSearch =
    useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      },
      []
    );

  const focusInput =useCallback(() => {
    inputRef.current?.focus();
    }, []);

  const filteredProducts =
    useMemo(() => {
      console.log(
        "Filtering Products..."
      );

      return products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [search]);

  return (
    <div>
      <h1>
        Product Search App
      </h1>

      <SearchBar
        search={search}
        onChange={handleSearch}
        inputRef={inputRef}
      />

      <button
        onClick={focusInput}
      >
        Focus Search
      </button>
      <h3>
        Products Found:
        {filteredProducts.length}
      </h3>

      {filteredProducts.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      )}
    </div>
  );
}

export default App;