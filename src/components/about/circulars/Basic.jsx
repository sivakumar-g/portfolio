import React, { FunctionComponent } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'


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
    position:'relative'
}
const Basic = ({ progress }) => (
    <div className="item" style={{
        flexbasis: '236px',
        flexshrink: 0,
        flexgrow: 0,
        padding: '5px 15px',
        backgroundcolor: 'white',
        borderradius: '5px',
        margin: '30px',}}>
        <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={18}
            strokeColor="#5d9cec"
            strokeColor="green"
            strokeLinecap="square"
            trackStrokeWidth={18}
            transition={'1.5s ease'}
    initialAnimation={true}

        >
            <div className="indicator" style={{
    display: 'flex',
    alignitems: "center",
    justifycontent: "center",
    textalign: "center",
    position: 'absolute',
    top: '45%',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    fontsize: '2.2em',
    fontweight: 100,
    // color: '#555',
    color: 'green',
    left:'23%',
    // margin:'auto',
    userselect: 'none',}}>
                <div style={{fontSize:'15px'}}>200+ DSA  Solved</div>
            </div>
        </ProgressBar>
    </div>
)

export default Basic