import { Box, Heading, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Card2 from '../components/Card2'
import { Proyectos } from './Proyectos'
import Zoom from 'react-reveal/Zoom';

const Portfolio = (props) => {
    
    
    console.log(Proyectos[0].descripcion)
    
    const {isDark} = props

    console.log(isDark)
    
    
    return (
        <Zoom>
        <Box
            textAlign="center"
            mt={8}
            mb={8}
            bg="white"
            m={2}
            
        >
            {/* <Heading
                color="black"
                mb={6}
            >
                Portfolio
            </Heading> */}

            
                <Flex 
                    flexWrap="wrap" 
                    justifyContent="center"
                >   
                        {Proyectos.map((item) =>  
                        <Flex>
                            <Card2 
                                isDark={isDark}
                                key={item.id} {...item}
                        />
                        </Flex>
                        )}
                </Flex>
            
        </Box>
        </Zoom>
    )
}

export default Portfolio
