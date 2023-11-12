import EbooksCards from "./ebooksCards/EbooksCards"

function Ebooks() {
  return (
    <div className="bg-linkIt-200 p-[5rem] xl:p-[3rem] flex flex-col">
        <div className="text-center">
            <h1 className="text-[2.5rem] text-white font-semibold font-montserrat p-[4rem]">Ebooks descargables</h1>
        </div>
        <EbooksCards/>
    </div>
  )
}

export default Ebooks