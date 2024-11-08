import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const EditProjectForm = () => {

    const { projectId } = useParams()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchProjectData()
    }, [])

    const fetchProjectData = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then(response => {
                const { title, description } = response.data
                setTitle(title)
                setDescription(description)
            })
            .catch(err => console.log(err))
    }

    const handleTitleChange = e => {
        const { value } = e.target
        setTitle(value)
    }

    const handleDescriptionChange = e => {
        const { value } = e.target
        setDescription(value)
    }

    const handleProjectSubmit = e => {
        e.preventDefault()
        const projectData = { title: title, description: description }

        axios
            .put(`${API_URL}/projects/${projectId}`, projectData)
            .then(() => alert('LISTO!'))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewProjectForm">

            <h1>{projectId}</h1>

            <form onSubmit={handleProjectSubmit}>

                Título
                <input type="text" value={title} onChange={handleTitleChange} />
                <br />

                Descripción
                <input type="text" value={description} onChange={handleDescriptionChange} />
                <br />

                <input type="submit" value={'Editar proycto'} />
            </form>
        </div>
    )
}

export default EditProjectForm