
function Heading() {
    return <h1 style={{ color: "orange" }}>My Favourite Foods</h1>
}

function FavFruits() {
    return (
        <>
            <ul>
                <li>
                    Mango
                </li>
                <li>
                    Apple
                </li>
                <li>
                    Watermelon
                </li>
                <li>
                    Banana
                </li>
            </ul>
        </>
    )
}

    const Fruits = () => {
        return (
            <>
                <Heading />
                <FavFruits />
            </>
        )
    }

    export default Fruits