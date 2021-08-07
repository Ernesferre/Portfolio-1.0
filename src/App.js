import Ernesto from './assets/Ernesto.jpg';
import { useColorMode } from "@chakra-ui/color-mode";
import { Image, Box, VStack, Heading, Text, Grid, IconButton } from "@chakra-ui/react"
import './App.css';
import { FaSun , FaMoon } from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';


function App() {
  
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <Box
      bg={isDark ? "black" : "white"}
      h="1000px"
    >
    <Header toggleColorMode={toggleColorMode} isDark={isDark} />
    
    <Grid 
      
      placeItems="center"
      p={3}
      
      
    > 
      <Image
        borderRadius="full"
        width="200px"
        border="10px"
        
        bordercolor="brown"
        isRound="true"
        src={Ernesto}
        alt="Ernesto"
        boxShadow="dark-lg"
        mb={2}
      />
      <VStack>
        <Heading 
          color={isDark ? "yellow.600" : 'black'}
          
          letterSpacing="widest"
          fontFamily="unset"
        > 
        Ernesto Ferreyra
        </Heading>

        <Text 
          color="yellow.600"
          fontSize="xl"
        > 
          Front-End Developer </Text>
      </VStack>
      
      
    </Grid>
    <Profile />
    </Box>
    
  );
}

export default App;
