import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import stls from "../../styles/user.module.scss"

export default function User({ user }) {
  const { query } = useRouter()
  return (
    <MainContainer title={"user page"}>
      <div className={stls.user}>
        <h1>User with id {query.id}</h1>
        <h4>{user.name}</h4>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()
  return {
    props: { user }
  }
}