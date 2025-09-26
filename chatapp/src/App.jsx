import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Index'
import Chat from './components/Chat/index'
import { AboutOliver } from './pages/AboutOliver'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/home' element={<HomePage />} />
     
     {/* this is chat screen */}
      <Route path='/' element={<Chat />} />   

      <Route path='/about' element={<AboutOliver />} />

    </Routes>
    </>
  )
}

export default App