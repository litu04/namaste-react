import ProfileClass from "./ProfileClass"
import React from "react"
//import ProfileFunction from "./ProfileFunction"
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
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent component did mount called")
    }
    render(){
        console.log("parent rendered")
        return(
            <>
                <h2>About the Food App Page</h2>
                <ProfileClass name={"Kumar"}/>
            </>
        )
    }
}

export default About