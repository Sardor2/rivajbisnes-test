import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const Notification = ({ article }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <Toast show={show} onClose={handleClose}>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded mr-2"
          alt=""
        />
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
  );
};

export default Notification;
