export default function Footer() {
  return (
    <footer className="flex flex-col bg-black/10 gap-3">
      <div className="m-4 sm:m-8">
        <div className="">
          <p className="text-2xl">MAYA</p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row sm:gap-5">
          <p>Man</p>
          <p>Woman</p>
          <p>Producs</p>
          <p>About us</p>
          <p>Blog</p>
        </div>
      </div>
    </footer>
  )
}
