import { useTheme } from './context/ThemeContext';
import Button from './components/Button';
import './App.css';

function App() {
  const {theme} = useTheme();
  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Context Uygulaması</h1>
        <Button />
      </div>
    </>
  )
}

export default App
