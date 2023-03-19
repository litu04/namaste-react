import React from "react"
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        console.log("child constructor called ", this.props.name)
    }
    async componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Hello React")
        }, 1000)
        console.log("child component did mount called ", this.props.name)
    }
    componentDidUpdate(){
        console.log("child component did update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component will unmount")
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