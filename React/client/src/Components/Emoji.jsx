import React from 'react';
import Card from "./Card";

const emojiData = [
    {
        id: 1,
        name: "Grinning Face",
        description: "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms.",
        img: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/grinning-face_1f600.png"
    },
    {
        id: 2,
        name: "Thumbs Up",
        description: "A thumbs-up gesture indicating approval.",
        img: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/thumbs-up_1f44d.png"
    },
    {
        id: 3,
        name: "Red Heart",
        description: "A classic red heart emoji, used for expressions of love.",
        img: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/red-heart_2764-fe0f.png"
    }
];

function card(props) {
    return (
        <div key={props.id} style={cardStyle}>
            <img src={props.img} alt={props.name} style={imgStyle} />
            <p style={nameStyle}>{props.name}</p>
            <p style={descriptionStyle}>{props.description}</p>
        </div>
    );
}

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px'
};

const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
};

const nameStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: '8px 0'
};

const descriptionStyle = {
    fontSize: '0.9em',
    color: '#555'
};

function Emoji() {
    return (
        <>
            <h1>EmojiPedia</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>
                {emojiData.map((emoji) => {
                    return (
                        <Card
                            key={emoji.id}
                            id={emoji.id}
                            name={emoji.name}
                            img={emoji.img}
                            description={emoji.description} // Added missing prop
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Emoji;