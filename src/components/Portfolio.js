import { Box, Heading, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'
import { Proyectos } from './Proyectos'

const Portfolio = (props) => {
    
    
    console.log(Proyectos[0].descripcion)
    
    const {isDark} = props

    console.log(isDark)
    
    
    return (
        <Box
            textAlign="center"
            mt={8}
            mb={8}
            bg="white"
            m={2}
            
        >
            <Heading
                color="black"
                mb={6}
            >
                Portfolio
            </Heading>

            
                <Flex 
                    flexWrap="wrap" 
                    justifyContent="center"
                >   
                        {Proyectos.map((item) =>  
                        <Flex>
                            <Card 
                                isDark={isDark}
                                key={item.id} {...item}
                        />
                        </Flex>
                        )}
                </Flex>
            
        </Box>
    )
}

export default Portfolio
