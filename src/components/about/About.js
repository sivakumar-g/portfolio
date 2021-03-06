import React,{useEffect,useState} from 'react'
import  workIcon  from "../../img/workIcon.png"
import  schoolIcon  from "../../img/schoolIcon.png"
import { Typewriter } from 'react-simple-typewriter'
import './about.css'
import SkillBars from './skills/Skills'
import ProgressBar from 'react-customizable-progressbar'
import timelineElements from "./timelines"
import Cut from './circulars/Circular'
import Basic from './circulars/Basic.jsx'
import LineProgress from './circulars/LineProgress'
import Fade from "react-reveal/Fade";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import ReactStars from "react-rating-stars-component";
import { FaBeer } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import "react-vertical-timeline-component/style.min.css"
import Tooltip from '@material-ui/core/Tooltip';


function About() {

    
const SKILLS = [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
    {type: "Java", level: 11},
    {type: "React.js", level: 25},
    {type: "Node js", level: 25},
    {type: "SQL", level: 25},
    {type: "MongoDB", level: 25},
    {type: "Angular", level: 16},
  ];
  
  var today = new Date();

    let workIconStyles = { background: "#06D6A0",padding:'1.5%'}
    let schoolIconStyles = { background: "#f9c74f",padding:'1.5%' }
  
const [lastTime, setlastTime] = useState(today.getSeconds())
const [isRefresh, setisRefresh] = useState(false)

  var today = new Date();



// if(lastTime-today.getSeconds() >=3)
// {
//   lastTime = today.getSeconds()
//   setisRefresh(!isRefresh)
// }
    


useEffect(() => {

  if(isRefresh == true)
  setTimeout(() => {
    setisRefresh(!isRefresh)
  }, 6000);

  if(isRefresh ==false)
  setTimeout(() => {
    setisRefresh(!isRefresh)
  }, 1000);


      }, [isRefresh])

    return (
        <div className='a'>

      <div className="a-right">
        

{/* <Cut progress={70}/> */}

      <h1 className="a-title">

      <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Why you need me..!', 'About Me']}
            // loop={0}
            // cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>


          </h1>

      <p className="a-sub">
          A pro active Software developer with efficient data structures and algorithmic Skills to address complex 
          problems with simple business solutions.
        </p>

        <p className="a-desc">
          I am a Full Stack Developer with more than 2.5 years of Experience building Scalable 
web applications to address real world problems by building tangible software
products & a passionate mentor to share Knowledge and enrich people
        </p>


{/* <SkillBars hue="300" saturation="40" skills={SKILLS} /> */}

{isRefresh==true?(<div className='circularbar'><Basic progress={85}/></div>):<div className='circularbar'><Basic progress={0}/></div>}

{/* <div className='circularbar'><Basic progress={85}/></div> */}

<Fade left>

<div className='progresslabel'>React</div>
<div className='linerbar'><LineProgress progress={85} text={'HTML'}/></div>

<div className='progresslabel'>Spring Boot</div>
<div className='linerbar'><LineProgress progress={70} text={'HTML'}/></div>

<div className='progresslabel'>Node js</div>
<div className='linerbar'><LineProgress progress={70} text={'HTML'}/></div>

<div className='progresslabel'>SQL</div>
<div className='linerbar'><LineProgress progress={75} text={'HTML'}/></div>

<div className='progresslabel'>Angular</div>
<div className='linerbar'><LineProgress progress={70} text={'HTML'}/></div>



</Fade>



        </div>
  




        <div className="a-left">
       <VerticalTimeline>
       {timelineElements.map(element => {

let isWorkIcon = element.icon === "work"
let showButton =
  element.buttonText !== undefined &&
  element.buttonText !== null &&
  element.buttonText !== ""


          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}

              icon={isWorkIcon ? <img src={workIcon} style={{height:'25px',width:'25px',marginLeft:'5px'}} className='workImg'/> 
              : <img src={schoolIcon} style={{size:'1px',height:'25px',width:'25px',marginLeft:'5px'}} className='schoolImg'/>}
            >

              {/* icon={isWorkIcon ? <img src={workIcon}  className='workImg'/> 
              : <img src={schoolIcon}  className='schoolImg'/>}
            > */}

              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>

              {typeof(element.awards)!='undefined'?(<>{element.awards.map(awards=>{
             return <div style={{marginBottom:'5px'}}>
               {/* <img  src={awards.iconUrl} />  */}
               {/* <ReactStars
    count={1}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    color="#ffd700"
  />  */}
  <BsFillStarFill /> <a href={awards.url} >{awards.name} <HiExternalLink /></a></div>
              })
              }</>):('')}

              {/* {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )} */}

            </VerticalTimelineElement>
          )
        })}
        
        </VerticalTimeline>
      </div>
     




        </div>
    )
}

export default About
