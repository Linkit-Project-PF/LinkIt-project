export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 gap-4">

        <div>
          <img className="w-[80%]" src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="" />
        </div>

        <div className="col-span-2 mx-[5%] mt-[10%] pr-[10%]">
          <ul className="flex justify-between font-semibold">
            <li>Empresa</li>
            <li>Talento</li>
            <li>Recursos</li>
            <li>Quiénes Somos</li>
            <li>Vacantes</li>
            <li>
              <li>En Chile</li>
              <li>En Colombia</li>
              <li>En España</li>
              <li>En LATAM</li>
            </li>
          </ul>
        </div>
      </div >
    </div >
  )
}
