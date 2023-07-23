import React from "react";
import "./styles.css";
import Text from "../Text";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="product-card__container">
      <div className="image-container">
        <img
          className="product-image"
          src={product.image.url}
          alt={product.image.attributes.imageAltText}
        />
      </div>
      <div className="content">
        <img
          src={product.brand.brandImage.url}
          alt={product.brand.brandImage.attributes.imageAltText}
        />
        <Text type="primary" size="md">
          {product.productName}
        </Text>
        <Text type="warning" size="lrg">
          £{product.price.priceIncTax}
        </Text>
        {product.price.isOnPromotion && (
          <Text type="secondary" size="md" className="product-sale-price">
            Was £{product.price.wasPriceIncTax}
          </Text>
        )}
      </div>
    </div>
  );
}
