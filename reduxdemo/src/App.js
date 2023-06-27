import { Counter } from "./components/Counter"
import { Increment } from "./components/Increment"

export const App = () => {
  return (
    <div>
      <h1>Welcome to Redux Demo</h1>
      <div>
        <Increment />
      </div>
      <br />
      <Counter />
    </div>
  )
}