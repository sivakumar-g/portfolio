import React from 'react'
// import Flippy, { FrontSide, BackSide } from './../lib';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './projects.css'
import Fade from "react-reveal/Fade";


// const DefaultCardContents = ({ children },props) => (
  const DefaultCardContents = (props) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'yellow'
        }}
      >
        <span style={{fontSize:'10px',color:'white'}}>Tap here</span>
<div style={{fontSize:'16px',color:'white'}}>{props?.dataobj?.ftitle}</div>
<br/>
{props?.dataobj?.flink != null || props?.dataobj?.flink != undefined ?(
<div style={{fontSize:'16px',color:'white',backgroundColor:'white'}}><a href={props?.dataobj?.flink}> Checkout here</a></div>):''}

         
         
          <div style={{fontSize:'14px',margin:'2%',overflow:'hidden',marginTop:'10%',color:'white'}}>{props?.dataobj?.fbody}</div>


        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          (FRONT SIDE)
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          

          {/* <span style={{fontSize:'16px'}}>Description</span>
          <div style={{fontSize:'12px',margin:'3%',overflow:'hidden',marginTop:'0%'}}>{props?.dataobj?.fbody}</div> */}
          
          <div style={{fontSize:'12px',margin:'1%',overflow:'hidden',marginTop:'0%'}}>{props?.dataobj?.ftech}</div> 
<br/>
{props?.dataobj?.flink != null || props?.dataobj?.flink != undefined ?(
<div style={{fontSize:'16px',color:'white',backgroundColor:'white'}}><a href={props?.dataobj?.flink}> Checkout here</a></div>):''}

           <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {/* {children} */}
          (BACK SIDE)
        </span>
      </BackSide>
    </React.Fragment>);



const FlippyStyle = {
    // width: '300px',
    height: '400px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'
  }

function projects() {


var dataObj=[
  {'ftitle':'Process Management Application: [React + Python Flask (Azure)]',

  'fbody':`A process maintenance application where users can be able to maintain the
projects flow and be able to make the own process flows for the product
manufacturing and project designing as a prototype which has been built
through react and Flask (Scratch to Deployment as a pilot developer`,

'ftech':`Technologies: MongoDB, Azure Services, Docker, React, Python Flask`
},
/*
{
'ftitle':`Ecommerce Boot camp Project [MERN Stack]`,

'fbody':`A highly responsive and interactive Ecommerce web application which made via
React and Express (Node js) Where admins can add be able add products and
users and buy the products through the application`,

'ftech':`Technologies: MongoDB, Azure Services, Docker, React, Express.js (Node)`

},
*/

{'ftitle':'Assesment Portal Application: [Spring Boot]',

  'fbody':`A Quiz assessment portal application where admins can create and publish Quiz contest where people
  can participate and being get assessed which is been built on top of Spring Boot Java and Angular on UI
  
  Where the assessment scored has been calculated and shown to the users at the end of the Assessments`,

'ftech':`Technologies: SQL, Angular, Spring Boot`
},
{
  'ftitle':`Checkout my Github for more`,
  
  'fbody':`Where I have done multiple projects on different stacks which suits the requirement demands`,
  
  'ftech':`Technologies: MongoDB, Azure Services, Docker, React, Express.js (Node),Java,SQL`,

  'flink':'https://github.com/sivakumar-g'
  
  },
  
]



  return (
        <div className='a'>
<Fade left>            
<div className='a1'>

<Flippy
    flipOnClick={true}
    flipOnHover={true}
    flipDirection={'Horizontal'}
    style={FlippyStyle}
  >
    <DefaultCardContents dataobj={dataObj[0]}>
    {dataObj[0]?.ftitle}
    </DefaultCardContents>
  </Flippy>

</div>
</Fade>


<Fade right>            

<div className='a1'>

<Flippy
    flipOnClick={true}
    flipOnHover={true}
    flipDirection={'Horizontal'}
    style={FlippyStyle}
  >
    <DefaultCardContents dataobj={dataObj[1]}>
Project 2
    </DefaultCardContents>
  </Flippy>

</div>
</Fade>

<Fade right>            

<div className='a1'>

<Flippy
    flipOnClick={true}
    flipOnHover={true}
    flipDirection={'Horizontal'}
    style={FlippyStyle}
  >
    <DefaultCardContents dataobj={dataObj[2]}>
github
    </DefaultCardContents>
  </Flippy>

</div>

</Fade>
        </div>
    )
}

export default projects
