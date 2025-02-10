// assets/react/components/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Projets</h2>
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-6 mb-4">
                        <div className="card bg-dark text-white">
                            <img src={project.image || "/placeholder.svg"} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <p className="card-text"><small className="text-muted">Date: {new Date(project.date).toLocaleDateString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;