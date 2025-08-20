import React, { useEffect, useState } from 'react';
import Card from './Card';

const GetData = () => {
  const [clothsdata, setClothsdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setClothsdata(data); //  updates state and triggers re-render
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>welcome to RBU</h1>
      <Card clothsdata={clothsdata} />
    </>
  );
};

export default GetData;
