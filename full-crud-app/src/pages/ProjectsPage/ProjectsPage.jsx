import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function ProjectsPage() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then(response => setProjects(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Projects Page</h1>
            <hr />
            {
                projects.map(elm => {
                    return (
                        <div className="ProjectCard card" key={elm.id} >
                            <Link to={`/proyectos/detalles/${elm.id}`}>
                                <h3>{elm.title}</h3>
                            </Link>
                        </div>
                    )
                })
            }
            <Link to={'/'}>Volver a inicio</Link>
        </div>
    );
}

export default ProjectsPage