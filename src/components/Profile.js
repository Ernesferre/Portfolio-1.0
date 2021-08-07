import React from 'react'
import { Box, Button, SimpleGrid, Link } from "@chakra-ui/react"

const Profile = () => {
    return (
        <Box
            alignSelf="center"
            // bg="gray"
            textAlign="center"
            h={250}
            m={2}
        >
            <SimpleGrid
                bg="black"
                columns={{ sm: 2, md: 4 }}
                spacing="8"
                p="10"
                textAlign="center"
                rounded="lg"
                color="gray.400"
                mt={8}
                >
                <Link boxShadow="md" p="6" rounded="md" bg="yellow.600" color="black" letterSpacing="10px" textDecorationLine="none" _hover={{textDecoration: "none"}}>
                    Profile
                </Link>
                <Link boxShadow="md" p="6" rounded="md" bg="yellow.600" color="black" letterSpacing="10px" textDecorationLine="none" _hover={{textDecoration: "none"}}>
                    Works
                </Link>
                <Link boxShadow="md" p="6" rounded="md" bg="yellow.600" color="black" letterSpacing="10px" textDecorationLine="none" _hover={{textDecoration: "none"}}>
                    Skills
                </Link>
                <Link boxShadow="md" p="6" rounded="md" bg="yellow.600" color="black" letterSpacing="10px" textDecorationLine="none" _hover={{textDecoration: "none"}}>
                    Resume
                </Link>
                
            
            

            </SimpleGrid>
            
        </Box>
    )
}

export default Profile
