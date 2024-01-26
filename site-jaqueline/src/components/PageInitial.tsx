import jaque01 from '../assets/images/Jaque-01.svg'

function PageInitial() {
  return (
    <main className="bg-black w-full h-full p-4">
      <div className="flex flex-col 2xl:w-1/2 2xl:h-full absolute justify-stretch">
        <p className="text-amber-500 2xl:text-6xl font-extralight pt-8 ">Olá, sou Jaqueline Reis,</p>
        <p className="text-white 2xl:text-3xl font-light ml-1">social media e criadora de conteúdosa mais de 3 anos.</p>
        <p className="text-white 2xl:text-3xl  pl-1 font-light mt-32">Meu propósito é fazer você e sua empresa terem um <strong className="text-amber-500 font-bold">posicionamento brilhante no digital</strong> através de uma criação de conteúdo Estrégica & Intencional.</p>
      </div>
      <div className="flex relative justify-end mr-36 2xl:w-2/4 2xl:ml-auto">
        <div className='flex w-96 relative'>
          <img
            src={jaque01}
            alt="Jaqueline perfil"
            className="2xl:w-screen sm:h-full"
          />
          <span className="
          object-cover
          ml-24
          mt-auto
          h-24
          w-72
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-transparent 
          to-black
          sm:h-1/4
          sm:w-62
          sm:ml-12"
          ></span>
        </div>

      </div>
    </main>
  )
}

export default PageInitial;