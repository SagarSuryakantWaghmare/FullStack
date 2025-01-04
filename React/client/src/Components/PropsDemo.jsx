import avengers from './Avengers.js';
import Card from './Card.jsx';
function PropsDemo() {
    return (
        <>
            <h1 style={{display:"flex",textAlign:"center"}}>Top 5 Avengers in the world</h1>
            {avengers.map(avengers => {
                console.log(avengers)
                return (
                    <Card
                        key={avengers.id}
                        name={avengers.name}
                        img={avengers.img}
                        description={avengers.description}
                    />
                )
            }
            )
            }


        </>
    )
}

export default PropsDemo