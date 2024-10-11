function Autentication(props){
    const autenticar = props.autenticacao
    
    if(autenticar == true){
        return(
            <h1>O usuário {props.nome} está autenticado!</h1>
        )
    }
}

export default Autentication