import React, { useState } from 'react'

export default function Form({ btnTxt, inputPlaceholder, handleClick, trailer }) {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder={inputPlaceholder}
          onChange={(e) => setInput(e.target.value)}
        />
        {trailer &&
          <input
            type='text'
            placeholder='Link to trailer?'
            onChange={(e) => setInput2(e.target.value)}
          />
        }
        <button
          onClick={(e) => { e.preventDefault(); handleClick(input, input2) }}
        >
          {btnTxt}
        </button>
      </form>
    </div>
  )
}
