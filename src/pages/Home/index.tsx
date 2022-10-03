import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./styles.css"
import {Button} from "../../components/Button"
import { api } from '../../services/api'
import {FaEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {PageControl} from "../../components/PageControl"

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

    function navigateToRegister(){
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
            <PageControl title="Pedidos pendentes">
                <Button onClick={navigateToRegister}>Cadastrar pedido</Button>
            </PageControl>
            
            <section className="table-container">
                <table>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Observações</th>
                                <th>Ações</th>
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
                                            <td>
                                                <Link to={`/editar-pedido/${order.id}`} className='edit-button'>
                                                    <FaEdit/>
                                                </Link>
                                            </td>
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