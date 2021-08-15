import React from 'react'
import { Box, Text, Image, Button, Flex, VStack, Container, Link, Heading } from "@chakra-ui/react";
import HeadShake from 'react-reveal/HeadShake';

const Card = (props) => {

    console.log(props.isDark)

    return (

        <Container
            maxW="15rem"
            borderRadius={12}
            // borderColor='black'
            boxShadow="dark-xl"
            color={props.isDark ? "black" : "black"}
            fontFamily="Roboto"
            // position="relative"
            margin="2rem"
            bg={props.isDark ? "white" : "white"}
            p={1}
            // bg="white"
            border= "2px"
            _hover={{
              // maxW: "15.2rem"
            }}
            
        >
            <Image
                borderTopRadius={10}
                width="100%"
                
                
                maxH="40em"
                // objectFit="cover"
                src={props.picture}
                fallbackSrc="https://via.placeholder.com/382x300"
                mb={4}
                
                
            />
       
  
            <Heading
              size="md"
              textAlign="center"
              // color={ props.isDark ? "black" : "white"}
              // color="dark"
              fontWeight="medium"
              marginBottom="0.5em"
              
            >
              {props.titulo}
            </Heading>

        <Flex 
            flexDir="column"
            fontSize={10}
        >

          
            <Box
              textAlign="left"
              marginLeft="1em"
              marginRight="1em"
              maxHeight="3em"
              overflow="hidden"
              color="dark"
              
            >
              <p fontWeight="100"> Descripcion: </p> {props.descripcion}
            </Box>

            <Box
              mt={2}
              mb={4}
              textAlign="left"
              marginLeft="1em"
              marginRight="1em"
              maxHeight="3em"
              overflow="hidden"
              color="dark"
              // color={ props.isDark ? "black" : "white"}
            >
              <p fontWeight="semibold"> Tecnologias Usadas: </p> {props.descripcion}
            </Box>
          
  
          <Flex 
            justifyContent="center" 
            mb="1em"
          >
            <Link 
                href={props.url}
                isExternal
            >
              <Button
                textDecoration="none"
                margin="0.5em"
                fontFamily="Amatic SC"
                letterSpacing={2}
                color={ props.isDark ? "yellow.300" : "black"}
                bg={ props.isDark ? "black" : "yellow.600"}
                _hover={{
                  textDecoration: "none"
                }}
                
                

                // textTransform="uppercase"
                size="sm"
              >
                Visit Page
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    
    )
}

export default Card
