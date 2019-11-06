import React from 'react';
import Circle from './Circle';
import Point from './Point';

class App extends React.Component {

    render() {
        const fiveCircle = [
            {radius:83, colour:"green", pointX:50, pointY:50},
            {radius:70, colour:"blue", pointX:50, pointY:50},
            {radius:58, colour:"yellow", pointX:50, pointY:50},
            {radius:48, colour:"red", pointX:50, pointY:50},
            {radius:40, colour:"purple", pointX:50, pointY:50},
        ]

        const fivePoint = []

        for (let i = 0; i < 5; i++) {

            fivePoint.push({pointX:Math.floor(Math.random()*400), pointY:Math.floor(Math.random()*100)})

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
                    width="100"
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