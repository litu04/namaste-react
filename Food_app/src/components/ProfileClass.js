import React from "react"
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count2 : 0,
        }
        console.log("child constructor called")
    }
    componentDidMount(){
        console.log("child component did mount called")
    }
    render() {
        console.log("child class rendered")
        return (
            <>
                <h1>Profile Class component</h1>
                <h3>count2: {this.state.count2}</h3>
                <button onClick={() => this.setState({count2: 1})}>class</button>
                <h4>Displaying props: {this.props.name}</h4>
            </>
        )
    }
}

export default ProfileClass