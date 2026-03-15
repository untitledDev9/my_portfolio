import React, { useState } from 'react'
import Homepage from './pages/Homepage'
import LoadingScreen from './component/LoadingScreen'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && <Homepage />}
    </div>
  )
}

export default App
