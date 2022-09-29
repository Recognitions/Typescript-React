import { useNavigate } from "react-router-dom"

import {Button} from "../../components/Button"

export function Home(){
    const  navigate = useNavigate()

    function nevegateToRegister(){
        navigate('cadastrar-pedidos')
    }

    return(
        <main>
            <section className="page-control">
                <h2 className="title">Pedidos Pendentes</h2>
                <Button onClick={nevegateToRegister}>Cadastrar pedido</Button>
            </section>
        </main>
    )
}