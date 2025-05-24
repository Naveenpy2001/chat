import {Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import HomePage from './pages/Index'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
    </>
  )
}

export default App