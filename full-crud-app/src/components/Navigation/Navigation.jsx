import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="Navigation">
            <nav>
                <Link to="/">
                    <button>Inicio</button>
                </Link>

                <Link to="/proyectos">
                    <button>Proyectos</button>
                </Link>

                <Link to="/proyectos/crear">
                    <button>Nuevo proyecto</button>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation