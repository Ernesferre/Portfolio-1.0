import { HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode";
import { Image, Box, VStack, Heading, Text, Grid, IconButton } from "@chakra-ui/react"
import { FaSun , FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({toggleColorMode, isDark}) => {

    
    console.log(isDark)


    return (
        <HStack mt={0} mb="3" mr="6" p={4}>
            
            <IconButton
                ml="4"
                icon={isDark ? <FaSun /> : <FaMoon /> }
                isRound="true"
                onClick={ toggleColorMode }
                color={isDark ? 'yellow' : "black"}
                alignSelf="flex-start"
                
                >       
            </IconButton>
            
            <Spacer> </Spacer>
            <IconButton
                isRound="true"
                icon={<FaGithub />}
                ml="6"
                href="https://github.com/Ernesferre"
                isExternal
            >
            </IconButton>

            <IconButton
                isRound="true"
                icon={<FaLinkedin />}
                ml="2"
            >
            </IconButton>



       

            
        </HStack>
    )
}

export default Header
