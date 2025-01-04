import React from 'react';
import { div } from './Calculator';

const Card = ({ id, name, img, description }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
            <div className="card" id={id} style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <img src={img} alt={name} className="card-img" style={{ width: "100%", height: "auto" }} />
                <div className="card-content" style={{ padding: "16px" }}>
                    <h2 className="card-title" style={{ fontSize: "1.5em", margin: "0 0 10px" }}>{name}</h2>
                    <p className="card-description" style={{ fontSize: "1em", color: "#555" }}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;