import Head from "next/head"
import A from "./A"

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={"marc1k3y, nextjs test" + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Main"} />
        <A href={"/users"} text={"Users"} />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: blue;
            height: 50px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer