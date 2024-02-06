import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer"
import BoxContact from "../../Components/BoxContato";
import data from '../../data';

import { 
  Container,
  H2,
  Card
} from "./styles";


function Services() {
  return (
    <>  
      <Navbar />

      <H2>
          Alguns dos nossos serviços
      </H2>
      
      <Container>

        { data.map(products => (
          <Card key={products.id}>
            <h3>{products.title}</h3>
            <img src={products.img} />
            <p>{products.text}</p>
          </Card>
        ))},

      </Container>

      <BoxContact>
          Na <span>Pet Boutique</span> você encontra Estilo e <br /> 
            Elegância para Cães e Gatos
         
      </BoxContact>
      

      <Footer />
    </>
  );
}

export default Services;