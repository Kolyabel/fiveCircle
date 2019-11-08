import React from 'react';

class Circle extends React.Component {

    render() {

        const { radius, pointX, pointY } = this.props
        return (
            <circle
               cx={pointX}
               cy={pointY}
               r={radius}
               stroke="silver"
               stroke-width="2"
               fill="white"
            />
        )
    }
}

export default Circle;