import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BoxContact from "../../Components/BoxContato";
import { FaWhatsapp } from "react-icons/fa";


import { 
  Container,
  BoxContainer,
  Box,
  H1,
  Button 
} from "./styles";


function Home() {
  return (
    <>  
      <Navbar />

      <Container>
        <BoxContainer>
          <Box>
            <H1>Tenha o melhor tratamento para o seu parceiro</H1>
            <Button>
              Fale Conosco
              <FaWhatsapp />
            </Button>
          </Box>
        </BoxContainer>
      </Container>
      
      <BoxContact>
          Aqui na <span>Pet Boutique</span> somos apaixonados <br /> 
            pelo que fazemos
      </BoxContact>

      <Footer />
    </>
  );
}

export default Home;
