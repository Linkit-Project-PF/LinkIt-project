import './PreRegister.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setPressSignUp, setPressCompany, setPressTalent } from '../../redux/features/registerLoginSlice';

function PreRegisterForm() {
  const dispatch = useDispatch();
  
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className="preRegister-container">
      <div className="preRegister-subContainer">
        <div className="preRegister-content" onClick={handleClick}>
          <h1 className="preRegister-title">Selecciona Tu Tipo De Perfil:</h1>
          <div className='btn-container'>
            <button
                className='preRegister-btn'
                onClick={()=>{dispatch(setPressTalent("visible")), dispatch(setPressSignUp("hidden"))}}
            >
                Talento
            </button>
            <button
                className='preRegister-btn'
                onClick={()=>{dispatch(setPressCompany("visible")), dispatch(setPressSignUp("hidden"))}}
            >
                Empresa
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreRegisterForm