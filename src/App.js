import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function App() {
	const user = useSelector(selectUser);
	return (
		<div className='app'>
			{user ? (
				<>
					<Sidebar />
					<Chat />
				</>
			) : (
				<h2>Please login</h2>
			)}
		</div>
	);
}

export default App;
