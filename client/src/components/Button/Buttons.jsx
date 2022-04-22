import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Buttons = () => {

  const navigate = useNavigate();

  return (
    <Button style={{ marginTop:"150px", marginLeft:"50px" }} onClick={() => navigate("/home")} variant="primary">Go Back</Button> 
     )
}

export default Buttons