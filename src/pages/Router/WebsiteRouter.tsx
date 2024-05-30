import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {Member} from "../Member/Member.tsx";
import React, {createRef, useEffect} from "react";
import {Research} from "../Research/Research.tsx";
import {JoinUs} from "../JoinUs/JoinUs.tsx";
export const homepageRef=createRef() as React.RefObject<HTMLAnchorElement>;
export const memberRef=createRef() as React.RefObject<HTMLAnchorElement>;
export const researchRef=createRef() as React.RefObject<HTMLAnchorElement>;
export const joinUsRef=createRef() as React.RefObject<HTMLAnchorElement>;
export function WebsiteRouter(){
    useEffect(() => {
        document.title="EDI LAB"
    }, []);
    return(
        <>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"/member"} element={<Member/>}></Route>
                    <Route path={"/research"} element={<Research/>}></Route>
                    <Route path={"/join_us"} element={<JoinUs/>}></Route>
                </Routes>
                <Link to={""} ref={homepageRef} style={{display:"none"}}></Link>
                <Link to={"/member"} ref={memberRef} style={{display:"none"}}></Link>
                <Link to={"/research"} ref={researchRef} style={{display:"none"}}></Link>
                <Link to={"/join_us"} ref={joinUsRef} style={{display:"none"}}></Link>
            </BrowserRouter>

        </>

    )
}