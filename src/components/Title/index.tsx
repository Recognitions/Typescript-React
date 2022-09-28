type Props = {
    description: string
}

export function Title({ description }: Props){
    
    return(
        <h1>{description}</h1>
    )
}