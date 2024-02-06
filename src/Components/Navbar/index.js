import { useNavigate } from "react-router-dom";

import { 
    Header,
    Box,
    Logo,
    Button 
} from "./styles";

import logo from "../../assets/patas.png";

function Navbar() {

    const navigate = useNavigate();

    function Nav(props) {
        navigate(props);
    }

    return(
        <Header>
            <Box>
                <Logo src={logo} alt="logo" />
                <h2>Pet Boutique</h2>
                <p>Estilo e Elegância para Cães e Gatos</p>
            </Box>

            <Box>
                <Button onClick={() => Nav("/")} >Início</Button>
                <Button onClick={() => Nav("/services")} >Serviços</Button>
                <Button onClick={() => Nav("/products")} >Produtos</Button>
                <Button onClick={() => Nav("/contact")} >Contato</Button>
            </Box>
            
        </Header>
    );
}

export default Navbar;