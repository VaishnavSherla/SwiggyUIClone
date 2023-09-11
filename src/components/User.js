import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect')
        timer = setInterval(() => {
            console.log('opp')
        }, 1000)
        return () => {
            console.log('useEffect Return')
            clearInterval(timer)
        }
    }, [])
    console.log('render')
    return <div className="user-card">
        <h3>{count}</h3>
        <h2>Name: {name}</h2>
        <h3>Location: New York</h3>
        <h3>Contact: @JohnDoe</h3>
    </div>
}

export default User;