
import {React, useState} from 'react';

import './App.css';

function App() {
    
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
  
    const changeValue1 = (e) => {
      setInputValue1(() => {
        return e.target.value
      });
    };
  
    const changeValue2 = (e) => {
      setInputValue2(() => {
        return e.target.value
      });
    };
  
    const changeValue3 = (e) => {
      setInputValue3(() => {
        return e.target.value
      });
    };
  
    const changeValue4 = (e) => {
      setInputValue4(() => {
        return e.target.value
      });
    };
  
    const clickBtn = async() => {
     
      const registerData = {
        method: 'POST',
        body: JSON.stringify({
          inputValue1,
          inputValue2,
          inputValue3,
          inputValue4,
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      }; 

      await fetch('http://localhost:3001/', registerData)
      .then(res => res.json())
      .then(res => alert(res.message))
    };  

  return (
    <div className="App">
      <input
        value={inputValue1}
        onChange={changeValue1}
        placeholder="아이디"
      ></input>
      <input
        value={inputValue2}
        onChange={changeValue2}
        placeholder="비밀번호"
      ></input>
      <input
        value={inputValue3}
        onChange={changeValue3}
        placeholder="이메일"
      ></input>
      <input
        value={inputValue4}
        onChange={changeValue4}
        placeholder="닉네임"
      ></input>
      <button onClick={clickBtn} className="signUp">
        회원가입
      </button>
    </div>
  );
}

export default App;
