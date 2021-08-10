import React from 'react'
import { Box, Button, SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"


const Sections = () => {
    return (
        <Box
            alignSelf="center"
            bg="white"
            textAlign="center"
            
            m={2}
        >
            <SimpleGrid
                bg="white"
                columns={{ sm: 2, md: 4 }}
                spacing="8"
                p="10"
                textAlign="center"
                rounded="lg"
                color="gray.400"
                mt={8}
                >
                <Button
                    boxShadow="md" 
                    p="6" rounded="md" 
                    bg="yellow.600" color="black" 
                    letterSpacing="10px" 
                    
                    
                    textDecorationLine="none" 
                    _hover={{textDecoration: "none"}}
                
                >
                    <Link 
                        to="/profile"
                    >
                    Profile
                    </Link>
                </Button>

                <Button
                    boxShadow="md" 
                    p="6" rounded="md" 
                    bg="yellow.600" color="black" 
                    letterSpacing="10px" 
                    
                    
                    textDecorationLine="none" 
                    _hover={{textDecoration: "none"}}
                
                >
                    <Link 
                        to="/skills"
                    >
                    Skills
                    </Link>
                </Button>

                <Button
                    boxShadow="md" 
                    p="6" rounded="md" 
                    bg="yellow.600" color="black" 
                    letterSpacing="10px" 
                    
                    
                    textDecorationLine="none" 
                    _hover={{textDecoration: "none"}}
                
                >
                    <Link 
                        to="/portfolio"
                    >
                    Portfolio
                    </Link>
                </Button>

                <Button
                    boxShadow="md" 
                    p="6" rounded="md" 
                    bg="yellow.600" color="black" 
                    letterSpacing="10px" 
                    
                    
                    textDecorationLine="none" 
                    _hover={{textDecoration: "none"}}
                
                >
                    <Link 
                        to="/resume"
                    >
                    Resume
                    </Link>
                </Button>

                
            
            

            </SimpleGrid>
            
        </Box>
    )
}

export default Sections
