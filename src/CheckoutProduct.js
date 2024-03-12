import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct () {
    return (

            <div className="checkoutProduct">
                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/545695/1.jpg?0441" className="checkoutProduct_image"/>


                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        Lorem jr oho ojvhvr ijvh kjfhvi ijks iuh sir siuvhsi ihvve sjhvnir sijb si shjb iuhb sjbsfh  siubsi siujfbv ijbsuhsb s isi sis is
                    </p>
                    <p className="checkoutProduct_price">
                         <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        ⭐⭐
                    </div>
                    <button>Remove from Basket</button>
                </div>
            </div>

    )
}

export default CheckoutProduct