import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Cards';
import "./Admin.css";


const Admin = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>fakebook</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			
			<div className="container">
                <Sidebar />
                <Card />
			</div>
		</div>
	);
};

export default Admin;