import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase.js";

function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch((err) => alert(err.message));
	};

	return (
		<div className='login'>
			<div className='login__logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/8/86/Discordikona_lv.png'
					alt='discord logo'
				/>
			</div>

			<Button onClick={signIn}>Sign In</Button>
		</div>
	);
}

export default Login;
