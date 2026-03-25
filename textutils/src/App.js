import './App.css';
import { useState } from 'react';
import  Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import  Buttons from './Components/Buttons';

function App() {
  const [text, setText] = useState('');
  const handleChanges = (e) => {
    setText(e.target.value);
  };
  const handleToUpper = () => {
    setText(text.toUpperCase());
  };
  const handleToLower = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText('');
  };
  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
  };
  const handleLength = () => {
    alert(`The length of the text is: ${text.length}`);
  };
  return (
    <>
    <Navbar title="TextUtils" Home="Advika" Linkedin="LinkedIn" />
    <Textarea text={text} handleChange={handleChanges}/>
    <Buttons onToUpper={handleToUpper} onToLower={handleToLower} onClear={handleClear} onReverse={handleReverse} onLength={handleLength}/>

    </>
  );
}

export default App;

