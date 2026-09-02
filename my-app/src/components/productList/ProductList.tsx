import productArr from "./product_data.ts";

export default function ProductList() {
  return (
    <>
      <h3 className="text-center">Product List</h3>

      <div className="container">
        <div className="row">
            {productArr.map(product=>{
                return <div className="col-sm-3" key={product.id}>
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="..." height='200px' />
                  <div className="card-body">
                    <h5 className="card-title">{product.category}</h5>
                    <p className="card-text text-truncate">{product.title}</p>
                    <p className="card-text text-truncate">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.rating.rate}</p>
                    <a href="#" className="btn btn-primary">
                      details
                    </a>
                  </div>
                </div>
              </div>
            })}
        </div>
      </div>
      
    </>
  );
} 