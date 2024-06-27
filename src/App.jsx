import React from 'react'
import './App.css'
import Landing from './stores/pages/Landing'
import Mp from './stores/pages/Mp'
import Tp from './stores/pages/Tp'
import Wp from './stores/pages/Wp'
import Lp from './stores/pages/Lp'
import {Routes,Route} from 'react-router-dom'
import Ms from './singles/Ms'
import Ls from './singles/Ls'
import Ws from './singles/Ws'
import Ts from './singles/Ts'
import Usercart from './stores/Usercart'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Landing />}/>
        <Route path='/mobiles' element={<Mp />}/>
        <Route path='/laptops' element={<Lp />}/>
        <Route path='/watches' element={<Wp />}/>
        <Route path='/tv' element={<Tp />}/>
        <Route path='/mobiles/:id' element={<Ms />} />
        <Route path='/laptops/:id' element={<Ls />} />
        <Route path='/watches/:id' element={<Ws />} />
        <Route path='/tv/:id' element={<Ts />} />
        <Route path='/cart' element={<Usercart />} />
      </Routes>
    </div>
  )
}

export default App

