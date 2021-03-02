import React from 'react';
import Button from '@material-ui/core/Button';

const Cookie = () => {

  const accept = () => {
    localStorage.setItem("cookies", "true")
  }

  return(
    <div>
      <p>You must enable Cookies</p>
      <Button variant="contained" color="secondary" onClick={accept}>Accept Terms And Conditions</Button>
    </div>
  )
}

export default Cookie