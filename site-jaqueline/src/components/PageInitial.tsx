import jaque01 from '../assets/images/Jaque-01.svg'

function PageInitial() {
  return (
    <main className="bg-black w-full h-screen p-4">

      <div className="flex flex-col w- h-full absolute justify-stretch">
        <p className="text-amber-500 text-4xl font-extralight pt-8">Olá, sou Jaqueline Reis,</p>
        <p className="text-white font-extralight ml-1">social media e criadora de conteúdosa mais de 3 anos.</p>
        <p className="text-white w-96 pl-1 font-light mt-32">Meu propósito é fazer você e sua empresa terem um <strong className="text-amber-500 font-bold">posicionamento brilhante no digital</strong> através de uma criação de conteúdo Estrégica & Intencional.</p>
      </div>
      <div className="flex relative justify-end mr-36">
        <div className='flex w-96 relative'>
          <img
            src={jaque01}
            alt="Jaqueline perfil"
            className="w-96"
          />
          <span className="
          object-cover
          ml-24
          mt-auto
          h-24
          w-52
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-transparent 
          to-black"
          ></span>
        </div>

      </div>
    </main>
  )
}

export default PageInitial;