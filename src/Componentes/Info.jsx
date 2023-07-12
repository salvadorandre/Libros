import "../Css/Info.css";

function Info() {
    return ( <>
        <div className="Contenedor-principal">
            <div className="colash">
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/HollieChastain_PleasantGrove.jpg" alt="" />
            </div>
            <div className="info-libros">
                <h1>El poder de leer</h1>
                <p>
                    La lectura es uno de los mejores ejercicios posibles para mantener en forma el cerebro y las capacidades mentales. Es así, porque la actividad de leer requiere poner en juego un importante número de procesos mentales, entre los que destacan la percepción, la memoria y el razonamiento.
                    Desde el punto de vista neurológico, Santamaría nos aclara que “ayuda en el fortalecimiento de las conexiones cerebrales, invitando al lector a pensar, a organizar sus ideas en cuanto a lo que va leyendo y más si luego se comparte lo leído, que también implicaría potenciación de la memoria y de la capacidad de relacionar conceptos.”
                </p>
            </div>
        </div>

        <div className="Contenedor-principal-dos">
            <div className="info-libros">
                <h1>La lectura sana</h1>
                <p>
                Los libros nos proporcionan nuevos conocimientos o puntos de vista, nos permiten desarrollar la imaginación, nos transportan en el tiempo y el espacio, nos acompañan en momentos de soledad… Desde el momento en el lector es capaz de identificarse con situaciones y personajes, la lectura puede transformar su ánimo, de proporcionarle nuevos valores y provocarle nuevas actitudes que le permitan superar las dificultades que deba afrontar en su vida diaria. Ésta es la base fundamental de la biblioterapia, una disciplina que utiliza la relación de las personas con el contenido de los libros como recurso terapéutico.
                </p>
            </div>
            <div className="colash">
                <img src="https://img.freepik.com/fotos-premium/manos-mujer-dirigiendo-pila-libros-collage-arte-contemporaneo-sobre-fondo-pastel-educacion-desarrollo-intelectual-obteniendo-conocimiento-concepto-sabiduria_361816-4746.jpg" alt="" />
            </div>
        </div>

        </>
    )
}

export default Info; 