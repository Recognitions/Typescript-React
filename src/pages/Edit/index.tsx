import { PageControl } from "../../components/PageControl"
import {useState, useEffect} from "react"
import { Form } from "../../components/Form"
import Swal from "sweetalert2"

export function Edit(){

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")

    useEffect(()=>{
        async function fetchOrder(){
            try{

                
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
        fetchOrder()
    },[])

    function editOrder(){

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