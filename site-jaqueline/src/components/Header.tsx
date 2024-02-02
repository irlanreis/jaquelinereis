import logo from '../assets/images/logo-Jaque.svg'

function Header() {
  return (
    <div className="flex flex-row justify-between bg-black">
      <img className='ml-4 cursor-pointer sm:w-72' src={logo} alt="logo Jaqueline Reis"/>
      <nav className="flex space-x-8 mr-4 mt-7 text-white h-max w-80">
        <button className='rounded py-1 w-24 bg-amber-600 font-normal cursor-pointer hover:bg-amber-500'>Home</button>
        <button className='rounded py-1 w-24 bg-amber-600 font-normal cursor-pointer  hover:bg-amber-500'>Portifólio</button>
        <button className='rounded py-1 w-24 bg-amber-600 font-normal cursor-pointer  hover:bg-amber-500'>Sobre</button>
      </nav>
    </div>
  )
}

export default  Header;