import MyHeader from "./components/MyHeader.jsx";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
`;


function App() {
  return (
    <>
    <GlobalStyle/>
    <MyHeader />
    </>
  )
}

export default App
