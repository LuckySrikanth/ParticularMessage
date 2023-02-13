import {useQuery, gql} from "@apollo/client"

const PQueryId = gql`
query GetPQuery($id : String!){
    message(id :$id) {
      id
      subject
      language
    }
  }
`

const ParticularIdQuery = (id) => {
    const {data,loading,error} = useQuery(PQueryId, {
        variables : {
            id 
        }   
    })

    return ({
        data,
        loading,
        error
    }
    )
}

export default ParticularIdQuery