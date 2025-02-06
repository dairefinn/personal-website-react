import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <div className="app-wrapper">
      <div className="container-sidebar print-hidden">
        <Sidebar />
      </div>
      <div className="container-page">
        {/* <router-outlet></router-outlet> */}
        <Homepage />
      </div>
    </div>
  )
}

export default App
