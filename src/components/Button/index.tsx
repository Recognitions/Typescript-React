import {ReactNode,ButtonHTMLAttributes} from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &{
    children: ReactNode
}

export function Button({children, ...rest }: Props){
    return(
        <button className="btn" {...rest}>{children}</button>
    )
}