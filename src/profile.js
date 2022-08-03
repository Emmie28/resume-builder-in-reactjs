import {  InputLabel, TextField, Button, Grid } from "@material-ui/core";
import * as React from 'react';

import Box from '@material-ui/core/Box';



const HistoryControl = ({classes, serviceList,setJobHistory,handleAdd, removeService}) =>{

    const [job, setJob] = React.useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setJob(values => ({...values, [name]: value }));   
    }

    const handleSave = () =>{
        console.log(job)
        setJobHistory(job);
      }


    return(
        <div>
        {serviceList.map((singleService, index) =>(
            <div key={index}>
            
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }} >
                <Box  component="span" sx={{ width: '50%', padding: '10px'}}>
                <InputLabel >Title</InputLabel>
                <TextField className={classes.textField} name='title'  onChange={(e)=>handleChange(e)}></TextField>
                </Box>

                <Box component="span" sx={{ width: '50%', padding: '10px' }}>
                <InputLabel>Description</InputLabel>
                <TextField className={classes.textField}  name='description'  onChange={handleChange}
                multiline
                maxRows={4}>
                </TextField>
                </Box>
   
            </Box>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>From</InputLabel>
                    <TextField className={classes.textField} type="date" name={'from' + index} 
                        defaultValue="2017-05-24" onChange={handleChange}></TextField>
                    </Box>

                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>To</InputLabel>
                    <TextField className={classes.textField}  type="date" name={'to' + index} 
                        defaultValue="2017-05-24" onChange={handleChange}></TextField>
                    </Box>
                    
                </Box>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box> <Button onClick={handleAdd}>Add</Button></Box> 
                <Box>
                <div>
                <Button onClick={handleSave}>Save</Button>
                {serviceList.length > 1 &&(
                    <Button onClick={() => removeService(index)}>Remove</Button>
                )}   
            </div>
                </Box>  
            </Box>
           
            
            
            </div>
        ))}
    </div>
    )
}

const InternshipControl = ({serviceList,handleAdd, removeService, classes, setIntern}) =>{
    
    const [internship, setInternship] = React.useState([]);
    
    const handleSave = () =>{
        console.log(internship)
        setIntern(internship);
      }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInternship(values => ({...values, [name]: value }));
       
    }

    return(
        <div>
        {serviceList.map((singleService, index) =>(
            <div key={index}>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                <InputLabel >Title</InputLabel>
                <TextField className={classes.textField} name={'title' + index} onChange={handleChange}></TextField>
                </Box>

                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                <InputLabel>Description</InputLabel>
                <TextField className={classes.textField} name={'description'+index}
                multiline
                maxRows={4}
                onChange={handleChange}>
                
                </TextField>
                </Box>
            </Box>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>From</InputLabel>
                    <TextField className={classes.textField} type="date" name={'from' + index} onChange={handleChange}
                        defaultValue="2017-05-24"></TextField>
                    </Box>

                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>To</InputLabel>
                    <TextField className={classes.textField}  type="date" name={'to' + index} onChange={handleChange}
                        defaultValue="2017-05-24"></TextField>
                    </Box>
                    
                </Box>
            
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box>
                    <Button onClick={handleAdd}>Add</Button>
                </Box>
                <Box>
                <div>
                <Button onClick={handleSave}>Save</Button>
                {serviceList.length > 1 &&(
                    <Button onClick={() => removeService(index)}>Remove</Button>
                )}   
            </div>
                </Box>
            </Box>
            
            </div>
        ))}
    </div>
    )
}

const EduHistory = ({classes,serviceList, handleAdd, removeService,setInputs, handleSave2}) =>{
   
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }));
       
    }

    return(
        <div>
            
        {serviceList.map((singleService, index) =>(
            
                <div key={index}>
                
                <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel >Degree</InputLabel>
                    <TextField className={classes.textField} name={'title' + index}  onChange={handleChange}></TextField>
                    </Box>

                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>School</InputLabel>
                    <TextField className={classes.textField} name={'school' + index}  onChange={handleChange}> </TextField> 
                    </Box>
                
                </Box>

                <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>From</InputLabel>
                    <TextField className={classes.textField} type="date" name={'from' + index} onChange={handleChange}
                        defaultValue="2017-05-24"></TextField>
                    </Box>

                    <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>To</InputLabel>
                    <TextField className={classes.textField}  type="date" name={'to' + index} onChange={handleChange}
                        defaultValue="2017-05-24"></TextField>
                    </Box>
                    
                </Box>

                <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box component="span" sx={{ width: '100%', padding: '10px'}}>
                        <InputLabel>Description</InputLabel>
                        <TextField className={classes.textField} type='text' name={'des' + index} onChange={handleChange}></TextField>
                    </Box>
                </Box>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box>
                <Button onClick={handleAdd}>Add</Button>
                </Box>
                <Box>
                <div>
                <Button onClick={handleSave2}>Save</Button>
                {serviceList.length > 1 &&(
                    <Button onClick={() => removeService(index)}>Remove</Button>
                )}   
                </div>
                </Box>
            </Box>
           
            
            </div>
        ))}
        <Button type='submit'>Submit</Button>
    
    </div>
    )

}


const Profile = ({classes,setProfile, serviceList, 
     setServiceList, setInputs, inputs, handleSave2, setIntern, setJobHistory}) =>{
   
    const handleProfile = (event) =>{
        setProfile(event.target.value);
    };
    const handleAdd = () =>{
        setServiceList([...serviceList, { services: ""}])
    };

    const removeService = (index) =>{
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    }

    
    
    return(
        <>  
        <div className={classes.div}>
        <Grid container-spacing={2}>
        <Grid xs={12}>
        <InputLabel>Profile</InputLabel>
        
        <TextField  className={classes.textField}
        spellCheck='true'
        onChange={handleProfile}>
        </TextField>
        </Grid>
        
    <Grid item xs={12}><h3>Employment History</h3></Grid>
    
    
       <HistoryControl 
       handleAdd={handleAdd}
       removeService={removeService}
       serviceList={serviceList}
       classes={classes}
       setJobHistory = {setJobHistory}
       />

    
    <h3>Internships</h3>
    <div>
    <InternshipControl 
       handleAdd={handleAdd}
       removeService={removeService}
       serviceList={serviceList}
       setIntern = {setIntern}
       classes ={classes}
       />
    </div>
    <Grid item xs={12}>
        <h3>Education</h3>
    </Grid>
    <Grid item xs={12}>
    <EduHistory 
       handleAdd={handleAdd}
       removeService={removeService}
       serviceList={serviceList}
       setInputs = {setInputs}
       inputs = {inputs}
       handleSave2 = {handleSave2}
       classes ={classes}
       />
    </Grid>
    
       
       
    </Grid>
        </div>
        
        </>
    );
}

export default Profile;