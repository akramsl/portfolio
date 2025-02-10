// assets/react/components/Skills.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const response = await axios.get('/api/skills');
            setSkills(response.data);
        };
        fetchSkills();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Compétences</h2>
            <div className="row">
                {skills.map((skill) => (
                    <div key={skill.id} className="col-md-4 mb-3">
                        <div className="card bg-dark text-white">
                            <div className="card-body">
                                <h5 className="card-title">{skill.name}</h5>
                                <div className="progress">
                                    <div 
                                        className="progress-bar" 
                                        role="progressbar" 
                                        style={{width: `${skill.level}%`}}
                                        aria-valuenow={skill.level} 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    >
                                        {skill.level}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;