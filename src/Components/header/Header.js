import React from 'react'
import   "./Header.css"
import { Typography,Box, TextField, MenuItem } from '@mui/material'

import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Category from "../../data/Category"


const Header = ({setCategory, category, setWord, word}) => {

    const darkTheme = createTheme({
    
        palette: {
        primary: {
          main: "#fff"
        },
          mode: 'dark',
        },
      })
      

const handleChange= (language) => {
    setCategory(language)
    setWord("")

}



  return (
 <Box>
    <Typography     justifyContent="center"  textAlign="center" alignItems="center"  mt="10px" color="black" fontWeight="bold" > <BsArrowLeftShort  color='white' />  DICTIONARY <BsArrowRightShort  color='white'  />   </Typography>
     <Typography  fontSize="40px"  justifyContent="center"  textAlign="center" alignItems="center" mt="20px" mb="3rem" >  {word ? word : "ịmụta ọhụrụ ihe"} </Typography>
      <div className='input'>
          <ThemeProvider  theme={darkTheme}>
          <TextField
           className='search'
            label="Search " 
             value={word}
             onChange={(e)=> setWord(e.target.value)}
            />



          <TextField
          className='select'
          select
          label="Language"
         value={category  }
          onChange= {(e) => handleChange(e.target.value)}  
          variant="filled"
        >
          {Category.map((option) => (
              <MenuItem key={option.label} value={option.label} > {option.value} </MenuItem>
          ))}
        </TextField>


          </ThemeProvider>
        

      </div>
</Box>
  )
}

export default Header