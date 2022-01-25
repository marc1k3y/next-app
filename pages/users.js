import Link from "next/link"
import MainContainer from "../components/MainContainer"

export default function users({ users }) {
  return (
    <MainContainer title={"users page"}>
      <h1>User list</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>)}
      </ul>
    </MainContainer>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return {
    props: { users }
  }
}