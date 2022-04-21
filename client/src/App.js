import {React, useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Main from "./components/Main/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Admin from "./components/Admin/Admin";

function App() {
	const user = localStorage.getItem("token");
	// const [tickets, setTickets] = useState([])
	// useEffect(() => {
	// 	axios
	// 	.get('http://localhost:8080/api/users/list-ticket')
	// 	.then(res => setTickets(res.data))
	// 	.catch(error => console.log(error));
	// });
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/admin" exact element={<Admin />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
