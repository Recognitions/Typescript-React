import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./styles.css"
import {Button} from "../../components/Button"
import { api } from '../../services/api'

type Order = {
    id: number;
    description: string;
    price: string;
    optional: string;
    status: number;
}

export function Home(){
    const navigate = useNavigate()

    const [orders, setOrders] = useState<Order[]>([])

    function nevegateToRegister(){
        navigate('cadastrar-pedidos')
    }

    useEffect(()=>{
        async function fetchOrders(){
            try{
                const response = await api.get('/orders')
                setOrders(response.data)
            }catch(error){
                console.log(error)
                Swal.fire({
                    icon:"error",
                    title:"Algo deu errado",
                    text:"Impossível renderizar produtos!"
                })
            }
        }
        fetchOrders()
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
                            {
                                orders.map((order)=>{
                                    return(
                                        <tr key={order.id}>
                                            <td>{order.description}</td>
                                            <td>{order.price}</td>
                                            <td>{order.optional}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </section>
        </main>
    )
}