import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BoxContact from "../../Components/BoxContato";

import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { 
  ContainerContact,
  Networks
} from "./styles";


function Contact() {
  return (
      <ContainerContact>
        <Navbar />
        <BoxContact>
          Se ficou interessado em nossos serviços, <br />
          venha nos conhecer

          <Networks>
                <a href="">
                    <FaFacebookSquare className="icons" />
                </a>
                <a href="">
                    <FaInstagram className="icons" />
                </a>
                <a href="">
                    <FaWhatsapp className="icons" />
                </a>
          </Networks>

        </BoxContact>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3303855858494!2d-43.37024818930397!3d-22.974875340220862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9546e1b27cf%3A0xa5bce0c3664d085c!2sRua%20Victor%20Civita%2C%2066%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-044!5e0!3m2!1spt-BR!2sbr!4v1705274372726!5m2!1spt-BR!2sbr" 
        width="520"
        height="320"
        allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

        <Footer />
      </ContainerContact>
  );
}

export default Contact;
