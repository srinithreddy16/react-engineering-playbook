import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);
    setProduct({ ...currentParams });
  }, [searchParams]);

  if (!product) {
    return <h3>Loading Product...</h3>;
  }

  return <>
    <h3>Product Details</h3>
    <div>
      <p>Id: {product.id}</p>
      <p>Title: {product.title}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
    </div>
  </>
}
