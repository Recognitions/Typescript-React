import "./styles.css"
import Swal from 'sweetalert2'
import {useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Button} from "../../components/Button"
import {api} from '../../services/api'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import {PageControl} from "../../components/PageControl"
import {Order} from '../../@types/order'

export function Home(){
    const navigate = useNavigate()

    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchOrders(){
        try{
            const response = await api.get('/orders')
            setOrders(response.data)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado!",
                text:"Impossível renderizar produtos."
            })
        }
    }
    useEffect(()=>{
        fetchOrders()
    },[])

    function deleteOrder(id:number){
        try{
            Swal.fire({
                icon: 'warning',
                title: 'Você tem certeza?',
                text: "Impossível reverter após deletar produto!",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar produto',
                cancelButtonText: 'Não'
            }).then(async(result) => {
                if (result.isConfirmed) {
                    const response = await api.delete(`/orders/${id}`)
                    Swal.fire({
                        icon: 'success',
                        title:'Produto deletado!',
                        text: 'Seu produto foi deletado com sucesso.',
                    })
                    fetchOrders()
                }
            })
        }catch(error){
            console.error(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado!",
                text:"Impossível deletar produto."
            })
        }
    }

    async function deliveryOrder(order:Order){
        order.status= 1
        try{
            await api.put(`/orders/${order.id}`,order)
            Swal.fire({
                icon:"success",
                title:"Pedido entregue!",
                text:"Pedido entregue com sucesso."
            })
            fetchOrders()
        }catch(error){
            console.error(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado!",
                text:"Impossível entregar produto"
            })
        }
    }

    return(
        <main>
            <PageControl title="Pedidos pendentes">
                <Button onClick={()=>navigate('cadastrar-pedidos')}>Cadastrar pedido</Button>
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
                                    <tr><td><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"/></td></tr>
                                ) : (
                                    orders.filter((order)=>order.status==0).map((order)=>{
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
                                                    <Link onClick={()=>deliveryOrder(order)} to="#" className="action-button delivery-button">
                                                        <TbTruckDelivery/>
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