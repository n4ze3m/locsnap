import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import CreatePage from './pages/create'
import ExplorePage from './pages/explore'
import JoinPage from './pages/join'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<JoinPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/explore/:id" element={<ExplorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
