import React, { useState } from 'react';

import './Content.css'



const Content = () => {

    const [text, setText] = useState('');
    
    const [updeted, setUpdeted] = useState(text); 

  const HandleChange = (event) => {
    setText(event.target.value);

  }

const handleButtonClick = () =>{
    setUpdeted(text)
}

    return (
      <div>
        <div className="Content">
          <label>Enter value : </label>
          <input type="text" name="textValue" onChange={HandleChange} />

          <h2>Updeted: {updeted}</h2>

          <button onClick={handleButtonClick}>Click</button>
        </div>
      </div>
    );
};

export default Content;