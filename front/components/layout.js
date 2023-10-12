import PrimarySearchAppBar from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="bg-yellow-200 -z-50 min-h-screen">
        <main className="py-20 flex justify-center">{children}</main>
      </div>
      <Footer />
    </>
  )
}
