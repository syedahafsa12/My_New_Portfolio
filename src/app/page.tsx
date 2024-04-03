"use client";

import {Typewriter,Cursor}from 'react-simple-typewriter'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Testimonial_cards from '@/components/testimonial_cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Projects } from '@/components/project';
import Navbar from '@/components/Navbar';
import Contact from '@/components/contact'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ThreeDCardDemo } from '@/components/d-card';
import Footer from '@/components/footer';
// import React from 'react'
// import { text, text } from 'stream/consumers';
import 'bootstrap/dist/css/bootstrap.min.css'
import { text } from 'node:stream/consumers';

import { SparklesCore } from "../components/ui/sparkles";
// 'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; // Corrected import statement
import { Nav } from 'react-bootstrap';

export default function page() {

const text = Typewriter({

  words:['a Web Developer','a Next.js Developer','a UI Designer',],
  loop:true,
}); 
  return (
    
   <main>  
    
  
    <div className='circlediv' >
      < img src="./circle12.png" alt="" width={380}height={380} className='circle'/>
      </div>
   <div>
   
   <h1 style={{ marginTop:'200px',marginLeft:'90px',color:'white', fontSize:70, fontWeight:800}}className='head1'>Hi, I&apos;m </h1>
   <h1 style={{ marginLeft:'90px',color:'#EA8290', fontSize:70, fontWeight:800}} className='head2' >Syeda Hafsa </h1>
  {/* <h1 style={{ marginLeft:'50px',color:'white' ,fontSize:50, fontWeight:700}} >I am </h1> */}
   <h1 style={{marginLeft:'90px',color:'white' ,fontSize:40, fontWeight:800}}className='head3' >I am <span style={{fontWeight:'700', color:'#EA8290'}}>{text}</span></h1>

   {/* <Cursor /> */}
{/* <div className='text-white'><Link  href={'#check'} className='text-white'>hii</Link></div> */}
   <Testimonial_cards />
   <Projects/>
   <ThreeDCardDemo />
   <Contact/>
   <Footer />
   {/* <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quibusdam excepturi pariatur itaque illum nam similique aspernatur impedit sit repellendus inventore molestias quaerat obcaecati earum necessitatibus incidunt? Quis iusto laborum nemo odit distinctio, at rem, quia asperiores commodi quidem ex? Facilis sint consequatur, facere quo iure at omnis neque soluta optio eos. Aut aperiam rerum, eum adipisci, mollitia dolore quidem quos cupiditate sit ipsam corrupti? Veritatis ipsum quam mollitia tempore fuga, sequi error optio aspernatur molestias repellendus consectetur quis? Dolorum aliquid eveniet minus tenetur sit vitae quam ad magnam explicabo distinctio ipsam hic earum maiores officiis, eius saepe laborum veritatis.</h1>
<h1 className='check'>bi</h1> */}
</div>


   
    
</main>
  
  )
}
