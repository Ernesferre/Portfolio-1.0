import React from 'react'
import { Box, Heading, HStack, Flex, SimpleGrid, IconButton, Image, VStack, Text} from '@chakra-ui/react'
import { FaReact, FaHtml5, FaGithub, FaBootstrap } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io';
import Zoom from 'react-reveal/Zoom';


const Skills = (props) => {
    return (
        <Zoom>
        <Box
            textAlign="center"
            mt={8}
            // mb={8}
            bg={props.isDark ? "black" : "white"}
            color={props.isDark ? "white" : "black"}
            // m={2}
            id="skills"
            
        >
            {/* <Heading
                color="black"
                mb={6}
            >
                Skills
            </Heading> */}

            <SimpleGrid
                columns={{ sm: 2, md: 5 }}
                spacing="8"
                p="10"
                textAlign="center"
                rounded="lg"
            >
                <VStack 
                    p="2"  
                    // color="black"   
                >
                    <Text>
                        React Js
                    </Text>
                    
                    <FaReact
                        size={60}
                    />
                </VStack>

                <VStack 
                    p="2"  
                    // color="black"   
                >
                    <Text>
                        JavaScript
                    </Text>
                    
                    <IoLogoJavascript
                        size={60}
                    />
                </VStack>

                <VStack 
                    p="2"  
                     
                >
                    <Text>
                        Bootstrap 
                    </Text>
                    
                    <FaBootstrap
                        size={60}
                    />
                </VStack>

                <VStack 
                    p="2"  
                      
                >
                    <Text>
                        Git & GitHub
                    </Text>
                    
                    <FaGithub
                        size={60}
                    />
                </VStack>

                <VStack 
                    p="2"  
                       
                >
                    <Text>
                        HTML5
                    </Text>
                    
                    <FaHtml5
                        size={60}
                    />
                </VStack>

                
            </SimpleGrid>


        </Box>
        </Zoom>
    )
}

export default Skills
