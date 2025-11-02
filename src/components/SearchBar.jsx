import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { Search } from "lucide-react";

export default function SearchBar({ onSelect }) {
  const { products } = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  }, [query, products]);

  return (
    <div className="relative w-full max-w-xs mx-auto text-gray-800">
      {/* Search input */}
      <div className="flex items-center bg-white rounded-full shadow-md px-3 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-accent transition">
        <Search size={18} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search flowers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="flex-1 outline-none bg-transparent text-sm"
        />
      </div>

      {/* Dropdown results */}
      {isFocused && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-50 max-h-60 overflow-y-auto">
          {filtered.map((p) => (
            <li
              key={p.id}
              onClick={() => {
                onSelect?.(p);
                setQuery("");
                setIsFocused(false);
              }}
              className="px-4 py-2 hover:bg-pink-50 cursor-pointer text-sm text-gray-700 flex items-center space-x-3"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-8 h-8 rounded-md object-cover"
              />
              <span>{p.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
