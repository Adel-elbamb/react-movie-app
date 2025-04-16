import { useState } from 'react'
import Movies_List from './componatents/movie_list'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Movies_List/>
  </>
  )
}

export default App
