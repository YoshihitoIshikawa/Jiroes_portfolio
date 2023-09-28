import PrimarySearchAppBar from "./header"

export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
