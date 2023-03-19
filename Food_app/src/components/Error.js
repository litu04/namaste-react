import { useRouteError } from "react-router-dom"
const Error = () => {
    // error hook from react-router-dom
    const err = useRouteError()
    return (
        <>
            <h1>Ooops!!</h1>
            <h3>Something went wrong!!</h3>
            <h3>{err.status + " : " + err.statusText}</h3>
        </>
    )
}

export default Error