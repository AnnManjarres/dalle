import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost } from './pages/PagesExport'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b boder-b-[#e6ebf4]'>
            <Link to="/">
              <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>
            <Link to="/create-post" className='font-inter text-white font-medium bg-[#6469ff] px-4 py-2 rounded-md'>Create</Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/create-post" element={ <CreatePost /> }></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  )
}

export default App