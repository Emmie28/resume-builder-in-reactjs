import { InputLabel, TextField, Button, MenuItem } from "@material-ui/core";
import * as React from 'react';
import Box from '@material-ui/core/Box';
import {  makeStyles } from '@material-ui/core/styles';
import Select from "@material-ui/core/Select/";


const useStyles = makeStyles(() =>({
    div:{
        border: '1px solid black',
        width: '50%',
        margin: '30px',
        padding: '20px',
        position: 'relative',
        left: '22%',
      },

      textField:{
        width:'100%',
      },

    verticalLine: {
        height: '300px',
        borderRight: '1px solid #000900',
        position: 'absolute',
        right: '50%',
    },

}));

const Courses = ({setCourses}) =>{
    const classes = useStyles();
    const handleChange = (event) =>{
        setCourses(event.target.value);
    }
    return(
        <>  
            <InputLabel>Courses</InputLabel>
            <TextField className= {classes.textField} onChange={handleChange}></TextField>
        </>
    )
}

const Skills = ({setSkills, classes}) =>{

    const[skill,setSkill] = React.useState([]);
    const[n, setN] = React.useState('');
    const[val,setVal] = React.useState('');

    const handleSelect = (event) =>{
        const value = event.target.value;
        setVal(value);
        setSkill(values => ({...values, [n]: value }));
    };

    const handleSave = () =>{
        setSkills(skill);
        console.log(skill);
    }

    const handleChange = (event) =>{
        
        setN(event.target.value);
    }
    return(
        <>  
            <InputLabel>Skills</InputLabel>
            <TextField className= {classes.textField} onChange={handleChange}></TextField>
            <Select fullWidth defaultValue={val}>
        
                <option onClick={handleSelect} value='1'>1</option>
                <option onClick={handleSelect} value='2'>2</option>
                <option onClick={handleSelect} value='3'>3</option>
                <option onClick={handleSelect} value='4'>4</option>
                <option onClick={handleSelect} value='5'>5</option>
                
            </Select>
            <Button onClick={handleSave}>Save</Button>
        </>
    )
}

const Programming = ({setProgLang, classes}) =>{
    const handleChange = (event) =>{
        setProgLang(event.target.value);
    }
    return(
        <>  
            <InputLabel>Programming Languages</InputLabel>
            <TextField className= {classes.textField}  onChange={handleChange}></TextField>  
        </>
    )
}

const ExtraCurricular = ({setExtra, extra, classes}) =>{
    const [ex, setEx] = React.useState('');
    const handleChange = (event) =>{
        setEx(event.target.value);
        
    }
    const handleSave = () =>{
        const a = extra.concat({ex});
        setExtra(a);
    }
    return(
        <>  
            <InputLabel>ExtraCurricular Activities</InputLabel>
            <TextField className= {classes.textField}  onChange={handleChange}></TextField>
            <Button onClick={handleSave}>Save</Button>
        </>
    )
}

const Languages = ({classes, setLang}) =>{

    const[language,setLanguage] = React.useState([]);
    const[n, setN] = React.useState('');
    const[val,setVal] = React.useState('');
    const handleChange = (event) =>{
        setN(event.target.value);
    };

    const handleSelect = (event) =>{
        const value = event.target.value;
        setVal(value);
        setLanguage(values => ({...values, [n]: value }));
    };

    const handleSave2 = () =>{
        setLang(language);
    
    }

    return (
        <>
            <InputLabel>Languages</InputLabel>
            <TextField className={classes.textField} onChange={handleChange}></TextField>
            <Select fullWidth value={val}>
                <label>Select Level</label>
                <option onClick={handleSelect} value='1'>1</option>
                <option onClick={handleSelect} value='2'>2</option>
                <option onClick={handleSelect} value='3'>3</option>
                <option onClick={handleSelect} value='4'>4</option>
                <option onClick={handleSelect} value='5'>5</option>
                
            </Select>
            <Button onClick={handleSave2}>Save</Button>
        </>
    )
}

const Hobbies = ({setHobbies, setCourses, setSkills, setProgLang, setExtra, extra, setLang}) =>{
    const classes = useStyles();
    const handleChange = (event) =>{
        setHobbies(event.target.value);
    }
    

    return(
        <>  
        <div className={classes.div}>
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <InputLabel>Hobbies</InputLabel>
                    <TextField className={classes.textField} onChange={handleChange}></TextField>
                </Box>
                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <Courses setCourses={setCourses}/>
                </Box>
            </Box>

            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <Skills setSkills={setSkills} classes = {classes}/>
                </Box>
                <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                    <Programming setProgLang={setProgLang} classes = {classes}/>
                </Box>
            </Box>
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
            <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                <ExtraCurricular setExtra={setExtra} extra = {extra} classes = {classes}/>
                </Box>
            <Box component="span" sx={{ width: '50%', padding: '10px'}}>
                <Languages classes = {classes} setLang = {setLang} />
                
                </Box>
            </Box>
            
        </div>
            
        </>
    )
}

export default Hobbies;