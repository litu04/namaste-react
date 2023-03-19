// import ProfileClass from "./ProfileClass"
import React from "react"
import ProfileFunction from "./ProfileFunction"
// const About = () => {
//     return(
//         <>
//             <h2>About the Food App Page</h2>
//             <ProfileFunction name={"shaina"}/>
//             <ProfileClass name={"Kunar"}/>
//         </>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return(
            <>
                <h2>About the Food App Page</h2>
                {/* <ProfileClass name={"first child"}/> */}
                <ProfileFunction name={"Sahil"}/>
            </>
        )
    }
}

export default About

/*
render phase:

    parent constructor
    parent render
    child 1 constructor
    child 1 render
    child 2 constructor
    child 2 render

commit phase:
    update the DOM
    child 1 compentDidMount() called
    child 2 compentDidMount() called
    Parent 1 compentDidMount() called

*/