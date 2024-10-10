import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `http://localhost:3000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
    console.log(productList);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={menu.id} lg={3}>
            <ProductCard key={menu.id} item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
