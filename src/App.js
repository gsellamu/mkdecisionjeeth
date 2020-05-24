import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"

import "./styles.css";

export default function App() {
  function handleClickOpen() {
    /* call AWS lamda fucntion */
  }
  return (
   
      <form className={document.root} noValidate autoComplete="off">
      
      <h1> Welcome to MK Decision's Email Service</h1>
      
      <div position="relative" margin="auto">
       <TextField required name="true"
       id="outlines-required-name-input"
       label="Full Name"
       type="name"
       autoComplete="current-name"
       variant="outlined"
       fullWidth
       />
       </div>
       
       <div> 
       <TextField required email="true"
       id="outlined-required-password-input"
       label="Email Address"
       type="email"
       autoComplete="current-email"
       variant="outlined"
       fullWidth
       className={document.textField}
      
       />
       </div>

       <div>
         <TextField required message="true"
         id="outlined-required-password-input"
         label="Enter your message"
         type="message"
         variant="outlined"
         autoComplete="current-message"
         fullWidth
         />
         </div>
           
    <div>
      <Button type="submit"
      fullWidth
      label="Submit"
      defaultValue="Submit"
      variant="contained"
      color="primary"
      className={document.submit}
      onClick={handleClickOpen}
      >
      Submit
      </Button>
      </div>
    
      
    </form>   
  
  );
}
