import images from "../constants/globalImgs";

function Feedbacks() {
  return (
    <div className="w-screen h-auto bg-white text-center relative flex flex-col m-10">
      <h1 className="font-light text-4xl h-10">O que nossas clientes estão falando</h1>
      <div className="flex space-x-4">
        <div className="w-72 h-auto flex flex-col items-center space-y-2 rounded-md shadow-xl">
          <img
            className="w-32 h-40 mt-2 rounded-md"
            src={images[1]}
            alt="test" />
          <h1 className="text-2xl">Marcely Maciel</h1>
          <p className=" font-light text text-left m-4">
          "Estou muito satisfeita com todo serviço, O que mais gosto é quando agrega na minha rotina de trabalho. Tudo é dinâmico e direto, desde ideias de conteúdos até ajustes de detalhes. Estou amando o retorno e como tá ficando lindo o feed."
          </p>
        </div>

        <div className="w-72 h-auto flex flex-col items-center space-y-2 rounded-md shadow-xl">
          <img
            className="w-32 h-40 mt-2 rounded-md"
            src={images[1]}
            alt="test" />
          <h1 className="text-2xl">Marcely Maciel</h1>
          <p className="font-light text-left m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores reprehenderit nemo .
          </p>
        </div>
        <div className="w-72 h-auto flex flex-col items-center space-y-2 rounded-md shadow-xl">
          <img
            className="w-32 h-40 mt-2 rounded-md"
            src={images[1]}
            alt="test" />
          <h1 className="text-2xl">Marcely Maciel</h1>
          <p className="font-light text-left m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores reprehenderit nemo .
          </p>
        </div>
      </div>
    </div>
  )
}
export default Feedbacks;