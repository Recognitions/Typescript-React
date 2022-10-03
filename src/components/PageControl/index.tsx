import { Button } from "../Button"
import {ReactNode} from "react"

type Props = {
    title: String,
    children: ReactNode
}

export function PageControl({title, children}: Props){
    return(
        <section className="page-control">
            <h2 className="title">{title}</h2>
            {children}
        </section>
    )
}