import { useState } from "react";
import productArr from "./product_data.ts";
import Swal from "sweetalert2";
import Modal from 'react-modal';
import Select from "react-select";
import './ProductList.css';



export default function ProductList() {

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);
	  function openModal() {
		setIsOpen(true);
	  }
	  function closeModal() {
		setIsOpen(false);
	  }

  //sweetalert
  const openSweetAlert = ()=>{
    Swal.fire('Good job!','You clicked the button!', 'success')
  }

  //search
  const [selectedProduct, setSelectedProduct] = useState<{ value: number, label: string } | null>(null);
    const filteredProducts = selectedProduct
    ? productArr.filter(product => product.id === selectedProduct.value)
    : productArr;
  return (
    <>
      <h3 className="text-center">Product List</h3>

      <div>
        <button onClick={openSweetAlert}>Sweet Alert</button>
        <button onClick={openModal}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <h2>Hello Hiiiiiiiiiii</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
        </Modal>
      </div>
         <div className="container mt-3">
      <h3 className="text-center mb-4">Product List</h3>

      <div className="row mb-4">
        <div className="col-sm-6 offset-3">
          <Select
            placeholder="Search Product..."
            isClearable
            value={selectedProduct}
            onChange={setSelectedProduct}
            options={productArr.map(product => ({
              value: product.id,
              label: product.title
            }))}
          />
        </div>
      </div>
      

      <div className="container product-list">
       <div className="row">
        {filteredProducts.map(product => (
          <div className="col-sm-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt=""/>
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
            ))}
        </div>
      </div>
      </div>
      
    </>
  );
}
