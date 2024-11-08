import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectDetailsPage = () => {

    const { projectId } = useParams()

    const [project, setProject] = useState({})

    useEffect(() => {
        fetchProjectDetails()
    }, [])

    const fetchProjectDetails = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then(response => setProject(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectDetailsPage">
            <h1>Detalles de proyecto {project.title}</h1>
            <hr />
            <p>Descripción: {project.description}</p>
            <Link to={`/proyectos/editar/${projectId}`}>Editar proyecto</Link>
            <hr />
            <Link to={'/proyectos'}>Volver a proyectos</Link>
        </div>
    );
}

export default ProjectDetailsPage