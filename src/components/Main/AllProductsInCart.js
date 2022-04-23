import React, { useState } from "react";
import { GiStockpiles } from "react-icons/gi";
// import ImgTag from "./ImgTag";

export default function AllProductsInCart () {
	return (
		<div className="each-product-box">
			<div className="cart-img-container">
				{/* <ImgTag
					// imgurl={product.imgurl}
					alt={product.productName}
					className={"productImage"}
				/> */}
			</div>
			<div className="cart-item-info">
				<p>{product.productname}</p>
				<p>{product.category}</p>
				<p>size: {product.size}</p>
				<p className="price">£{product.price}</p>
				<button className="cart-item-close" onClick={deleteHandle}>
					<MdClose />
				</button>
			</div>
		</div>
	);
}
