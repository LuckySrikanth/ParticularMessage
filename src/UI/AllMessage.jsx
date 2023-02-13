import { Link } from "react-router-dom"
import Query from "../Query/Query"
import "./AllMessage.css"

const AllMessage = () => {
    const {data,loading,error} = Query()

    return (
        <div className="mainContainer">
            <h1>All Messges</h1>
            {
                data?.messages?.items?.map(items => {
                    return(
                        <div className="messageCard">
                            <Link to = {`/message/${items.id}`}>
                            <p><b>Id: </b>{items.id}</p>
                            <p><b>Subject: </b>{items.subject}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllMessage