import React, {useEffect } from 'react'
import styles from './Shop.module.css'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import MoveToTopBtn from '../../Components/MoveToTopButton/MoveToTopBtn'
import Catalog from '../../Components/Catalog'

export default function Shop(){

  const items = [
    {
      productId: "0",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 0",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "1",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 1",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "2",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 2",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "3",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 3",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "4",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 4",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "5",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 5",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "6",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 6",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "7",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 7",
      cost: "$BDS 150.00",
      hasSale: true,
      sale:'25',
    },
    {
      productId: "8",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 8",
      cost: "$BDS 150.00",
      hasSale: true,
      sale:'20',
    },
    {
      productId: "9",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 9",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "10",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 10",
      cost: "$BDS 150.00",
      hasSale: false,
      sale:'0',
    },
    {
      productId: "11",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 11",
      cost: "$BDS 150.00",
      hasSale: true,
      sale:'45',
    },
    {
      productId: "12",
      url: "src/assets/Front_Lip.png",
      name: "AE100 Front Lip 11",
      cost: "$BDS 150.00",
      hasSale: true,
      sale:'45',
    },
  ];
  const batchAmount = 13;

  return (
    <>
      <MoveToTopBtn/>
      <Nav/>
      <Catalog products={items} batchAmount={batchAmount}/>
      <Footer/>
    </>
  );
}