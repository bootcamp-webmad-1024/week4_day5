import axios from "axios"
import { useState } from "react"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const NewProjectForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

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
            .post(`${API_URL}/projects`, projectData)
            .then(() => alert('HECHO!'))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewProjectForm">

            <form onSubmit={handleProjectSubmit}>

                Título
                <input type="text" value={title} onChange={handleTitleChange} />
                <br />

                Descripción
                <input type="text" value={description} onChange={handleDescriptionChange} />
                <br />

                <input type="submit" value={'Crear proycto'} />
            </form>
        </div>
    )
}

export default NewProjectForm