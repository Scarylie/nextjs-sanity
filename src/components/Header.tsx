export default function Header() {
  return (
    <header className="flex justify-between px-5 py-5">
      <div>
        <h1 className="header__title text-2xl">MAYA</h1>
      </div>
      <div className="flex justify-evenly gap-5 ">
        <button>Man</button>
        <button>Woman</button>
        <button>Producs</button>
        <button>About us</button>
        <button>Blog</button>
      </div>
      <div className="">
        <button>Search</button>
      </div>
    </header>
  )
}
