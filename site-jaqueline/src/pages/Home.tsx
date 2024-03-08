import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageInitial from "../components/PageInitial";

function Home() {
  return (
    <div>
      <Header />
      <PageInitial />
      <Destaques />
      <Footer />
    </div>
  )
}

export default Home;