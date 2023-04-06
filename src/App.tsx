import { useState } from 'react'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Jobs from './components/Jobs'
import Value from './components/Value'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[85%] m-auto bg-white'>
    <NavBar />
    <Search />
    <Jobs />
    <Value />
    <Footer />
    </div>
    </>
    )
}

export default App
