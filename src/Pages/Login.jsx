import "../Styles/Login.css";
import robo from "../images/com.png";
export default function Login() {
	return (
		<>
			<div className="bit">
				<div className="small">
					<div className="harshit">
						LOGIN
						<input className="put" type="text" placeholder="email"></input>
						<input className="put" type="text" placeholder="password"></input>
						<div className="continue-btn">Continue</div>
						<div className="sign-up">
							<div className="question">Don't have an account?</div>
							<div className="sign-up-link">Sign Up</div>
						</div>
					</div>
					<div className="com">
						<img src={robo} className="robo"></img>
					</div>
				</div>
			</div>
		</>
	);
}
