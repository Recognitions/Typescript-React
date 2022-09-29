import {FormEvent, useState} from "react"
import {api} from "../../services/api"
import Swal from "sweetalert2"
import "./styles.css"
import { Button } from "../../components/Button"

export function Register(){

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")
    
    async function registerOrder(event:FormEvent){
        event.preventDefault()

        const response = await api.post('/orders',{
            description,price,optional
        })
        setDescription("")
        setPrice("")
        setOptional("")
        
        Swal.fire({
            icon:"success",
            title:"Enviado com sucesso",
            text:"Pedido cadastrado com sucesso"
        })

    }

    return(
        <main>
            <section>
                <h1>Pedidos Cadastrados</h1>
                <form className="formMain" onSubmit={registerOrder}>
                <div className="formControl">
                    <label htmlFor="description">Descrição</label>
                    <input
                        placeholder="Descreva o pedido"
                        onChange={(event)=>{setDescription(event.target.value)}} 
                        value={description} 
                    />
                </div>
                <div className="formControl">
                    <label htmlFor="price">Preço</label>
                    <input
                        placeholder="Defina um preço"
                        onChange={(event)=>{setPrice(event.target.value)}} 
                        value={price} 
                    />
                </div>
                <div className="formControl">
                    <label htmlFor="opcional">Observações (opicional) </label>
                    <input
                        placeholder="Observações sobre o pedido"
                        onChange={(event)=>{setOptional(event.target.value)}} 
                        value={optional} 
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