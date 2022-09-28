import {ReactNode} from 'react'
type Props = {
    type: string,
    method: string,
    children: ReactNode
}

export default function Form({method,type,children}: Props){
    return(
        <form method={method}></form>
    )
}