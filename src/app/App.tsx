import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="app-wrapper">
      <div className="container-sidebar print-hidden">
        <Sidebar />
      </div>
      <div className="container-page">
        {/* <router-outlet></router-outlet> */}
      </div>
    </div>
  )
}

export default App
