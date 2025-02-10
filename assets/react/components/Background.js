import React from 'react';

const Background = () => {
    return (
        <div className="particles-container">
            {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`} />
            ))}
        </div>
    );
};

export default Background;