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
                <Image
                
                    borderRadius="full"
                    width="200px"
                    border="10px"

                    // animation-name= "react-reveal-192063184920716-1"
                    // animation-fill-mode= "both"
                    // animation-duration= '1000ms' 
                    // animation-delay= '0ms'
                    // animation-iteration-count= "1"
                    // box-shadow="0 0 11px 1px hsla(0,5.1%,69%,.75)"
                    // transition="ease-in-out"
                    // transitionDuration="9000"
                    // animation="ease-out"
                    bordercolor="brown"
                    isRound="true"
                    src={Ernesto}
                    alt="Ernesto"
                    boxShadow="dark-lg"
                    mb={2}
                />
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
                    color="yellow.600"
                    fontSize="xl"
                > 
                    Front-End Developer </Text>
                </VStack>
          
          
            </Grid>

            

        </Box>
        

        <Sections />
        
        </>
    )
}

export default Presentation
