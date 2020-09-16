import React from "react";

export function Container({ fluid, children }) {
  return <div  style={{ textAlign: "center"}}
   className={`container${fluid ? "-fluid" : ""}`} >{children}</div>;
}

export function Card({ fluid, children}) {
  return <div className={`card${fluid ? "-fluid " : ""}`}>{children}</div>
}

export function CardBody({ fluid, children}) {
  return <div className={`card-body${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}> {children}</div>
}

export function Col({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}> {children} </div> 
}