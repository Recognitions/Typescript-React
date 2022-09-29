import "./styles.css"
import {Button} from "../../components/Button"

export function Home(){
    return(
        <main>
            <section className="page-control">
                <h2 className="title">Pedidos Pendentes</h2>
                <Button>Cadastrar pedido</Button>
            </section>
        </main>
    )
}