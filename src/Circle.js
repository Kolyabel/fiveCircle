import React from 'react';

class Circle extends React.Component {

    render() {

        const { radius, colour, pointX, pointY } = this.props
        return (
            <circle
               cx={pointX}
               cy= {pointY}
               r={radius}
               fill={colour}
            />
        )
    }
}

export default Circle;