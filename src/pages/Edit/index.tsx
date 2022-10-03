import { PageControl } from "../../components/PageControl"
import {useState, useEffect, FormEvent} from "react"
import { Form } from "../../components/Form"
import Swal from "sweetalert2"
import { api } from "../../services/api"

export function Edit(){
    const url = (window.location.href).split("/")[4]
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")

    useEffect(()=>{
        async function fetchOrder(){
            try{
                const response = await api.get(`/orders/${url}`)
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
            const response = await api.put(`/orders/${url}`,{
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