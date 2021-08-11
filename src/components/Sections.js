import React from 'react'
import { Box, Button, SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade';


const Sections = (props) => {

    console.log(props.isDark)

    return (
        <Fade>
        <Box
            alignSelf="center"
            bg={props.isDark ? "black" : "white"}
            textAlign="center"
            
            m={2}
        >
            <SimpleGrid
                bg={props.isDark ? "black" : "white"}
                columns={{ sm: 2, md: 4, lg: 4 }}
                spacing="8"
                p="10"
                textAlign="center"
                rounded="lg"
                color="gray.400"
                mt={8}
                >

                <Link 
                    to="/profile"
                >
                    <Button
                        boxShadow="md" 
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                    >  
                    Profile
                    </Button>
                </Link>

                <Link 
                    to="/skills"
                >
                    <Button
                        boxShadow="md" 
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                    >  
                    Skills
                    </Button>
                </Link>

                <Link 
                    to="/portfolio"
                >
                    <Button
                        boxShadow="md" 
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                    >  
                    Portfolio
                    </Button>
                </Link>

                <Link 
                    to="/resume"
                >
                    <Button
                        boxShadow="md" 
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                    >  
                    Resume
                    </Button>
                </Link>


                

                

                
            
            

            </SimpleGrid>
            
        </Box>
        </Fade>
    )
}

export default Sections
