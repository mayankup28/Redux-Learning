import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Home = () => {  
    const dispatch = useDispatch()
    const {c}=useSelector(state=>state.custom)

    const addbtn = () => { 
        dispatch({
            type:"increment"
        })
    }
    const subbtn = () => { 
        dispatch({
            type:"decrement"
        })
    }
    return (
        <div>
            <h2>{c}</h2>
            <button onClick={addbtn}>Increment</button>
            <button onClick={subbtn}>Decrement</button>
        </div>
    )
}

export default Home