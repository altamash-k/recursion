import "./main.css"
import React, {useState} from "react";
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
