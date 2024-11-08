import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage/ProjectDetailsPage'
import NewProjectPage from '../pages/NewProjectPage/NewProjectPage'
import EditProjectPage from '../pages/EditProjectPage/EditProjectPage.jsx'

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/proyectos' element={<ProjectsPage />} />
                <Route path='/proyectos/detalles/:projectId' element={<ProjectDetailsPage />} />
                <Route path='/proyectos/crear' element={<NewProjectPage />} />
                <Route path='/proyectos/editar/:projectId' element={<EditProjectPage />} />
                <Route path='*' element={<h1>404 MELON</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes