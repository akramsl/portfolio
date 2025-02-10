// assets/react/components/About.js
import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">À propos de moi</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Développeur Full Stack</h6>
                            <p className="card-text">
                                Je suis un développeur passionné avec une expertise en création d'applications web modernes.
                                J'aime relever des défis techniques et créer des solutions innovantes.
                            </p>
                            <p className="card-text">
                                Mes technologies préférées incluent React, Symfony, et Node.js.
                                Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine du développement web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;