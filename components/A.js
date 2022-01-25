import Link from "next/link"
import stls from "../styles/A.module.css"

export default function A({ href, text }) {
  return (
    <Link href={href}>
      <a className={stls.link}>{text}</a>
    </Link>
  )
}