import React from 'react';
import Circle from './Circle';
import Point from './Point';

class App extends React.Component {

    render() {
        const fiveCircle = [
            {radius:20, colour:"green", pointX:50, pointY:50},
            {radius:40, colour:"blue", pointX:115, pointY:60},
            {radius:32, colour:"yellow", pointX:200, pointY:40},
            {radius:42, colour:"red", pointX:290, pointY:50},
            {radius:10, colour:"purple", pointX:350, pointY:45},
        ]

        const fivePoint = [
            {name:1, pointX:60, pointY:35},
            {name:2, pointX:100, pointY:20},
            {name:3, pointX:150, pointY:45},
            {name:4, pointX:270, pointY:60},
            {name:5, pointX:270, pointY:47},
        ]

        for (let i = 0; i < fivePoint.length; i++) {

            for (let j = 0; j < fiveCircle.length; j++) {

                if (((fiveCircle[j].radius ** 2) >
                    ((fivePoint[i].pointX - fiveCircle[j].pointX) ** 2 +
                        (fivePoint[i].pointY - fiveCircle[j].pointY) ** 2))) {

                    console.log("точка", fivePoint[i].name, "в круге", fiveCircle[j].colour)
                    break;
                }
            }
        }

        return (
            <div>
                <svg
                    width="400"
                    height="100">

                    {fiveCircle.map((item) => (
                            <Circle {...item}/>
                        )
                    )}

                    {fivePoint.map((item) => (
                            <Point {...item}/>
                        )
                    )}
                </svg>
            </div>
        )
    }
}

export default App;