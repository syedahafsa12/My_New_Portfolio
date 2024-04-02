import React, { useState } from 'react';
import './CustomAlert.css'; // Import CSS file for styling

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Call onClose function passed from parent component
  };

  return (
    <div className={`custom-alert ${isOpen ? 'open' : ''}`}>
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;
