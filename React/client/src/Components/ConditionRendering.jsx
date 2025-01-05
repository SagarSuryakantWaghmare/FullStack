import React from 'react'
var isLoggedIn = true
function renderConditionally() {
    if (isLoggedIn === false) {
        return <h1>Hello</h1>
    } else {
        return (
            <div style={{ backgroundColor: "orange", height: "400px", width: "200px", textAlign: "center", fontSize: "30px", alignItems: "center" }}>
            <div style={{ backgroundColor: "orange", height: "400px", width: "200px", textAlign: "center", fontSize: "30px", alignItems: "center" }}>
                    <h1>Hello</h1>
                    <form className="form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>

                </div>

            </div>
        )
    }
}
function ConditionRendering() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            {renderConditionally()}
            </div>
        </>
    )
}

export default ConditionRendering