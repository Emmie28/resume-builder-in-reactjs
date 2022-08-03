
import * as React from 'react';
import {  makeStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './App.css';
import PersonalData from './PersonalData';
import Details from './Details';
import Profile from './profile';
import Hobbies from './Hobbies';

const useStyles = makeStyles(() => ({
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
  textField2:{
    width: '50%',
  },
  nav: {
    backgroundColor: '#000000',
    color: 'white',
    padding: '20px',
    textAlign: 'left',
},

navItem: {
    padding: '20px',
},

link: {
    color: 'white',
},

navContact: {
    textAlign: 'right',
    position: 'absolute',
    left: '90%',
}

}));

let testing = [];
let internshipss = [];
let jobHist = [];
let langHist =[];
let skillHist = [];

function Home() {
  const classes = useStyles();
  const [serviceList, setServiceList] = React.useState([{services: ''}]);
  const [codeAdd, setCodeAdd] = React.useState([]);
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [profile, setProfile] = React.useState('');
  const [jobHistory, setJobHistory] = React.useState([]);
  const [eduHistory, setEduHistory] = React.useState([]);
  const [inputs, setInputs] = React.useState([]);
  const [edu, setEdu] = React.useState([]);
  const [hobbies, setHobbies] = React.useState('');
  const [courses, setCourses] = React.useState('');
  const [skills, setSkills] = React.useState([]);
  const [progLang, setProgLang] = React.useState('');
  const [extra, setExtra] = React.useState([]);
  const [intern, setIntern] = React.useState([]);
  const [lang, setLang] = React.useState([]);
  
  const handleSave2 = () =>{
    setEdu(inputs);
    alert(JSON.stringify(inputs));
  }


  React.useEffect(()=>{
    let check2 = false;
    let skill = [
      {
        name: '',
        level: '',
        color: '',
      },
    ];

    {skills !== undefined && (Object.entries(skills).map(([key,value]) => {
      skill.name=key;
      skill.color="#2c3e50";
      skill.level= parseInt(value) * 20;
      check2 = true;

  }))};

  if(check2){
    skillHist.push(skill);
  }
    
  },[skills])
  
  React.useEffect(()=>{

    let check = false;
    
    let language = [
      {
        name: '',
        level: '',
        color: "",
      },

    ];

  

    {lang !== undefined && (Object.entries(lang).map(([key,value]) => {
        language.name=key;
        language.color="#2c3e50";
        language.level= parseInt(value) * 20;
        check = true;

    }))};

    
    if (check){
      langHist.push(language);
      
    }
    
      
  },[lang]);


  React.useEffect(()=>{
    console.log(jobHistory);
    let job = [
      {
        company:false,
        desc:null,
        from:null,
        to:null,
      },

    ];

    {jobHistory !== undefined && (Object.entries(jobHistory).map(([key,value]) => {

      if(key.includes('title'))
        job.company=value;
      else if(key.includes('description'))
        job.desc=value;
      else if(key.includes('to'))
        job.to=value;
      else if(key.includes('from'))
        job.from=value;
      else
        job = [];
    }))};

    if (job.company)
      jobHist.push(job);
      

  },[jobHistory]);


  React.useEffect(()=>{
    console.log(internshipss);
    let internship = [
      {
        company:false,
        desc:null,
        from:null,
        to:null,
      },

    ];

    {intern !== undefined && (Object.entries(intern).map(([key,value])=>{
      if(key.includes('title'))
        internship.company=value;
      else if(key.includes('description'))
        internship.desc=value;
      else if(key.includes('to'))
        internship.to=value;
      else if(key.includes('from'))
        internship.from=value;
      else
        internship = [];
    }))};

    if (internship.company)
      internshipss.push(internship)

  },[intern]);

  React.useEffect(()=>{
    let education = [
      {
          course:false,
          school:null,
          from:null,
          to:null,
          descrip:null,
      },
  ];

  {edu !== undefined && (Object.entries(edu).map(([key, value]) =>{
    
      if(key.includes('title'))
      education.course = value;
    else if(key.includes('school'))
      education.school = value;
    else if(key.includes('from'))
      education.from = value;
    else if(key.includes('des'))
      education.descrip = value;
    else if(key.includes('to'))
      education.to = value;
    else
      education = [];
  },
  
  ));}
    if(education.course){
      testing.push(education);
    }
      
    else
      testing = [];
    console.log(testing);
  }, [edu]);

  
  

  return (
    <>
        <Router>
        <nav>
        <p className={classes.nav}>
        <i className={classes.navItem}><Link className={classes.link} to="/Details">Details</Link></i>
        <i className={classes.navItem}><Link className={classes.link} to="/PersonalData">Personal Data</Link></i>
        <i className={classes.navItem}><Link className={classes.link} to="/Profile">Profile</Link></i>
        <i className={classes.navItem} ><Link className={classes.link} to="/Hobbies">Hobbies</Link></i>
        <i className={classes.navContact} ><Link className={classes.link} to="/Home">Home</Link></i>
        </p>
        </nav>
      
        <Routes className="App" >
        <Route exact path="/" element={<Home />}></Route>
        <Route
        exact path='/PersonalData' element={
            <PersonalData classes={classes} name={name} 
        setName={setName} setLastName={setLastName}
        setProfession={setProfession} setPhone={setPhone} setEmail={setEmail}
         phone = {phone} email = {email} setAddress = {setAddress} setCodeAdd={setCodeAdd}/>
        }>
        </Route>

        <Route exact path='/Profile' element={
            <Profile classes={classes} setProfile={setProfile}
            setServiceList={setServiceList}
            serviceList={serviceList}
            setJobHistory={setJobHistory}
          
            setEduHistory={setEduHistory}
            eduHistory={eduHistory}
            inputs = {inputs}
            setInputs = {setInputs}
            handleSave2 = {handleSave2}
            setIntern = {setIntern}
            
          />
        } />

        <Route exact path="/Hobbies" element={
            <Hobbies setHobbies = {setHobbies} 
            setCourses ={setCourses}
            setSkills = {setSkills}
            setProgLang = {setProgLang}
            setExtra = {setExtra}
            setLang = {setLang}
            extra = {extra}>
    
            </Hobbies>
        } />

        <Route exact path="/Details" element={<Details name={name} lastName={lastName}
        profession={profession} phone={phone} email={email}
        profile={profile}
        eduHistory={eduHistory}
        input = {inputs}
        edu = {edu}
        courses = {courses}
        hobbies = {hobbies}
        skillHist = {skillHist}
        extra = {extra}
        progLang = {progLang}
        testing = {testing}
        jobHist={jobHist}
        langHist={langHist}
        codeAdd = {codeAdd}
        internshipss = {internshipss}
        address={address}/>} />

      </Routes>
      </Router>
      
      
    </>
  );
}

export default Home;
