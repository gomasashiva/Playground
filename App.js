// import React from ''

const heading = React.createElement("h1", {id: "heading"}, "Hello World from Shiva ")
console.log(heading) // returns the Object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)