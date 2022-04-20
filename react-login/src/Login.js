import React from "react";
import { useState, useEffect } from "react";

import { gql } from "@apollo/client"
import { useNavigate } from "react-router-dom";

const GetTodolistByUserid = gql`
query MyQuery ($_eq: String, $eq1: String){
    auth(where: {name: {_eq: $_eq}, password: {_eq: $_eq}}, limit: 1){
        id 
        level
        name
        password
        uri
        username
    }
}
`;

export default function Login() {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [getTodo, {data, loading, error}] = useLazyQuery(GetTodolistByUserid);
    let navigate = useNavigate();

    useEffect(() => {
        if (data?.auth.length === 1){
            console.log ("data", data);
            return navigate("/home");
        }
    }, [data])
const handleChangeName = (e) => {
    setName(e.target.value);
};

const handleChangePassword = (e) => {
    setPassword(e.target.value);
};

const login = () => {
    getTodo({variables: {_eq: name, _eq1: password}});
};

if (loading) {
    return <h1>Loading</h1>
}

console.log(name + " " + password );
return (
    <div className="App">
        <h1>Login</h1>
            <input type="text" onChange = {handleChangeName} />
            <input type="text" onChange = {handleChangePassword}/>
            <button onClick={login}>Submit</button>
    </div>
);
}