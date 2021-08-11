import React from 'react'
import { Box, Text, Image, Button, Flex, VStack, Container, Link, Heading } from "@chakra-ui/react";
import HeadShake from 'react-reveal/HeadShake';

const Card = (props) => {

    console.log(props.isDark)

    return (

        <Container
            maxW="15rem"
            borderRadius={10}
            boxShadow="2xl"
            color={props.isDark ? "black" : "black"}
            // position="relative"
            margin="3rem"
            bg={props.isDark ? "white" : "white"}
            p={0}
            // bg="white"
            border= "2px"
            _hover={{
              // maxW: "15.2rem"
            }}
            
        >
            <Image
                borderTopRadius={8}
                width="100%"
                
                maxH="40em"
                // objectFit="cover"
                src={props.picture}
                fallbackSrc="https://via.placeholder.com/382x300"
                mb={4}
                
                
            />
        {/* {postedOn && (
          <Text
            textAlign="end"
            fontSize="small"
            color="brandBlue.200"
            marginRight="0.3em"
          >
            {formatDate(postedOn)}
          </Text>
        )} */}
  
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
              <p fontWeight="semibold"> Descripcion: </p> {props.descripcion}
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
                color={ props.isDark ? "yellow.300" : "black"}
                bg={ props.isDark ? "black" : "yellow.600"}
                _hover={{
                  textDecoration: "none"
                }}
                
                

                // textTransform="uppercase"
                size="sm"
              >
                Visitar Pagina
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    
    )
}

export default Card
