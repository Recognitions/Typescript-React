import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./styles.css"
import {Button} from "../../components/Button"
import { api } from '../../services/api'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
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
    const [isLoading, setIsLoading] = useState(true)

    function navigateToRegister(){
        navigate('cadastrar-pedidos')
    }

    async function fetchOrders(){
        try{
            const response = await api.get('/orders')
            setOrders(response.data)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado",
                text:"Impossível renderizar produtos!"
            })
        }
    }
    useEffect(()=>{
        fetchOrders()
    },[])

    async function deleteOrder(id:number){
        try{
            const response = await api.delete(`/orders/${id}`)
            Swal.fire({
                icon:"success",
                title:"Deletado com sucesso",
                text:"O seu produto foi deletado!"
            })
            fetchOrders()
        }catch(error){
            console.error(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado",
                text:"Impossível deletar produto!"
            })
        }
    }

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
                            {isLoading ? (
                                    <tr><td></td><td></td><td><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"/></td><td></td></tr>
                                ) : (
                                    orders.map((order)=>{
                                        return(
                                            <tr key={order.id}>
                                                <td>{order.description}</td>
                                                <td>{order.price}</td>
                                                <td>{order.optional}</td>
                                                <td className='button-area'>
                                                    <Link to={`/editar-pedido/${order.id}`} className='action-button edit-button'>
                                                        <FaEdit/>
                                                    </Link>
                                                    <Link onClick={()=>deleteOrder(order.id)} to="#" className="action-button delete-button">
                                                        <MdDelete/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                        </tbody>
                    </table>
            </section>
        </main>
    )
}