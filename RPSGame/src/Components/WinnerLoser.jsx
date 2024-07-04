import React from 'react'

export const WinnerLoser = ({ result, houseSelect,  userSelect, isScore }) => {

  return (
    <div className='result-container'>
      <div className='result-box'>
        RESULT :
        <span className='score-box'>
          <p>Score: {isScore}</p>
        </span>
      </div>

      <div className='user-house'>
        <div className='user-select'>
          <p style={{ textAlign: 'center', marginBottom: '10px' }}>{userSelect}</p>
          <p>You Picked</p>
        </div>

        <div className='house-select'>
          <p style={{ textAlign: 'center', marginBottom: '10px' }}>{houseSelect}</p>
          <p>House Picked</p>
        </div>
      </div>

      <div className='winner-box'>
        {result}
      </div>
    </div>
  )
}
