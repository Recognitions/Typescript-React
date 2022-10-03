import {FormEvent, useState} from "react"
import {api} from "../../services/api"
import Swal from "sweetalert2"
import "./styles.css"
import { Button } from "../../components/Button"
import {PageControl} from "../../components/PageControl"

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
                title:"Enviado com sucesso",
                text:"Pedido cadastrado com sucesso"
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
            <PageControl title="Pedidos Cadastrados"/>
            <section>
                <form className="formMain" onSubmit={registerOrder}>
                <div className="formControl">
                    <label htmlFor="description">Descrição</label>
                    <input
                        placeholder="Descreva o pedido"
                        onChange={(event)=>{setDescription(event.target.value)}} 
                        value={description}
                        required
                    />
                </div>
                <div className="formControl">
                    <label htmlFor="price">Preço</label>
                    <input
                        placeholder="Defina um preço"
                        onChange={(event)=>{setPrice(event.target.value)}} 
                        value={price}
                        required
                    />
                </div>
                <div className="formControl">
                    <label htmlFor="opcional">Observações (opcional)</label>
                    <input
                        placeholder="Observações sobre o pedido"
                        onChange={(event)=>{setOptional(event.target.value)}} 
                        value={optional}
                        required
                    />
                </div>
                
                <Button>
                    Botão
                </Button>
            </form>
            </section>
        </main>
    )
}