import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="text-center my-10">
      <h1 class="text-4xl font-serif"> Click to Add </h1>
      <div>
        <button 
          class="px-10 my-20 rounded-md text-2xl font-mono border-2 transition-all 
          shadow-md hover:shadow-lg duration-300
          "
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>
        <br />
      </div>
    </div>
  )

}

export default App
