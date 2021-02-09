import { useState,useReducer } from "react";
import {FootbalContext} from "./FootballContext";
import reducer from "./FootbalReducer";

function FootbalState({children}) {
    const [state, dispach] = useReducer(reducer,{
        matches: []
    })
    function fetchMatch() {
        fetch("https://api.football-data.org/v2/matches", {
            method: 'GET',
            headers: {
                "X-Auth-Token": "e70405b2f2a54b9cb55f35aed8cc669b"
            },
        }).then((request) => {
            if (request.ok) {
                return request.json();
            }
        }).then((result) => {
            console.log(result);
            dispach({
                type: "FETCH",
                payload: result.matches
            })
        })
    }
    return (
        <FootbalContext.Provider value={{
            fetch:fetchMatch,
            matches:state.matches
        }}>
            {children}
        </FootbalContext.Provider>
    );
}

export default FootbalState;