import { useState } from "react";
import productArr from "./product_data.ts";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import Modal from 'react-modal';

export default function ProductList() {

  const [modalIsOpen, setIsOpen] = useState(false);
	  function openModal() {
		setIsOpen(true);
	  }
	  function closeModal() {
		setIsOpen(false);
	  }

  const openSweetAlert = ()=>{
    Swal.fire('Good job!','You clicked the button!', 'success')
  }
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
                    <p className="card-text">{product.rating.rate} <FaStar color='gold'/></p>
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