import React from 'react';

class Point extends React.Component {

    render() {

        const { pointX, pointY, colour } = this.props
        return (
            <circle
                cx={pointX}
                cy= {pointY}
                r="2"
                fill={colour}
            />
        )
    }
}

export default Point;