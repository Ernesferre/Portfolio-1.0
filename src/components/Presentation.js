import React from 'react'
import Header from './Header'
import Sections from './Sections'
import Ernesto from '../assets/Ernesto.jpg'
import { FaSun , FaMoon } from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";
import { Image, Box, VStack, Heading, Text, Grid, IconButton } from "@chakra-ui/react"
import Jump from 'react-reveal/Jump'
import Swing from 'react-reveal/Swing'

const Presentation = () => {

    const handleStart = () => {
            console.log("hola")
    }
    
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    
    return (

        
    
        <>
        
        <Box
            bg={isDark ? "black" : "white"}
            // h="300px"
        >
        
            <Header toggleColorMode={toggleColorMode} isDark={isDark} />
        
            <Grid  
                placeItems="center"
                p={3}    
            > 
            <Jump>
                <Heading
                    border="2px"
                    borderRadius="full"
                    borderColor={isDark ? "black" : 'black'}
                    bg="yellow.600"
                    color='black'
                    p={6}
                    mb={2}
                    letterSpacing={7}
                    shadow="dark-lg"
                    fontFamily="cursive"
                    size="3xl"
                    onClick={handleStart}
                    
                >
                    EF
                </Heading>

                {/* <Image
                
                    borderRadius="full"
                    width="200px"
                    border="10px"
                    bordercolor="brown"
                    isRound="true"
                    src={Ernesto}
                    alt="Ernesto"
                    boxShadow="dark-lg"
                    mb={2}
                /> */}
            </Jump>
            

                <VStack>

                <Swing>  
                <Heading 
                    color={isDark ? "yellow.600" : 'black'}
                    
                    letterSpacing="widest"
                    fontFamily="unset"
                > 
                    Ernesto Ferreyra
                </Heading>
                </Swing>

                <Text 
                    color={isDark ? "gray.400" : 'yellow.700'}
                    fontSize="xl"
                > 
                    Front-End Developer </Text>
                </VStack>
          
          
            </Grid>

            

        </Box>
        

        <Sections isDark={isDark} />
        
        </>
    )
}

export default Presentation
