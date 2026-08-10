
import React from "react";
import ChildComponent from "./ChildComponent";
import { useSelector } from "react-redux";
export default function Parent(){
    let x = useSelector((state)=>state)
    return(
        <React.Fragment>
            <div className="continer bg-success">
                <p className="h1 text-center">ParentComponet :{x}</p>
               <ChildComponent />
            </div>
        </React.Fragment>
    )
}