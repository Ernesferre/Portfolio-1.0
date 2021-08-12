import { Box, Link, Image, Container } from '@chakra-ui/react'
import cv from '../assets/cv.PNG'
import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Resume = () => {
    return (
        <Bounce top>
        <Container
            placeItems="center"
            mt={8}
            mb={4}
            id="resume"
            
        >
            <Link
                href="https://drive.google.com/file/d/1RpORj2yogxKt6sgouwdo1ORyxk4fWOCo/view?usp=sharing"
                isExternal
            >
                <Image
                    src={cv}
                    borderRadius={7}
                >

                </Image>
            
            </Link>
        </Container>
        </Bounce>
    )
}

export default Resume
