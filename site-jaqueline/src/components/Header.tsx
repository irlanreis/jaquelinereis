import logo from '../assets/images/logo-Jaque.svg'

function Header() {
  return (
    <div className="flex flex-row justify-between bg-black">
      <img className='ml-4 cursor-pointer' src={logo} alt="logo Jaqueline Reis"/>
      <nav className="space-x-8 mr-4 mt-7 text-white">
        <span className='rounded p-1 bg-amber-600 font-extralight cursor-pointer hover:bg-amber-500'>Home</span>
        <span className='rounded p-1 bg-amber-600 font-extralight cursor-pointer  hover:bg-amber-500'>Serviços</span>
        <span className='rounded p-1 bg-amber-600 font-extralight cursor-pointer  hover:bg-amber-500'>Sobre</span>
      </nav>
    </div>
  )
}

export default  Header; 