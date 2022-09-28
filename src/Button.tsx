import {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export function Button({children}: Props){

    function showAlert(){
        alert("Mostrando alerta")
    }
    return(
        <button type="button" className="btn" onClick={showAlert}>{children}</button>
    )
}