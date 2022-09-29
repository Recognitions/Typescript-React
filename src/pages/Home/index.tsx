import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import "./styles.css"
import {Button} from "../../components/Button"

export function Home(){
    const  navigate = useNavigate()

    function nevegateToRegister(){
        navigate('cadastrar-pedidos')
    }

    useEffect(()=>{

    },[])

    return(
        <main>
            <section className="page-control">
                <h2 className="title">Pedidos Pendentes</h2>
                <Button onClick={nevegateToRegister}>Cadastrar pedido</Button>
            </section>
            <section className="table-container">
                <table>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Observações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Baião de 2</td>
                                <td>R$12,23</td>
                                <td>Bem quente</td>
                            </tr><tr>
                                <td>Baião de 2</td>
                                <td>R$12,23</td>
                                <td>Bem quente</td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        </main>
    )
}