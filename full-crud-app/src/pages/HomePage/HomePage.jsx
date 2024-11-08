import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <hr />
            <Link to={'/proyectos'}>Vrr proyectos</Link>
        </div>
    );
}

export default HomePage