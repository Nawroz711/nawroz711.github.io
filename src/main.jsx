import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Header from './pages/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <App />
    </BrowserRouter>
)
