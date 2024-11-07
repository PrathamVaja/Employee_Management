

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /><span className="text-3xl font-semibold"> Pratham 👋</span></h1>
      <button className="bg-red-600 text-lg font-medium px-3 py-1 rounded-md text-white">Log Out</button>
    </div>
  )
}

export default Header
