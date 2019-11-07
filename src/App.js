import React from 'react';
import Circle from './Circle';
import Point from './Point';

class App extends React.Component {

    render() {
        const fiveCircle = [
            {radius:124, colour:"green", pointX:260, pointY:260},
            {radius:103, colour:"blue", pointX:260, pointY:260},
            {radius:86, colour:"yellow", pointX:260, pointY:260},
            {radius:72, colour:"red",pointX:260, pointY:260},
            {radius:60, colour:"purple", pointX:260, pointY:260},
        ]

        const ArrPoint = []

        for (let i = 0; i < fiveCircle.length; i++) {

            let minY
            let colourPoint = ["red", "dark", "purple", "green", "silver"]

            for (let j = 0; j < 9; j++) {

                let min = Math.ceil(fiveCircle[i].pointX - fiveCircle[i].radius)
                let max = Math.floor(fiveCircle[i].pointX + fiveCircle[i].radius)

                let randomX = Math.floor(Math.random() * (max - min)) + min

                let maxY = Math.sqrt((fiveCircle[i].radius ** 2) -
                    ((randomX - fiveCircle[i].pointY) ** 2)) + fiveCircle[i].pointX

                if (i < fiveCircle.length - 1){

                    if (randomX < fiveCircle[i].pointX - fiveCircle[i + 1].radius ||
                            randomX > fiveCircle[i].pointX + fiveCircle[i + 1].radius) {

                        minY = fiveCircle[i].pointY - (maxY - fiveCircle[i].pointY)
                    } else {

                        minY =  Math.sqrt((fiveCircle[i + 1].radius ** 2) - (
                            (randomX - fiveCircle[i + 1].pointY) ** 2)) + fiveCircle[i + 1].pointX
                    }

                } else if (i == fiveCircle.length - 1) {

                    minY = fiveCircle[i].pointY - (maxY - fiveCircle[i].pointY)
                }

                if (Math.random() < 0.5) {

                    maxY = fiveCircle[i].pointY - maxY + fiveCircle[i].pointY
                    minY = fiveCircle[i].pointY - minY + fiveCircle[i].pointY
                }

                let randomY = Math.floor(Math.random() * (maxY - minY)) + minY

                ArrPoint.push({pointX:randomX, pointY:randomY, colour:colourPoint[i]})
            }
        }

        return (
            <div>
                <svg
                    width="400"
                    height="400">

                    {fiveCircle.map((item) => (
                            <Circle {...item}/>
                        )
                    )}

                    {ArrPoint.map((item) => (
                            <Point {...item}/>
                        )
                    )}
                </svg>
            </div>
        )
    }
}

export default App;