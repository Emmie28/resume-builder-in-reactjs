import {  makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import './App.css';
import React from 'react';
import Box from '@material-ui/core/Box';
import { FaPhone, FaEnvelope,FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { SkillBars} from 'react-skills';




const useStyles = makeStyles(() =>({

    container:{
        
        marginTop:'10px',
        
        marginBotton:'none',
    },

    date:{
        fontSize: '12px',
        fontWeight: 'lighter',
        color: 'grey',
    },

    floatContainer:{
        
        width: '100%',
    },

    floatChild:{
        width: '50%',
        float: 'left',
    },

    container1:{
        marginTop:'10px',
        margin:'50px',
        marginBottom:'none',
    },

    grid:{

        marginBottom:'none',
    },

    div:{
        color:'white',
        backgroundColor: "#2c3e50",
        border: '1px solid black',
        height: '10%',
        padding: '20px',
        paddingBottom:'none',
        textAlign: 'center',
        borderRadius: '10px',
        
    },

    verticalLine: {
        height: '100%',
        borderRight: '0.5px solid green',
        borderBotton: 'none',
        borderLeft: 'none',
        borderTop: 'none',
    },

    p:{
        backgroundColor: "#2c3e50",
        color: 'white',
        marginRight:'5px',
        padding:'3px',
        borderRadius:'2px',
        
    },

    horizontalLine:{
        width: '100%',
        borderRight: '0.5px solid green',
        borderBotton: 'none',
        borderLeft: 'none',
        borderTop: 'none',
    },
    contact:{
        marginTop:'20px',
    },


}));

const Details = ({name, lastName, profession, phone, email, codeAdd,
    profile, jobHist, hobbies, skillHist, courses, progLang, extra, address, testing, internshipss, langHist}) =>{
   
   
    const classes = useStyles();
   const [addr,setAddr] = React.useState([
    {
        'postal':'',
        'city':'',
    }]
    );

   const [city, setCity] = React.useState('');
   const [pCode, setPcode] = React.useState('');
    
   const programming = progLang.split(',');
   const hobby = hobbies.split(',');
   const course = courses.split(',');
   React.useEffect(()=>{
    console.log({addr});
    codeAdd !== undefined &&(Object.entries(codeAdd).map(([key,value])=>{
        if(key.includes('postCode'))
          setAddr(addr.postal = value);
        else
            setAddr(addr.city = value);
        setCity(addr.city);
        setPcode(addr.postal + ', ');
       }));
   },[codeAdd]);

   
   
    return(
        <>
        <div className={classes.container1} id='content'>

        <div className={classes.div}>
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch'}}>
                <Box >
                    <FaUser fontSize={100}/>
                </Box>

                <Box sx={{alignContent: 'flex-start', marginLeft:'10%'}}>
                <h1>{name} {lastName}</h1>
                <h3>{profession}</h3>
                </Box>
            </Box>
                
        </div>
        
        <div className={classes.contact}>
            <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch', justifyContent: 'space-evenly'}}>
                <Box component="span" ><i><FaPhone />{ phone}</i></Box>
                <Box component="span" ><i><FaEnvelope />{ email}</i></Box> 
                <Box component="span" ><i><FaMapMarkerAlt />{address }{pCode}{city}</i></Box> 
            </Box>
        </div>
        <hr className={classes.horizontalLine}></hr>

        <div className={classes.container}>
        
        <Box display='flex' flexDirection='row' p={1} m={1} sx={{ alignItems: 'stretch',  alignContent: 'stretch' }}>
            <Box component="span" sx={{ width: '69%', padding: '10px'}}>
            <div className={classes.grid}>
            <h3><i>Profile</i></h3>
            <p>{profile}</p>
        </div>

        <Grid container spacing={2}>

        <Grid xs={12} className={classes.grid}>
        <h3><i>Employment History</i></h3>
        <hr className={classes.horizontalLine}></hr>
        {jobHist !== undefined && (jobHist.map(function(item){
             const date = <><i className={classes.date}>{item.from}
             </i> <i className={classes.date}>to </i><i className={classes.date}>{item.to}</i></>
             const str = item.desc.split(',');

            return(
                <>
                    <b>{item.company} <br></br> {date}</b>
                    <p>{str !== undefined && str.map((i)=>{
                        return(
                            <>
                                <ul>
                                    <li>{i}</li>
                                </ul>
                            </>
                        )
                    }
                    )} </p>
                    <hr className={classes.horizontalLine}></hr>
                </>
                
            );
        }))}
        
        <h3><i>Internships</i></h3>
        <hr className={classes.horizontalLine}></hr>
        { internshipss !== undefined && (internshipss.map(function(item){
            
            const date = <><i className={classes.date}>{item.from}
            </i> <i className={classes.date}>to </i><i className={classes.date}>{item.to}</i></>
            const str = item.desc.split(',');

            return(
                <>  
                    <b>{item.company} <br></br> {date}</b>
                    <p>{str !== undefined && str.map((i)=>{
                        return(
                            <>
                                <ul>
                                    <li>{i}</li>
                                </ul>
                            </>
                        )
                    }
                    )} </p>
                    <hr className={classes.horizontalLine}></hr>     
                </>
                
            );
        }))}

        
        <h3><i>Education</i></h3>
        <div className={classes.floatContainer}>
        {testing !== undefined && (testing.map((item) =>{
                const date = <><i className={classes.date}>{item.from}
                </i> <i className={classes.date}>to </i><i className={classes.date}>{item.to}</i></>
                const str = item.descrip.split(',');
            return(
            <>
                    <b>{item.course}, {item.school} <br></br> {date}</b> 
                    
                    <p>{str !== undefined && str.map((i)=>{
                        return(
                            <>
                                <ul>
                                    <li>{i}</li>
                                </ul>
                            </>
                        )
                    }
                    )} </p>


            </>) 
            
        })     
        )}  </div>
        <hr className={classes.horizontalLine}></hr>
        
        <h3><i>Courses</i></h3>
        <p>{ course !== undefined && (course.map((item)=>{
            return(
                <>
                    <span>
                        <i className={classes.p}>{item}</i>
                    </span>
                </>
            )
        }))

        }</p>
        <hr className={classes.horizontalLine}></hr>
        <h3><i>Programming Languages</i></h3>
        <p>{programming !== undefined && (programming.map((item)=>{
            return(
                <>
                
                    <span ><i className={classes.p}>{item}</i></span>
                    
                </>
            )
        }))}</p>
        <hr className={classes.horizontalLine}></hr>
        <h3><i>Extra-Curricular Activities</i></h3>
        
        {extra !== undefined && (
            extra.map((item) =>{

                return(
                    <>
                        <ul>
                            <li>{item.ex}</li>
                        </ul>
                    </>
                );
            })
        )}
        <hr className={classes.horizontalLine}></hr>
    
        </Grid>
        
        
        </Grid>
            </Box>

            <Box component="span" sx={{ width: '1%', padding: '10px'}}>
                <hr className={classes.verticalLine}></hr>
            </Box>
            
            <Box component="span" sx={{ width: '30%', padding: '10px'}}>
            
            <h3><i>Skills</i></h3>
             <p><SkillBars skills={skillHist} height={50}/></p>
            
            <h3> <i> Hobbies</i></h3>
            <p>{hobby !== undefined && (hobby.map((item)=>{
            return(
                <>
                
                    <span ><i className={classes.p}>{item}</i></span>
                    
                </>
            )
        }))}</p>

            <h3>
                <i>Languages</i>
            </h3>
            <p><SkillBars skills={langHist} height={50}/></p>
            </Box>

        </Box>
        
        </div>
        </div>
        
            
        </>
    );
};

export default Details;