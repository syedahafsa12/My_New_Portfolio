import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import CustomAlert from './alert';

const Contact = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = () => {
    if (isClient) {
      window.open('https://www.linkedin.com/in/syeda-hafsa-67b7342ab/', '_blank');
    }
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace "YOUR_ACCESS_KEY_HERE" with your actual access key
    formData.append("access_key", "a77cb2ef-182b-48bc-9661-2c716e84db6e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      // Show a success message to the user
      setShowAlert(true); // Set showAlert state to true to display the alert
      // Optionally, you can reset the form after submission
      event.target.reset();
      console.log(result);
    }
  }

  // Add state variable to track navbar collapse
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main> 
         <h1 style={{ marginLeft:590,marginTop:100,fontSize: '24px', marginBottom: 30 ,color:'#EA8290', fontWeight:800}} className='conh1'>Contact Now</h1>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <div style={{ maxWidth: '600px', margin: '0 10px' }}>
      <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' ,color:'white', fontWeight:800}} id='con'>Get In Touch</h1>
        <input type="text" name="name" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required placeholder='Your name' />
        <input type="email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required placeholder='Your Email' />
        <textarea name="message" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required placeholder='Your Message'></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: '100%', padding: '10px 20px', backgroundColor: '#EA8290', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit
        </motion.button>
      </form>
      {showAlert && (
        <CustomAlert 
          message={'Form Submitted Successfully'} 
          onClose={() => setShowAlert(false)} // Close the alert when onClose is triggered
        />
      )}
    </div>
  </div></main>
   

  
  );
}
Contact.displayName = 'Contact';

export default Contact;
