import React from "react"
import ReactDOM from "react-dom/client"

{/* <div>Namsate React</div>
<ul>
    <li>Home</li>
    <li>Review/li>
    <li>Contact</li>
    <li>About</li>
</ul> */}

// const container =
// [
//     React.createElement("div",{className:"container"},"Namaste React"),
//     React.createElement("ul",{className:"container"},[
//         React.createElement("li",{},"Home"),
//         React.createElement("li",{},"Review"),
//         React.createElement("li",{},"Contact"),
//         React.createElement("li",{},"About")
//     ])
// ]
//React Element
// const title = (
//         <h1 id="title">Namaste React</h1>
// )
// const HeaderComp = () => {
//     return (
//         <>
//             {title}
//             <h2>H2 tag</h2>
//             <p>Hello Ji</p>
//         </>
//     )
// }
// const Title = () => (
//     <h1 id="title">Namaste React</h1>
// )
// const HeaderComp = () => {
// return (
//     <>
//         {Title()}
//         <h2>H2 tag</h2>
//         <p>Hello Ji, pushpa</p>
//     </>
// )
// }
const Title = () => (
    <h1 id="title">Namaste React</h1>
)
const HeaderComp = () => {
return (
    <>
        <Title/>  
        <h3>H3 tag</h3>
        <p>Good Evening, John</p>
    </>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComp/>)