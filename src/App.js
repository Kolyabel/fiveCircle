import React from 'react';
import Circle from './Circle';
import Point from './Point';

class App extends React.Component {

    render() {
        const fiveCircle = [
            {radius:50, colour:"green", pointX:50, pointY:50},
            {radius:28, colour:"blue", pointX:140, pointY:60},
            {radius:32, colour:"yellow", pointX:200, pointY:40},
            {radius:30, colour:"red", pointX:270, pointY:50},
            {radius:50, colour:"purple", pointX:350, pointY:50},
        ]

        const fivePoint = [
            {pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)},
            {pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)},
            {pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)},
            {pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)},
            {pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)},
        ]

        for (let i = 0; i < fivePoint.length; i++) {

            for (let j = 0; j < fiveCircle.length; j++) {

                if (((fiveCircle[j].radius ** 2) >
                    ((fivePoint[i].pointX - fiveCircle[j].pointX) ** 2 +
                        (fivePoint[i].pointY - fiveCircle[j].pointY) ** 2))) {

                    console.log("точка", i + 1, "в круге", fiveCircle[j].colour)
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