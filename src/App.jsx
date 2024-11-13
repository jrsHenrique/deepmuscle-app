import { useState } from 'react'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss"
import Login from './screens/Login'
import Register from './screens/Signup'
import Navbar from './screens/Home'
import TreinoDia from './screens/Home/TreinoDia'
import Treinos from './screens/Treinos/Treinos'
import ChatBox from './screens/Chat/ChatBox'


function App()
{
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!authenticated &&
            <>
              <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
              <Route path="/cadastro" element={<Register setAuthenticated={setAuthenticated} />} />
            </>}
          {
            authenticated &&
            <Route path='/' element={<Navbar />}>
              <Route path='home' index element={<TreinoDia />} />
              <Route path='treinos' element={<Treinos />} />
              <Route path='chat' element={<ChatBox />} />
              <Route path='conta' element={<h1>Contact</h1>} />
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
