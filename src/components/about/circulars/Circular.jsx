import React, { FunctionComponent } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'
// import { ExampleProps } from './Examples'

let  indicator={
    
        display: 'flex',
        alignitems: "center",
        justifycontent: "center",
        textalign: "center",
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        margin: '0 auto',
        fontsize: '2.2em',
        fontweight: 100,
        color: '#555',
        userselect: 'none',
}

let item ={

    flexbasis: '236px',
    flexshrink: 0,
    flexgrow: 0,
    padding: '5px 15px',
    backgroundcolor: 'white',
    borderradius: '5px',
    margin: '30px',
}
const Cut = ({ progress }) => (
    <div className="item">
        
        
        <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={17}
            strokeColor="yellowgreen"
            strokeLinecap="butt"
            trackStrokeWidth={14}
            trackStrokeLinecap="butt"
            cut={120}
            rotate={-210}
            transition={'1.5s ease'}
            initialAnimation={true}
        
        >
            <div className={indicator} >
                {/* <div>{progress}%</div> */}
                  DSA 200+ problems Solved 
<hr />
            </div>
        </ProgressBar>
    </div>
)

export default Cut