import Swal from 'sweetalert2'
import {useEffect,useState} from 'react'
import {Order} from "../@types/order"
import {api} from "../services/api"

export function useOrders(){
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
    
    return{
        orders,
        isLoading,
        fetchOrders
    }
}
