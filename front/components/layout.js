import PrimarySearchAppBar from "./header"

export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="bg-yellow-200 -z-50 min-h-screen">
        <main className="pt-20 flex justify-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
