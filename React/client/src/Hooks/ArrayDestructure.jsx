const animals=[
    {name:"cat",sound:"meow"},
    {name:"dog",sound:"woof"}
]

function ArrayDestructure() {
  const {name,sound} = animals;
  return (
    <div>
      <head>
        <h2>Hello</h2>
        <h1>{name}</h1>
        <h1>{sound}</h1>
      </head>
    </div>
  )
}

export default ArrayDestructure