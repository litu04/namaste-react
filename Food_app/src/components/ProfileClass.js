import React from "react"
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: "dummy name",
                username: "dummy username",
            }
        }
        console.log("child constructor called ", this.props.name)
    }
    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users/3")
        const json = await data.json()
        console.log("data--> ", json)
        this.setState({
            userInfo: json,
        })
        console.log("child component did mount called ", this.props.name)
    }
    componentDidUpdate(){
        console.log("child component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    render() {
        console.log("child rendered ", this.props.name)
        return (
            <>
                <h1>Profile Class component</h1>
                <h2>Name: {this.state.userInfo?.name}</h2>
                <h3>username: {this.state.userInfo?.username}</h3>
                <h4>company: {this.state.userInfo?.company?.name}</h4>
                <h4>Displaying props: {this.props.name}</h4>
            </>
        )
    }
}

export default ProfileClass

/*
    parent const
    parent render
        child const
        child render

    commit phase:
    DOM update
    API call (child cdm() is called)
    parent cdm()

        json data logged
        child cdm() logged
        child render
        child cdu()

    unmounting: 
        child cwu()
*/