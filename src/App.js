import "./index.css"
import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"

import Header from './Components/header/Header';
import DefinitionBody from "./Components/Definition/DefinitionBody";
import { Container } from "@mui/system";
import Footer from "./Components/Footer";




function App() {
const [word, setWord] = useState("")
const [meanings, setMeanings] = useState([])
const [category, setCategory] = useState("en")





















  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`) ;
         setMeanings(data.data) 
    } catch (error) {
      
       console.log(error)
    }

  }

 console.log(meanings)

useEffect(() => {
 dictionaryApi()
 // eslint-disable-next-line
}, [word, category] );








  return (
  <div className='App'> 
    <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height:"100vh", maxWidth:"100%"   }}>

     

        <Header 
         category={category}  setCategory={setCategory}
         setWord={setWord}  word={word} />

        {meanings && ( 
         <DefinitionBody
           word={word} 
           meanings={meanings}
           category={category} /> 
           
        )}
 <Footer />

     </Container>

     
  </div>    
  )
}

export default App;
