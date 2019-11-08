import React from 'react';
import Circle from './Circle';
import Point from './Point';

class App extends React.Component {

    render() {
        const fiveCircle = []
        let radius = 140

        for (let i = 0; i < 5; i++) {

            fiveCircle.push({radius:radius, pointX:260, pointY:260})
            radius = radius - 30
        }

        const ArrPoint = []

        for (let i = 0; i < fiveCircle.length; i++) {

            let minY
            const colourPoint = ["red", "dark", "purple", "green", "blue"]

            for (let j = 0; j < 15; j++) {

                let min = fiveCircle[i].pointX - fiveCircle[i].radius
                let max = fiveCircle[i].pointX + fiveCircle[i].radius

                let randomX = Math.random() * (max - min) + min

                let maxY = Math.sqrt((fiveCircle[i].radius ** 2) -
                    ((randomX - fiveCircle[i].pointY) ** 2)) + fiveCircle[i].pointX

                if (i < fiveCircle.length - 1){

                    if (randomX < fiveCircle[i].pointX - fiveCircle[i + 1].radius ||
                            randomX > fiveCircle[i].pointX + fiveCircle[i + 1].radius) {

                        minY = fiveCircle[i].pointY - (maxY - fiveCircle[i].pointY)
                    } else {

                        minY =  Math.sqrt((fiveCircle[i + 1].radius ** 2) -
                            ((randomX - fiveCircle[i + 1].pointY) ** 2)) + fiveCircle[i + 1].pointX
                    }

                } else if (i == fiveCircle.length - 1) {

                    minY = fiveCircle[i].pointY - (maxY - fiveCircle[i].pointY)
                }

                if (Math.random() < 0.5) {

                    maxY = fiveCircle[i].pointY - maxY + fiveCircle[i].pointY
                    minY = fiveCircle[i].pointY - minY + fiveCircle[i].pointY
                }

                let randomY = Math.random() * (maxY - minY) + minY

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