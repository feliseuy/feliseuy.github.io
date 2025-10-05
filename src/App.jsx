import { useState } from 'react'
import './App.css'
import SocialLinks from './SocialLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>🧘🏻‍♀️🦸🏻‍♀️🙋🏻‍♀️</h1>
      <h1>Hi, I’m Felise (or Lisa)! <span className="wave">👋</span></h1>
      <h2>Thanks for stopping by! <span className="heart">❤️</span></h2>

      <SocialLinks />

      {/* <div className="flex gap-6 justify-center mt-6">
      <a href="/blog" className="text-blue-500 hover:underline">Personal Blog</a>
      <a href="/1000-reasons" className="text-pink-500 hover:underline">1000 Reasons to Exercise</a>
      </div> */}
    </>
  )
}

export default App