import {ReactNode,ButtonHTMLAttributes} from 'react'
import "./styles.css"

type Props = ButtonHTMLAttributes<HTMLButtonElement> &{
    children: ReactNode
}

export function Button({children, ...rest }: Props){
    return(
        <button {...rest}>{children}</button>
    )
}