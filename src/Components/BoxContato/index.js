import {
    Contato,
    H2
} from './styles';

function BoxContact({children}) {
    return(
        <Contato>

            <H2>
                {children}
            </H2>

            

        </Contato>
    );
}

export default BoxContact;