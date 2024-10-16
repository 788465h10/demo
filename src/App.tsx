import { Routes, Route } from 'react-router-dom';
import { ViewTodo } from './pages/ViewTodo';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewTodo/>} />
      </Routes>
    </div>
  )
}
