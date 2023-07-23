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
          style={{ width: 75 }}
          src={product.brand.brandImage.url}
          alt={product.brand.brandImage.attributes.imageAltText}
        />
        <p className="product-name">{product.productName}</p>
        <Text type="warning" size="lrg">£{product.price.priceIncTax}</Text>
        {product.price.isOnPromotion && (
          <Text type="secondary" size="md" className="product-sale-price">
            Was £{product.price.wasPriceIncTax}
          </Text>
        )}
        <Text type="warning" size="lrg">Stock Status: {product.stockStatus.status}</Text>
      </div>
    </div>
  );
}
