import React from 'react'
import {ProgressBarLine} from 'react-progressbar-line'

function LineProgress(props) {
    return (
        <div>

<ProgressBarLine
        value={props.progress}
        min={0}
        max={100}
        strokeWidth={2}
        trailWidth={2}
        transition={'1.5s ease'}
        initialAnimation={true}
        // text = {props.text}
        styles={{
          path: {
            stroke: 'yellowgreen'
          },
          trail: {
            stroke: 'white'
          },
          text: {
            fill: '#404040',
            textAlign: 'center',
            fontSize: '22px'
          }
        }}
      />

        </div>
    )
}

export default LineProgress
