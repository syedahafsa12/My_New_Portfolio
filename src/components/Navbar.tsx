// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import link from "next/link"
// import Link from "next/link";

// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <main className={cn("fixed top-7 inset-x-0 max-w-2xl mx-auto z-50", className)}><Menu setActive={setActive}>
//     {/* <MenuItem setActive={setActive} active={active} item="Homel" >
//        {/* <div className="flex flex-col space-y-4 text-sm"> */} 
//         {/* <HoveredLink href="/web-dev">Web Development</HoveredLink> */}
//         {/* <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//         <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//         <HoveredLink href="/branding">Branding</HoveredLink>
//       </div> */} 
      
//     {/* </MenuItem> */}
//     {/* <Menu setActive={setActive}> */}
//             <Link href={"/"}>
//             <MenuItem setActive={setActive} active={active} item="Home">
            
//             </MenuItem>
//             </Link>
//             <Link href={"/about"}>
//             <MenuItem setActive={setActive} active={active} item="About Us">
            
//             </MenuItem>
//             </Link>
           
//             {/* </Menu> */}
//     {/* <MenuItem setActive={setActive} active={active} item="Home">
//   <Link href="/">Home</Link>
// </MenuItem> */}
//     <MenuItem setActive={setActive} active={active} item="Courses">
//       <div className="  text-sm grid  gap-10 p-4">
//         <ProductItem
//           title="Web Development"
//           href="/courses"
//           src="https://assets.aceternity.com/demos/algochurn.webp"
//           description="Learn the basics of web development."
//         />
//         {/* <ProductItem
//           title="Tailwind Master Kit"
//           href="https://tailwindmasterkit.com"
//           src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//           description="Production ready Tailwind css components for your next project"
//         />
//         <ProductItem
//           title="Moonbeam"
//           href="https://gomoonbeam.com"
//           src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//           description="Never write from scratch again. Go from idea to blog in minutes."
//         />
//         <ProductItem
//           title="Rogue"
//           href="https://userogue.com"
//           src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//           description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//         /> */}
//       </div>
//     </MenuItem>
//     <Link href={"/contact"}>
//             <MenuItem setActive={setActive} active={active} item="Contact">
            
//             </MenuItem>
//             </Link>
            
//     {/* <MenuItem setActive={setActive} active={active} item="Pricing">
//       <div className="flex flex-col space-y-4 text-sm">
//         <HoveredLink href="/hobby">Hobby</HoveredLink>
//         <HoveredLink href="/individual">Individual</HoveredLink>
//         <HoveredLink href="/team">Team</HoveredLink>
//         <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//       </div>
//     </MenuItem> */}
//   </Menu></main>
//   )
// }

// export default Navbar
'use client'
import Testimonial_cards from '@/components/testimonial_cards';
// import navb from "./components/page";
// import Navbar from "../components/Navbar";
// import { Projects } from '@/components/project';
import { ThreeDCardDemo } from '@/components/d-card';
import Footer from '@/components/footer';
import { Projects } from "@/components/project";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
// Import useRouter from next/router
import { useRouter } from 'next/navigation';
import Link from "next/link"; // Corrected import statement
// import project from '@/app/hi/project';
import { useEffect } from 'react';

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    
  
    useEffect(() => {
      setIsClient(true);
    }, []);
    
    return (
        <main className={cn("fixed top-7 inset-x-0 max-w-2xl sm:mx-0 md:mx-auto lg:mx-auto z-50", className='navbartop')}>
            <Menu setActive={setActive}>
                <Link href={"/"} className="link">
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                {/* <li className="nav-item">
              <Link href="#check" legacyBehavior>
                <a className="nav-link active" aria-current="page" style={{ color: 'black' }}>Home</a>
              </Link>
            </li> */}

                   
            
                <Link href={"#ski"} className="link">
                    <MenuItem setActive={setActive} active={active} item="Skills" />
                </Link>
                <Link href={"#projects"} className="link" >
                    <MenuItem  setActive={setActive} active={active} item="Project" />
                </Link>
                <Link href={"#con"} className="link">
                    <MenuItem  setActive={setActive} active={active} item="Contact"  />
                </Link>
            </Menu>
        </main>
    );
}

export default Navbar;

