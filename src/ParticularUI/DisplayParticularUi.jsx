import { useParams } from "react-router-dom"
import ParticularIdQuery from "../Query/ParticularIdQuery"


const DisplayParticularUi = () => {
    const {id} = useParams()
    const {data, loading, error} = ParticularIdQuery(id)

    return(
        <div>
            <h1>ParticularIDS</h1>
            <h1>{data?.message?.id}</h1>
            <p>{data?.message?.subject}</p>
        </div>
    )

}

export default DisplayParticularUi