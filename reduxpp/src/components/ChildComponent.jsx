
import React from "react";
import GrandChild from "./GrandChild";
import { useSelector } from "react-redux";
export default function ChildComponent(){
    let r = useSelector((state)=>state)
    return(
        <React.Fragment>
            <div className="continer bg-defult">
                <p className="h1 text-center">ChildComponent : {r}</p>
                 <GrandChild />
            </div>
        </React.Fragment>
    )
}