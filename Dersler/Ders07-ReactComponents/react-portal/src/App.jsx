import {useRef, useState} from "react";
import Portal from "./components/portal"
import './App.css';

function App() {
  const divRef = useRef();
  const [portalTarget , setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("Dökümanın Body'si");
    const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal("Deneme Div");
    console.log("HandlePortal Çalıştı.", divRef.current.textContent);  
  };
  return (
    <>
    <div ref={divRef}>Deneme</div>
    <button 
      onClick={() => console.log(divRef.current.textContent)}>
        Tıkla
    </button>
    <Portal target={portalTarget} text={textPortal}/>
    <button onClick={handlePortal}>Portalı Değiştir</button>
    </>
  );
}

export default App;
