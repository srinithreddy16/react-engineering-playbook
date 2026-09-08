import { useState, useMemo } from "react";

export default function UseMemoTest() {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Tablet",
  ];
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText]);
  /* const filteredProducts = products.filter((product) => {
    console.log("filtering...");
    return product.toLowerCase().includes(searchText.toLowerCase());
  }); */
  return (
    <div>
      <h2>Product Search</h2>
      <input
        className="mx-2"
        type="text"
        placeholder="Search product..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
