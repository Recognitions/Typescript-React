import {FormEvent, useState} from "react"
import {api} from "../../services/api"
import Swal from "sweetalert2"
import "./styles.css"
import {PageControl} from "../../components/PageControl"
import { Form } from "../../components/Form"

export function Register(){

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")
    
    async function registerOrder(event:FormEvent){
        event.preventDefault()
        try{
            const response = await api.post('/orders',{
                description,price,optional,status:0
            })
            setDescription("")
            setPrice("")
            setOptional("")
            
            Swal.fire({
                icon:"success",
                title:"Enviado com sucesso!",
                text:"Pedido cadastrado com sucesso."
            })
        }catch(error){
            console.log(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado!",
                text:"Impossível cadastrar produto."
            })
        }

    }

    return(
        <main>
            <PageControl title="Pedidos Cadastrados"/>
            <section>
                <Form 
                    onSubmit={registerOrder}
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