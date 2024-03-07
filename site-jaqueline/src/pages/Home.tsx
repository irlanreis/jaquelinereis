import Destaques from "../components/Destaques";
import Feedbacks from "../components/Feedbacks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageInitial from "../components/PageInitial";

function Home() {
  return (
    <div>
      <Header />
      <PageInitial />
      <Destaques />
      <Feedbacks/>
      <Footer />
    </div>
  )
}

export default Home;