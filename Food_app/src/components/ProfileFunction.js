import { useEffect, useState } from "react"

const ProfileFunction = (props) => {
    const [count1, setCount1] = useState(0)
    useEffect(() => {
        console.log("Useeffect called")
    }, [null])
    console.log("function rendered")
    return(
        <>
            <h1>Profile Function component</h1>
            <h3>Count1: {count1}</h3>
            <button onClick={() => setCount1(2)}>func</button>
            <h4>Displaying props: {props.name}</h4>
        </>
    )
}

export default ProfileFunction