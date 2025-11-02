import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Rose Bouquet",
        price: 899,
        image: "/images/rose-bouquet.webp",
      },
      {
        id: 2,
        name: "Tulip Arrangement",
        price: 1099,
        image: "/images/tulip-arrangement.webp",
      },
      {
        id: 3,
        name: "Sunflower Pot",
        price: 749,
        image: "/images/sunflower-pot.webp",
      },
      {
        id: 4,
        name: "Orchid Elegance",
        price: 1299,
        image: "/images/orchid-elegance.webp",
      },
      {
        id: 5,
        name: "Daisy Delight",
        price: 699,
        image: "/images/daisy-delight.webp",
      },
      {
        id: 6,
        name: "Lavender Dreams",
        price: 999,
        image: "/images/lavender-dreams.webp",
      },
      {
        id: 7,
        name: "Peony Perfection",
        price: 1199,
        image: "/images/peony-perfection.webp",
      },
      {
        id: 8,
        name: "Mixed Bloom Basket",
        price: 1399,
        image: "/images/mixed-bloom-basket.webp",
      },
      {
        id: 9,
        name: "Carnation Charm",
        price: 799,
        image: "/images/carnation-charm.webp",
      },
      {
        id: 10,
        name: "Garden Bliss",
        price: 1499,
        image: "/images/garden-bliss.webp",
      },
    ]);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
