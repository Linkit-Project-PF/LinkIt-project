import './PreRegister.css'

type PreRegisterFormProps = {
  setPressCompany: (value: string) => void;
  setPressSignUp: (value: string) => void;
  setPressTalent: (value: string) => void;
}

function PreRegisterForm({setPressCompany, setPressSignUp, setPressTalent}: PreRegisterFormProps) {
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
                onClick={()=>{setPressTalent("visible"), setPressSignUp("hidden")}}
            >
                Talento
            </button>
            <button
                className='preRegister-btn'
                onClick={()=>{setPressCompany("visible"), setPressSignUp("hidden")}}
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