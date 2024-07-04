import React from 'react'

export const UserInterface = ({ handleButton }) => {
  return (
    <div><div id='rockBtn' onClick={() => handleButton('Rock')}>
      <img src="https://www.doodleblue.com/images/techprowess/rock.png" alt="" />
    </div>
      <div id='paperBtn' onClick={() => handleButton('Paper')}>
        <img src="https://www.doodleblue.com/images/techprowess/paper.png" alt="" />
      </div>
      <div id='scissorBtn' onClick={() => handleButton('Scissor')}>
        <img src="https://www.doodleblue.com/images/techprowess/scissor.png" alt="" />
      </div></div>
  )
}
