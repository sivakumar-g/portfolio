import React,{useEffect,useState} from 'react'
import reactDom from 'react-dom';
// import './skills.scss'
import './skills.css'

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
  


export default class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };       

      
    }
    
    componentDidMount() {
      setTimeout(() => {
        this.setState({ collapsed: false })
      }, 5000);
    }
  
    render() {
      const { collapsed } = this.state;
      const { hue, saturation, skills } = this.props;
  
      return(  
        <div id="app2" className={`container ${collapsed ? 'collapsed' : ''}`}>
          {/* <h1>Skill Bars - React Component</h1>
          <p>Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades</p>
          <hr/> */}
          <ul className="skills">
            {skills.map((skill, index) => 
              <li
                key={skill.type}
                // style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)`,margin:'10px' }}
                style={{ width: `${skill.level}%`, backgroundColor: `green`, color:'white', margin:'10px' }}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
      )
    }
  }
  
//   React.render(<>
//     <SkillBars hue="300" saturation="40" skills={SKILLS} />,
//     // document.getElementById('root')

// <div class="container">
// [[[https://codepen.io/ajaykarwal/pen/XMpGwY]]]
// </div>
// </>);
  
//   export default SkillBars;