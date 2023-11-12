import './recursos.css'
import ModuloA from '../Home/Modulos/ModuloA/ModuloA'
import Blogs from './Modulo-Blogs/blogs/Blogs'
import Ebooks from './Modulo-Blogs/ebooks/Ebooks'

export default function Recursos() {
    return (
        <>  
            <ModuloA/>
            <section id='blogs'>
            <Blogs/>
            </section>
            <section id='ebooks'>
                <Ebooks/>
            </section>
            <section id='events'>
                <h1>Eventos</h1>
            </section>    
        </> 
    )
}
