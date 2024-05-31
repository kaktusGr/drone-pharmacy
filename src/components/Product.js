import React from "react";

export default function Product({ name, gram, status }) {
    return (
        <div className={status !== "AVAILABLE" ? "product-card unavailable" : "product-card"}>
            {status !== "AVAILABLE" && <img src="./images/icons-svg/plus.svg" alt="close" />}
            <div className="product-info">
                <p className="brand">Brand name</p>
                <div className="product-name">
                    <p className="name">{name}, {gram}G</p>
                    <p className="price">$29.99</p>
                </div>
                <div className="product-hover-block">
                    <img src="./images/icons-svg/star.svg" alt="star" /><b>4.3</b>
                    <div className="product-small-info">
                        <small>{status}</small>
                        <div>
                            <img src="./images/icons-svg/arrow-left-right.svg" alt="star" />
                            <small>Compare</small>
                        </div>
                    </div>
                    <button className={status !== "AVAILABLE" ? "dark-btn unavailable" : "dark-btn"}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}