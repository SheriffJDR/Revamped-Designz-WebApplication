import React from 'react'
import Nav from '../../Components/Nav'
import FeaturedSection from '../../Components/FeaturedSection'
import NewArrivals from '../../Components/NewArrivals'
import BestSeller from '../../Components/BestSeller'
import SalesAndDeals from '../../Components/SalesAndDeals'
import ProjectShowCase from '../../Components/ProjectShowCase'
import MoveToTopBtn from '../../Components/MoveToTopButton'
import RevampedCopywrite from '../../Components/RevampedCopywrite'
import Footer from '../../Components/Footer'

function Home() {

  const newArrivals = [
      {
        productId: '0',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 0',
        cost:'$BDS 150.00',
  
      },
      {
        productId: '1',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 1',
        cost:'$BDS 150.00',
  
      },
      {
        productId: '2',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 2',
        cost:'$BDS 150.00',
  
      },
      {
        productId: '3',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 3',
        cost:'$BDS 150.00',
      },
      {
        productId: '4',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 4',
        cost:'$BDS 150.00',
      },
      {
        productId: '5',
        url:'src/assets/Front_Lip.png',
        name:'AE100 Front Lip 5',
        cost:'$BDS 150.00',
      },
  ]
  
  const bestSellers = [
    {
      'productId' : '1',
      'url' : 'https://images.unsplash.com/photo-1601780551554-c60b5780b783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      'alt' : 'Best seller 1'
    },
    {
      'productId':'2',
      'url' : 'https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
      'alt' : 'Best seller 2'
    },
    {
      'productId':'3',
      'url' : 'https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2178&q=80',
      'alt' : 'Best seller 3'
    },
    {
      'productId' : '4',
      'url' : 'https://images.unsplash.com/photo-1601780551554-c60b5780b783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      'alt' : 'Best seller 1'
    },
  ]
  
  const newSales = [
    {
      productId: '0',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 0',
      cost:'$BDS 150.00',
      sale:'25',
    },
    {
      productId: '1',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 1',
      cost:'$BDS 150.00',
      sale:'35',
    },
    {
      productId: '2',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 2',
      cost:'$BDS 150.00',
      sale:'15',
    },
    {
      productId: '3',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 3',
      cost:'$BDS 150.00',
      sale:'40',
    },
    {
      productId: '4',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 4',
      cost:'$BDS 150.00',
      sale:'23',
    },
    {
      productId: '5',
      url:'src/assets/Front_Lip.png',
      name:'AE100 Front Lip 5',
      cost:'$BDS 150.00',
      sale:'25',
    },
  ]
  
  const projectsArray = [
    {
      projectId : '0',
      src : 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      imageAlt : 'Man working in Repair shop.'  
    },
    {
      projectId : '1',
      src : 'https://images.unsplash.com/photo-1618312980096-873bd19759a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      imageAlt : 'Two red vintage BMW\'s in Repair shop.'  
    },
    
  ]

  return (
    <>
      <MoveToTopBtn/>
      <Nav/>
      <FeaturedSection/>
      <NewArrivals newArrivals = {newArrivals}/>
      <BestSeller bestSellers = {bestSellers}/>
      <SalesAndDeals salesAndDealsItems = {newSales}/>
      <ProjectShowCase projects = {projectsArray}/>
      <RevampedCopywrite color='#00BFE8'/>
      <Footer/>
    </>

  )
}

export default Home