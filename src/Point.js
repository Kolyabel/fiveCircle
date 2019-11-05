import React from 'react';

class Point extends React.Component {

    render() {

        const { pointX, pointY } = this.props
        return (
            <circle
                cx={pointX}
                cy= {pointY}
                r="2"
                fill="dark"
            />
        )
    }
}

export default Point;