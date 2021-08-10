import React from 'react'
import Header from './Header'
import Sections from './Sections'
import Ernesto from '../assets/Ernesto.jpg'
import { FaSun , FaMoon } from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";
import { Image, Box, VStack, Heading, Text, Grid, IconButton } from "@chakra-ui/react"

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
                <Image
                    borderRadius="full"
                    width="200px"
                    border="10px"
                    
                    bordercolor="brown"
                    isRound="true"
                    src={Ernesto}
                    alt="Ernesto"
                    boxShadow="dark-lg"
                    mb={2}
                />

                <VStack>
                    
                <Heading 
                    color={isDark ? "yellow.600" : 'black'}
                    
                    letterSpacing="widest"
                    fontFamily="unset"
                > 
                    Ernesto Ferreyra
                </Heading>

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
