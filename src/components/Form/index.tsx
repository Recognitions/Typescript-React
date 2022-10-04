import { FormHTMLAttributes } from "react"
import { Button } from "../Button"
import "./styles.css"

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    description: string;
    setDescription: (description: string)=>void;
    price: string;
    setPrice: (price: string)=>void;
    optional: string;
    setOptional: (optional: string)=>void;

    title?: string;
}

export function Form({
    description,
    setDescription,
    price,
    setPrice,
    optional,
    setOptional,
    title = "Cadastrar",
    ...rest
}: FormProps){
    return(
        <form className="formMain" {...rest}>
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
                />
            </div>
            <Button>{title}</Button>
        </form>
    )
}