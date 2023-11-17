import './recursos.css'
import ModuloA from '../Home/Modulos/ModuloA/ModuloA'
import Blogs from './Modulos-Recursos/blogs/Blogs'
import Ebooks from './Modulos-Recursos/ebooks/Ebooks'
import Events from './Modulos-Recursos/eventos/Events'
import CV from './Modulos-Recursos/cv/CV'
import FAQ from './Modulos-Recursos/FAQ/FAQ'

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
                <Events/>
            </section>    
            <section id='CV'>
                <CV/>
            </section>
            <section id='FAQ'>
                <FAQ/>
            </section>
        </> 
    )
}
