import { Box, Container, Heading, HStack, Image, Text, Flex, Spacer, SimpleGrid, Center} from '@chakra-ui/react'
import React from 'react'
import Ernesto from '../assets/Ernesto.jpg'
import Fade from 'react-reveal/Fade';

const Profile = (props) => {
    return (
        <Box
            textAlign="center"
            mt={10}
            mb={30}
            bg={props.isDark ? "black" : "white"}
            m={6}
            id="profile"
            
            
        >
            {/* <Heading
                color="black"
                mb={6}
            >
                Profile
            </Heading> */}

            <SimpleGrid 
                columns={[1, 1, 2]}
                spacing={10}
                // spacing="100px"
                // alignItems="center"
            >
                
                <Center>
                <Fade left>
                <Box
                    alignItems="center"
                    w="100%"
                    
                >
                    
                    <Image
                        alignItems="center"
                        
                        borderRadius="full"
                        width="300px"
                        border="10px"
                        alignItems="center"
                        bordercolor="brown"
                        isRound="true"
                        src={Ernesto}
                        alt="Ernesto"
                        boxShadow="dark-lg"
                        mb={2}
                        display="inline"
                        mb={6}
                        
                    />
                    
                </Box>
                </Fade>
                </Center>
                

                {/* <Spacer />  */}
               
                <Fade right>
                <Box
                    // border="2px"
                    // borderRadius={8}
                >
                    <Text
                        textAlign="left"
                        fontSize={23}
                        fontFamily="Roboto"
                        fontWeight="thin"
                        letterSpacing={0}
                        p={5}
                        color={props.isDark ? "white" : "black"}
                        
                        // mr={4}
                    >
                        Industrial Engineer with specialization in Front-End Development with
                        knowledge of Javascript, React Js, Redux, Agile Methodologies, among others.
                        <br></br>
                        My current goal is to put my knowledge and skills into practice
                        acquired during this last year. Seek to contribute to
                        fulfillment of the objectives of the company. Forever
                        pursuing continuous growth through learning
                        of new technologies and teamwork dynamics.
                    </Text>
                </Box>
                </Fade>

            </SimpleGrid>

            <HStack>

            </HStack>
        </Box>
    )
}

export default Profile