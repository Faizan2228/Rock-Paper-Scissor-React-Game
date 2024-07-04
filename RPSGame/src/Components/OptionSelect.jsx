import React, { useState } from 'react'
import { UserInterface } from './UserInterface'
import { WinnerLoser } from './WinnerLoser'

export const OptionSelect = () => {

    const [result, setResult] = useState(null)
    const [houseSelect, setHouseSelect] = useState(null)
    const [userSelect, setUserSelect] = useState('')
    const [isScore, setIsScore] = useState(0)

    const randomValue = () => {
        const arrValues = ['Rock', 'Paper', 'Scissor']

        const random = Math.floor(Math.random() * arrValues.length)
        return arrValues[random];
    }

    const handleButton = (value) => {

        let compResult = randomValue()
        setHouseSelect(compResult)
        setUserSelect(value)

        if (compResult === value) {
            setResult('Draw')
        } else if (compResult === 'Rock' && value === 'Paper') {
            setResult("User Won")
            setIsScore(isScore + 1)
        }
        else if (compResult === 'Scissor' && value === 'Rock') {
            setResult('User Won')
            setIsScore(isScore + 1)
        }
        else if (compResult === 'Paper' && value === 'Scissor') {
            setResult('User Won')
            setIsScore(isScore + 1)
        }
        else if (compResult === 'Paper' && value === "Rock") {
            setResult('House Won')
            setIsScore(isScore - 1)
        }
        else if (compResult === 'Rock' && value === 'Scissor') {
            setResult('House Won')
            setIsScore(isScore - 1)
        }
        else if (compResult === 'Scissor' && value === 'Paper') {
            setResult('House Won')
            setIsScore(isScore - 1)
        }
    }

    return (
        <div className='box'>
            <div className='options'>
                <div className='options-container'>
                    <UserInterface handleButton={handleButton} />
                </div>

                <WinnerLoser result={result} houseSelect={houseSelect} userSelect={userSelect} isScore={isScore} />

            </div>
        </div>
    )
}
