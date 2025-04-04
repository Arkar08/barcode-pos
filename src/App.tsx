import CategoryProvider from "./context/CategoryContext"
import View from "./routes/View"

function App() {

  return (
    <CategoryProvider>
        <View />
    </CategoryProvider>
  )
}

export default App
