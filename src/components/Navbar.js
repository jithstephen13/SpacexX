import logo from "../images/logo.svg"

export default function Navbar() {
  

  return (
    <>
      <header className="sticky top-0 left-0 p-5 flex items-center justify-between w-full lg:py-0 z-40  bg-slate-400">
        <div>
            <img src={logo} alt="SpaceX" className="w-16 lg:w-auto" />
        </div>

        <nav className="navbar">
          
        </nav>

        <div className="lg:hidden">
          <button className="menu-button text-white uppercase text-sm tracking-wide" >
            Menu
          </button>
        </div>
      </header>
    </>
  )
}
