const notesArray = [
    { id: 1, title: "Note 1", content: "Content of Note 1" },
    { id: 2, title: "Note 2", content: "Content of Note 2" },
    { id: 3, title: "Note 3", content: "Content of Note 3" },
];

function Notes() {
  return (
    <>
    <h1 style={{textAlign:"center",fontSize:"30px",alignItems:"center"}}>Notes are important</h1>
    {
        notesArray.map((note)=>{
            return(
                <div key={note.id} style={{border:"1px solid #ccc",borderRadius:"8px",padding:"16px",margin:"16px",textAlign:"center",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",maxWidth:"200px"}}>
                    <h2 style={{fontSize:"1.2em",fontWeight:"bold",margin:"8px 0"}}>{note.title}</h2>
                    <p style={{fontSize:"0.9em",color:"#555"}}>{note.content}</p>
                </div>
            )
        })
    }
    </>
  )
}

export default Notes