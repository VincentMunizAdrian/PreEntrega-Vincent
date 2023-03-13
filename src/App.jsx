import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Navbar icono="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png"/>
      <ItemListContainer greeting="Hola! sean Bienvenidos al E-commerce de figuritas mundiales"/>
      <div className='titulo'>
        <h1>Mundial de Figus</h1>
      </div>
    </>
  )
}

export default App
