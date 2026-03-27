import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen relative">
        {/* Fixed background gradient orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-600/6 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-600/6 rounded-full blur-3xl" />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
