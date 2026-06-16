import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/reserva">Reservas</Link>
                </div>
        </nav>
    )
}
export default Navbar