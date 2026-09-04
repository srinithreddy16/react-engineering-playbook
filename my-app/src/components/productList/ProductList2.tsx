import { useState } from 'react';
import productArr from './product_data';

export default function ProductList2() {
  const [products, setProducts] = useState(productArr);

  const filterProducts = (e: any) => {
    const searchText = e.target.value.toLowerCase();
    setProducts(productArr.filter(product =>
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    ));
  };

  const sortAsc = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };

  const sortDesc = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };

  return <>
    <h3 className="text-center">Product List</h3>
    <div className="container">
            <div className="row">
            <div className="col-sm-6 offset-2">
                <input className='form-control' type="search" onChange={filterProducts}
                  placeholder='search...' />
            </div>
            <div className="col-sm-3">
                <button className="btn btn-primary" onClick={sortAsc}>Sort Asc</button>
                <button className="btn btn-secondary mx-1" onClick={sortDesc}>Sort Desc</button>
            </div>
        </div>

        <div className="row mt-2">
            {products.map(product=>{
                return <div className='col-sm-3' key={product.id}>
                    <div className="card h-100">
                        <img src={product.image} className="card-img-top" alt="" height="200"/>
                        <div className="card-body">
                            <p className="text-truncate">{product.category}</p>
                            <p className="text-truncate">{product.title}</p>
                            <p className="text-truncate">{product.description}</p>
                            <p className="text-truncate">₹ {product.price}</p>
                            <p className="text-truncate">Rating : {product.rating.rate}</p>
                            <button className="btn btn-primary">details</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  </>
}
