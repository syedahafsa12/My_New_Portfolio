import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Navbar from '@/app/page';
function Testimonial_cards() {
  const skillClass= 'skills';
  return (
    <main style={{backgroundColor:'black'}}>
    <div className="  card2 card rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <h1 className='skill'  id='ski'>My Skills</h1>
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  {/* <Navbar className={skillClass} /> */}
  </main>
);
}

const testimonials = [
  {
   
    quote:"Typescript" ,className:'-mt-200',
 img: "./ts.png",
  },
  {
    quote:
      "     NextJs",
   
    img: "./nextjs.png",
  },
  {
    quote: " NodeJs",
  
    img: "./nodejs.png",
  },
  {
    quote:
      "Html, Css",
   
    img: './htmlcss.png',
  },
  {
    quote:
      "Tailwind",
   
    img: "./tailwind.png",
  },
  ];


export default Testimonial_cards