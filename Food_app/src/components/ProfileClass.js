import React from "react"
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        console.log("child constructor called ", this.props.name)
    }
    componentDidMount(){
        console.log("child component did mount called ", this.props.name)
    }
    render() {
        console.log("child rendered ", this.props.name)
        return (
            <>
                <h1>Profile Class component</h1>
                <h4>Displaying props: {this.props.name}</h4>
            </>
        )
    }
}

export default ProfileClass