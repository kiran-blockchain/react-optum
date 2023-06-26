import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

//Always component name should start with Capital Letter
export const App = () => {
  //Divide component into two parts
  //1. logical area
  //2. presentational area
  //Logical Area begins

  return (
    <div class="container-fluid">
      <Header />
      <Footer/>
      </div>
  )
}

