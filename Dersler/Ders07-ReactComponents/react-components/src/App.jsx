import ListItem from './components/ListItem';
import {useEffect, useState} from "react";
import styled from 'styled-components';
import './App.css';
import styles from './CustomStyle.module.css';

function App() {
  const [value, setValue] = useState(0);
  const students = ["Ali", "John", "Hande"];
  const Button1 = styled.button`
    background-color: red;
    border-radius: 20px;
  `;

  const Button2 = styled(Button1)`
    background-color: blue;
    font-size: ${({size}) => size}px;
  ` ;

  Button2.propTypes = {
    size : PropTypes.number.isRequired,
  };

  useEffect(() => {
    console.log("Component Yüklendi");
  }, []);

  useEffect(() => {
    console.log("Butona Tıklandı");
  }, [value]);

  return (
    <>
  <h1 style={{fontSize: "35px"}}>Merhaba Dünya !</h1>
  <ul>
    {students.map((student,index) => {
      return <ListItem key = {index} student = {student} value = {value} />;
    })}
  </ul>
  <button
    className={styles.customButton}
    onClick={() => setValue(value+1)}> 
      Arttır
  </button>
  <Button1>Styled Button</Button1>
  <Button2>Styled Button 2</Button2>
    </>
  );
}
export default App
