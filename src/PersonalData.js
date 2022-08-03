import { Button, TextField, Grid, InputLabel} from '@material-ui/core';
import React from 'react';
import { FaAddressBook } from 'react-icons/fa';



const PersonalData = ({classes, setName, setLastName, setProfession, 
  setPhone, setEmail, setAddress, setCodeAdd}) =>{

  const[postCode, setPostCode] = React.useState('');
  const[state, setState] = React.useState('');
  
  const handlePost = (event) =>{
    const name = event.target.name;
    if(name === 'pcode')
      setPostCode(event.target.value);
    else
      setState(event.target.value);
  }

  const handleAddr = () =>{

    setCodeAdd(values => ({...values, ['postCode']: postCode })); 
    setCodeAdd(values => ({...values, ['state']: state })); 
    
  }
  const handleName = (event) =>{
    setName(event.target.value);
   }

   const handleLastName = (event) =>{
    setLastName(event.target.value);
   }

   const handleProfession = (event) =>{
    setProfession(event.target.value);
   }

   const handlePhone = (event) =>{
    setPhone(event.target.value);
   }

   const handleEmail = (event) =>{
    setEmail(event.target.value);
   }
 
   const handleSelect = (event) =>{
    console.log(event.target.value);
   }

   const handleAddress = (event) => {
    setAddress(event.target.value);
   }
   
   
    return(
        <>
        
      <div className={classes.div}>
          <Grid container spacing={2}>
            <Grid item xs={12}><h3>Personal Information</h3></Grid>
            <Grid item xs={6}>
            <label>FirstName:</label>
            <TextField className={classes.textField} onChange={handleName}></TextField>
            </Grid>
            <Grid item xs={6}>
            <label>LastName:</label>
            <TextField className={classes.textField} onChange={handleLastName}></TextField>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Profession</InputLabel>
              <TextField className={classes.textField} onChange={handleProfession}></TextField>
            </Grid>
            <Grid item xs={6}>
            <InputLabel>Date of Birth</InputLabel>
            <TextField className={classes.textField} 
              type="date"
              defaultValue="2017-05-24"></TextField>
              
            </Grid>
  
            <Grid item xs={6}>
            <InputLabel>Gender</InputLabel>
              <TextField  className={classes.textField} onChange={handleSelect}>
                
              </TextField>
            </Grid>
  
            <Grid item xs={6}>
            <label>Nationality:</label>
              <TextField className={classes.textField}></TextField>
            </Grid>
  
            
            <Grid item xs={6}>
            <label>Phone Number</label>
              <TextField className={classes.textField} onChange={handlePhone} type='tel'></TextField>
            </Grid>
            <Grid item xs={12}>
            <InputLabel>Email</InputLabel>
              <TextField className={classes.textField} onChange={handleEmail} type='email'></TextField>
            </Grid>
            
            <Grid item xs={6}>
            <label>Address Line1</label>
              <TextField className={classes.textField}  onChange={handleAddress}></TextField>
            </Grid>
            <Grid item xs={6}>
            <label>Address Line2</label>
              <TextField className={classes.textField}></TextField>
            </Grid>
  
            <Grid item xs={4}>
            <label>Postal Code</label>
              <TextField className={classes.textField} name='pcode' onChange={handlePost}></TextField>
            </Grid>
            <Grid item xs={4}>
            <label>City</label>
              <TextField className={classes.textField} onChange={handlePost}></TextField>
            </Grid>
            <Grid item xs={4}>
            <label>Country</label>
              <TextField className={classes.textField}></TextField>
            </Grid>
          </Grid>
          <br></br>
          <Button onClick={handleAddr}>Submit</Button>
        </div>
        </>
    );
  };

  export default PersonalData;