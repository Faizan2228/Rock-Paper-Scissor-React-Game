import React from 'react'

export const RPSLogic = () => {

  const [result, setResult] = useState(null)

  const randomValue = () => {
    const arrValues = ['Rock', 'Paper','Scissor']

    const random = Math.floor(Math.random() * arrValues.length)
    return arrValues[random];
  }

  const handleButton = (value) => {
    let compResult = randomValue()
    console.log(compResult)
    if(compResult === value){
      setResult('Draw')
    }else if(compResult === 'Rock' && value === 'Paper'){
      setResult("User Won")
    }
    else if(compResult === 'Scissor' && value === 'Rock'){
      setResult('User Won')
    }
    else if(compResult === 'Paper' && value === 'Scissor'){
      setResult('User Won')
    }
    else if(compResult === 'Paper' && value === "Rock"){
      setResult('Computer Won')
    }
    else if(compResult === 'Rock' && value === 'Scissor'){
      setResult('Computer Won')
    }
    else if(compResult === 'Scissor' && value === 'Paper'){
      setResult('Computer Won')
    }
  }

  return (
    <div className='options'>
          <div className='options-container'>
        <div id='rockBtn' onClick={()=> handleButton('Rock')}>
          <img src="../src/assets/rock.png" alt="" />
        </div>
        <div id='paperBtn' onClick={()=> handleButton('Paper')}>
        <img src="../src/assets/paper.png" alt="" />
        </div>
        <div id='scissorBtn' onClick={()=> handleButton('Scissor')}>
        <img src="../src/assets/scissor.png" alt="" />
        </div>
        </div>
        </div>
  )
}
