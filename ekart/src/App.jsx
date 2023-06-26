import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

//Always component name should start with Capital Letter
export const App = () => {
  //Divide component into two parts
  //1. logical area
  //2. presentational area
  //Logical Area begins
  const company = 'Optum';

  const increment = () => {
    console.log("Increment Button Clicked");
  }

  return (
    <div class="container-fluid">
      <Header companyName={company} />
      <div className="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <Counter inc={increment} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

