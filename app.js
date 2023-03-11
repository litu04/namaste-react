const heading1 = React.createElement("h1",{},"Heading 1 in React")
        const heading2 = React.createElement("h2",{},"Heading 2 in React")
        const heading3 = React.createElement("h3",{},"Heading 3 in React")
        const container = React.createElement("div", {
            id: "container"
        }, [heading1,heading2,heading3])
        const r = ReactDOM.createRoot(document.getElementById("root"))
        r.render(container)