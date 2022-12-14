import { PageControl } from "../../components/PageControl"
import {useState, useEffect, FormEvent} from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Form } from "../../components/Form"
import Swal from "sweetalert2"
import { api } from "../../services/api"

export function Edit(){
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [optional, setOptional] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchOrder(){
            try{
                const {data} = await api.get(`/orders/${id}`)
                setDescription(data.description)
                setPrice(data.price)
                setOptional(data.optional)

                setIsLoading(false)
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
                description,price,optional,status:0
            })
            Swal.fire({
                icon:"success",
                title:"Alterado com sucesso",
                text:"Dados do paciente alterados com sucesso!",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 1500
            })

            setTimeout(()=>{
                navigate("/")
            },1600)
        }catch(error){
            console.error(error)
            Swal.fire({
                icon:"error",
                title:"Algo deu errado",
                text:"Impossível atualizar os dados do produto!"
            })
        }
    }
    return(
        <main>
            <PageControl title="Editar produto"/>
            <section>
                {isLoading ? (
                        <div>
                            <span><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"/></span>
                        </div>
                    ):(
                        <Form 
                            onSubmit={editOrder}
                            description={description}
                            setDescription={setDescription}
                            price={price}
                            setPrice={setPrice}
                            optional={optional}
                            setOptional={setOptional}
                            title="Confirmar alterações"
                        />
                    )
                }
            </section>
        </main>
    )
}