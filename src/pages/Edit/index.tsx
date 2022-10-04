import { PageControl } from "../../components/PageControl"
import {useState, useEffect, FormEvent} from "react"
import { useParams } from "react-router-dom"
import { Form } from "../../components/Form"
import Swal from "sweetalert2"
import { api } from "../../services/api"

export function Edit(){
    const params = useParams()
    const id = params.id
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")

    useEffect(()=>{
        async function fetchOrder(){
            try{
                const response = await api.get(`/orders/${id}`)
                setDescription(response.data.description)
                setPrice(response.data.price)
                setOptional(response.data.optional)
            }catch(error){
                console.log(error)
                Swal.fire({
                    icon:"error",
                    title:"Algo deu errado",
                    text:"Impossível cadastrar produto!"
                })
            }
        }
        fetchOrder()
    },[])

    async function editOrder(event: FormEvent){
        event.preventDefault()
        try{
            const response = await api.put(`/orders/${id}`,{
                description,price,optional
            })
            Swal.fire({
                icon:"success",
                title:"Alterado com sucesso",
                text:"Dados do paciente alterados com sucesso!"
            })
        }catch(error){
            console.log(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado",
                text:"Impossível cadastrar produto!"
            })
        }
    }
    return(
        <main>
            <PageControl title="Editar produto"/>
            <section>
                <Form 
                    onSubmit={editOrder}
                    description={description}
                    setDescription={setDescription}
                    price={price}
                    setPrice={setPrice}
                    optional={optional}
                    setOptional={setOptional}
                />
            </section>
        </main>
    )
}