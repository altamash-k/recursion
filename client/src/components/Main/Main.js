import "./main.css"
import React, {useEffect, useState} from "react";
import AddTicket from "../AddTicket/AddTicket";
import PrevTicket from "../PrevTicket/PrevTicket";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [modalOpen, setModalOpen] = useState(false);
	const [prevTicket, setPrevTicket] = useState(false);

	let navigate = useNavigate();

	useEffect(() => {
		
		(function(d, m){
			var kommunicateSettings = 
				{"appId":"3e835209fdb84e88ab1d0b90c2c489a60","popupWidget":true,"automaticChatOpenOnNavigation":true};
			var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
			s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
			var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
			window.kommunicate = m; m._globals = kommunicateSettings;
		})(document, window.kommunicate || {});
		/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
	});

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>helper</h1>
				<button className="logout" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className="content">
				<div className="info">
					{/* <h2>Welcome Helper <br /> Raise an Issue?</h2> <br /><br /> */}
					<h2>Welcome Helper <br /><span>Raise an Issue?</span></h2> <br /><br />
					<a className="info-btn btn-grad new-ticket" onClick={() => {
						setModalOpen(true);
						}}>Add New Ticket</a> <br /> <br />
					{modalOpen && <AddTicket setOpenModal={setModalOpen} />}

					<h3 style={{marginLeft: '12%', marginTop: '5px'}}>OR</h3> <br />

					<a className="info-btn" onClick={() => {
						navigate("/prev-tickets")
						}}> Previous Tickets </a>
				</div>	
			</div>
		</div>
	);
};

export default Main;
