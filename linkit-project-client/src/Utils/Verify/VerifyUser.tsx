import { SUPERADMN_ID } from "../../env"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
export default function VerifyUser() {
  const nagivate = useNavigate()
  const params = useParams()
  const handleVerifyUser = async () => {
    try {
      await axios.get(`https://linkit-server.onrender.com/auth/verify?id=${params.id}&role=user`, {
        headers: {
          Authorization: `Bearer ${SUPERADMN_ID}`
        }
      })
      nagivate('/')
      alert('Verify')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="mt-10">
      <h3>Validacion de Usuario</h3>
      <p>Este es un mensaje para validar el usuario</p>
      <button onClick={handleVerifyUser}>Validar</button>
    </div>
  )
}
