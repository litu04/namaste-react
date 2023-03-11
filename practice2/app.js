import React from "react"
import ReactDOM from "react-dom"
const heading1 = React.createElement("h1",
{
    id: "title",
},"Heading 1 in React")
        const heading2 = React.createElement("h2",
        {
            id: "title",
        },"Heading 2 in React")
        const heading3 = React.createElement("h3",
        {
            id: "title",
        },"Heading 3 in React")
        const container = React.createElement("div", {
            id: "container",
        }, [heading1,heading2,heading3])
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(container)