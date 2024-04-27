import { Link } from "react-router-dom";

export default function NavItems() {
    return (
        <div className="flex gap-3">

            <Link to='/signup'>
                <button>Cadastrar</button>
            </Link>

            <Link to='/signin'>
                <button>Entrar</button>
            </Link>

        </div>
    )
}