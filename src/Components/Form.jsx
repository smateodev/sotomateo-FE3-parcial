import { useState } from "react"
import Card from "./Card"

const Form = () => {

   const [userData, setUserData] = useState({
      name: '',
      book: ''
   })

   const handleSubmit = (event) => {
      event.preventDefault()

      if (userData.name.length >= 3 && userData.book.length >= 6 && userData.book[0] !== ' ') {
         setShowCard(true)
         setShowError(false)
      } else {
         setShowError(true)
         setShowCard(false)
      }
   }

   const [showError, setShowError] = useState(false)
   const [showCard, setShowCard] = useState(false)

   return (
   <>
      <h3>Elige un libro</h3>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Ingresa tu nombre:" onChange={(event) => setUserData({...userData, name: event.target.value})}/>
         <br />
         <input type="text" placeholder="Ingresa tu libro favorito: " onChange={(event) => setUserData({...userData, book: event.target.value})}/>
         <br />
         <button>Enviar</button>
         {showError && <h4>Por favor chequea que la información sea correcta</h4>}
         {showCard && <Card userData={userData}/>}
      </form>
   </>
   )
}

export default Form