import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BoxContact from "../../Components/BoxContato";

import { 
  Container,
  H2,
  Brands,
  Image 
} from "./styles";


import alfapet from "../../assets/marcas/AlfaPet.png";
import bichinhochic from "../../assets/marcas/BichinhoChic.png";
import boehringer from "../../assets/marcas/Boehringer.png";
import inata from "../../assets/marcas/Inataa.png";
import biofresh from "../../assets/marcas/LogoBiofresh.png";
import bravecto from "../../assets/marcas/LogoBravecto.png";
import nexgard from "../../assets/marcas/NexgardSpectra.png";
import pickorruchos from "../../assets/marcas/Pickorruchos.png";
import papapets from "../../assets/marcas/PapaPets.png";
import royalcanini from "../../assets/marcas/royalcanini.png";
import saopet from "../../assets/marcas/saopet.png";
import exopets from "../../assets/marcas/exopets.png";


function Products() {
  return (
    <>  
    <Navbar />

    <Container>

      <H2>
        Principais marcas dos nossos produtos!
      </H2>
      
      <Brands>
          <Image src={alfapet} />
          <Image src={bichinhochic} />
          <Image src={boehringer} />
          <Image src={inata} />

          <Image src={biofresh} />
          <Image src={bravecto} />
          <Image src={nexgard} />
          <Image src={pickorruchos} />

          <Image src={papapets} />
          <Image src={royalcanini} />
          <Image src={saopet} />
          <Image src={exopets} />
      </Brands>

    </Container>
    
    
    <BoxContact>
        Nós Trabalhamos com as melhores marcas do Mercado!
    </BoxContact>

    <Footer />
  </>
  );
}

export default Products;
