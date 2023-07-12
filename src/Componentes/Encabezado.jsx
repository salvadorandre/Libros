import "../Css/Encabezado.css"; 

function Encabezado() { 
    return(
        <nav className="cabeza">
            <ul className="bar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Pagina</a></li>
                <li><a href="#">Recomendaciones</a></li>
                <li><a href="#">Registrarse</a></li>
            </ul>
        </nav>
    )
}
    
export default Encabezado;