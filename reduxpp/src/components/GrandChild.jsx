
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function GrandChild(){
    let dispatch = useDispatch()
    let name =useSelector((state)=>state)
    return(
        <React.Fragment>
            <div className="continer bg-info">
                <p className="h1 text-center">GrandChild : {name}</p>
                <button onClick={()=>dispatch({type:'INCREMENT'})} className="btn btn-sm btn-danger">Increment</button>
            </div>
        </React.Fragment>
    )
}