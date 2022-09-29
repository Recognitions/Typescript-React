import {Link} from "react-router-dom"
import "./styles.css"

export function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/pedidos-entregues" className="link">Pedidos entregues</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar-pedidos" className="link">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}