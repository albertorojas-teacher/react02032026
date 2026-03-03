
import './App.css'
import Notifications from './components/Notifications/Notifications'


function App() {

  return (
    <>
  <Notifications type='success' message='Usuario Creado' />
  <Notifications type='alert' message='No hay gasolina' />
  <Notifications type='error' message='No se pudo guardar en la base de datos' />
    </>
  )
}

export default App
