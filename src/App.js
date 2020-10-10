import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";
import Login from "./components/Login";
import { auth } from "./firebase.js";
import { login, logout } from "./features/userSlice.js";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className='app'>
			{user ? (
				<>
					<Sidebar />
					<Chat />
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
