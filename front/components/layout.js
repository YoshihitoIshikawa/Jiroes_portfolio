import PrimarySearchAppBar from "./header"

export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="fixed w-screen h-screen bg-yellow-200 -z-50">
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
