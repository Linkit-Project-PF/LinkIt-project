import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';


//i18next  Configuration
export const i18nOptions: InitOptions = {
  fallbackLng: 'es',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        //!Home module A
        "Conectando al talento más destacado con los mejores proyectos IT":"Connecting the most outstanding talent with the best IT projects",
        "Contrata y gestiona al mejor talento de manera global":"Hire and manage the best talent globally",
        "Vacantes disponibles":"Available vacancies",
        //Home module B
        "Reclutamiento y selección":"Recruitment and selection",
        "Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.":"We identify professionals with the appropriate stack, skills and experience for your projects and thus build a high-performance team.",
        "Ver más":"See more",
        "Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.":"We carry out contractual and payment management of talent. Strengthen your team and increase productive capacity without risks.",
        "Gestión y beneficios":"Management and benefits",
        "Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.":"We provide benefits plans, retention and reporting advice and much more.",
        //Home module D
        "Proceso ágil":"Agile process",
        "En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.":"In 5 business days we will present previously interviewed and qualified talent.",
        "Comunicación asertiva":"Assertive communication",
        "Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.":"We are committed to maintaining agile and effective communication throughout the selection process.",
        "Consultoría":"Consultancy",
        "Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.":"We advise you from the ideal profile, the ideal budgets and hiring processes to benefit plans, retention and much more.",
        //Home module F
        "Talento y empresas en más de 50 países":"Talent and companies in more than 50 countries",
   
        //!Company module A
        "Contrata y escala": "Hire and scale",
        "con el mejor talento IT":"with the best IT talent",
        "en tan solo 5 días!":"in just 5 days!",
        'Escala, gestiona y retiene al mejor':"Scale, manage and retain the best",
        "talento del mundo.":"talent in the world",
        "Contrata Talento":"Hire Talent",
        "4/5 on Truspilot": "4/5 on Truspilot",
        "Leer reviews":"Read reviews",
         //Company module B
         "Nuestros servicios":"Our services",
         "Reclutamiento":"Recruitment",
         "y selección":"and selection",
         "Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.":"We identify professionals with the appropriate experience for your projects. We evaluate technical skills, previous experience, culture and language, in order to build an efficient and successful team.",
         "Contratación":"Hiring",
         "Agranda tu equipo y reduce tu costos de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.":"Expand your team and reduce your hiring costs with external talent, increasing productive capacity, without long-term commitments. Dedicate yourself to what is really important; eliminates administrative and operational times for contractual and payment management.",
         "Gestión":"Management",
         "y beneficios":"and benefits",
         "Implementamos planes de beneficios y estrategias de retención para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a retener talento global de manera escalable.":"We implement benefit plans and retention strategies to achieve high-performance teams, providing personalized reports and advice, helping your company retain global talent in a scalable way.",
         //Company module C
         "Más de 500 empresas confían en LinkIT":"More than 500 companies trust LinkIT",
         //Company module D
         "Lo que dicen nuestros clientes":"What our clients say",
         "Conoce los casos de éxito":"Know about success stories",
         //Company module E
         "¿Qué nos hace diferentes?":"What makes us different?",
         "Sin riesgos":"Risk free",
         "Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.":"We offer a quality service to success. There are no advance payments; Payment is upon completion of the contract.",
         "Fee a medida":"Customized fee",
         "Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.":"We customize our rate to your needs and save up to 50% on contracting.",
         "Garantía":"Warranty",
         "Garantía de por vida contratando a través de LinkIT.":"Lifetime guarantee when contracting through LinkIT.",
         "Seguimiento continuo":"Continuous monitoring",
         "Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.":"We assign a specific work team providing an integral and personalized service throughout the entire process.",
         //Company module F
         "Talento especializado en más de 100 tecnologías":"Talent specialized in more than 100 technologies",
         "Conoce más":"Know more",
         //Company module G
         "¿Por qué elegir LinkIT?":"Why choose LinkIT?",
         "Más de ":"More than ",
         "Hasta 5 días":"Up to 5 days",
         "Más de 50 países":"More than 50 countries",
         "candidatos listos para":"candidates ready to ",
         "trabajar":"work",
         "tipos de lenguajes en los ":"types of languages in ",
         "que nos especializamos":"which we specialize",
         "para contactar a tu":"to contact your",
         "próximo talento":"next talent",
         "para seleccionar ":"to select ",
         "talentos":"talents",
         //Company module H
         "Nuestra solución":"Our solution",
         "¡Cotiza con nosotros!":"Quote with us!",
         "Rol asignado":"Assigned role",
         "Pre-alineamiento":"Pre-alignment",
         "Alineamiento":"Alignment",
         "Sourcing y reclutamiento":"Sourcing and recruitment",
         "Presentación de candidatos":"Presentation of candidates",
         "Analytics and follow up":"Analytics and follow up",
         "¡Bienvenido a la acción! se enciende la búsqueda de un rol nuevo. En este momento, designamos un Account Manager para orquestar tus necesidades y un reclutador hábil que será el arquitecto de tu equipo de ensueño. ¡Prepárate para una experiencia única donde cada fase es un paso hacia el éxito personalizado!":"Welcome to the action! The search for a new role is on. At this time, we appoint an Account Manager to orchestrate your needs and a skilled recruiter who will be the architect of your dream team. Get ready for a unique experience where each phase is a step towards personalized success!",
         "¡Prepárate para la acción! Con la descripción previa del perfil en mano, es el momento perfecto para sumergirnos en los requerimientos a fondo. Vamos más allá: estudiamos tu empresa para formular preguntas clave sobre el perfil y brindarte la asesoría que necesitas. En esta fase, no solo proporcionamos respuestas, sino que también traemos nuestras mejores recomendaciones para satisfacer tus necesidades. ¡Estamos aquí para impulsar tu éxito con estrategia y expertise!":"Get ready for action! With the previous profile description in hand, it is the perfect time to dive into the requirements in depth. We go further: we study your company to ask key questions about the profile and provide you with the advice you need. In this phase, we not only provide answers but also bring our best recommendations to satisfy your needs. We are here to boost your success with strategy and expertise!",
         "¡LinkIT, donde cada detalle cuenta para construir juntos un camino hacia el éxito!":"LinkIT, where every detail counts to build together a path to success!",
         "¡Es hora de conocernos a fondo! En esta etapa, vamos a sumergirnos en las especificidades del perfil, abordar todas las dudas y, juntos, esculpiremos la definición del perfil con el máximo detalle posible. ¡Es el momento estelar de LinkIT para brillar!":"It's time to get to know each other better! At this stage, we will dive into the specifics of the profile, address any questions, and together, we will sculpt the profile definition in as much detail as possible. It's LinkIT's prime time to shine!'",
         "¡Vamos a hacer que cada detalle cuente y a crear un perfil que deslumbre!":"Let's make every detail count and create a profile that dazzles!",
         "¡Prepárate para el momento cumbre! Con el perfil completamente validado después de nuestro encuentro, es hora de encontrar el match perfecto. Hemos trazado nuestros espacios para entrevistas y ahora activamos la máquina de búsqueda potenciada con tecnología de vanguardia. En tan solo 5 días, estaremos marcando los encuentros con los candidatos ideales.":"Get ready for the crowning moment! With the profile completely validated after our meeting, it is time to find the perfect match. We have mapped out our interview spaces and now we activate the search engine powered by cutting-edge technology. In just 5 days, we will be scheduling meetings with the ideal candidates.",
         "Pero eso no es todo: ofrecemos una atención personalizada en todo momento. Cualquier duda que surja en el proceso, estamos aquí para resolverla. ¡En LinkIT, no solo reclutamos, creamos estrategias para el éxito que te impulsarán hacia la cima!":"But that's not all: we offer personalized attention at all times. Any questions that arise in the process, we are here to resolve them. At LinkIT, we don't just recruit, we create strategies for success that will propel you to the top!",
         "Estamos listos para llevar tu equipo al siguiente nivel. ¿Preparado para el salto? ¡Vamos juntos!":"We are ready to take your team to the next level. Ready to jump? Let's do it together!",
         "¡En LinkIT, nos adelantamos a la magia de las entrevistas! Antes del gran encuentro, te entregamos la primicia: información completa de los candidatos seleccionados. Pero eso no es todo, trabajamos arduamente para asegurarnos de que cada candidato brille en cada entrevista.":"At LinkIT, we get ahead of the magic of interviews! Before the big meeting, we give you the scoop: complete information of the selected candidates. But that's not all, we work hard to make sure every candidate shines in every interview.",
         "Queremos que tanto candidato como cliente estén completamente preparados para que este primer encuentro sea fructífero al máximo. En LinkIT, cada paso es crucial, y cada candidato está listo para deslumbrar. ¡Prepárate para la ovación, porque estamos aquí para hacer que cada encuentro sea un evento inolvidable!":"We want both candidate and client to be fully prepared so that this first meeting is as fruitful as possible. At LinkIT, every step is crucial, and every candidate is ready to dazzle. Prepare to be applauded, because we are here to make each meeting an unforgettable event!",
         "¡La magia comienza ahora!":"The magic begins now!",
         "¿Listo para la experiencia LinkIT? ¡Es tu momento!":"Ready for the LinkIT experience? Is your moment!",
         "En este paso, nuestro compromiso va más allá de la entrevista. Buscamos acompañarte durante todo el proceso, brindando la mejor experiencia tanto a los candidatos como a nuestros clientes. Realizamos un seguimiento detallado en cada etapa, siempre en búsqueda de la excelencia y listos para ajustar el rumbo si es necesario.":"In this step, our commitment goes beyond the interview. We seek to accompany you throughout the entire process, providing the best experience to both candidates and our clients. We carry out detailed monitoring at every stage, always striving for excellence and ready to adjust course if necessary.",
         "En LinkIT, convertimos la presión en progreso y el seguimiento en éxito. Estamos preparados para elevar tus entrevistas y negociaciones al siguiente nivel.":"At LinkIT, we turn pressure into progress and follow-through into success. We are prepared to take your interviews and negotiations to the next level.",
         "¡Contáctanos y descubre el poder de la determinación con una sonrisa!":"Contact us and discover the power of determination with a smile!",
         //Company module I
         "Contáctanos":"Contact us",
         "¿Qué servicio te interesa?":"What service are you interested in?",
         "Enviar":"Send",

        //!Login - company
        "¡Te damos la bienvenida a LinkIT!":"Welcome to LinkIT!",
        "Conectamos a las empresas con el":"We connect companies with the",
        "mejor talento para sus equipos.":"best talent for their teams.",
        "olvidé mi contraseña":"I forgot my password",
        "Contraseña":"Password",
        "Email corporativo":"Business email",
        "Iniciar sesión":"Log in",
        "Ingresa con Google":"Sign in with Google",
        "¿Necesitas ayuda?":"Do you need help?",
        "Agenda una reunión":"Schedule a meeting",
        "¿Aún no tienes cuenta?":"Don't have an account yet?",
        "Registrarse":"Check in",
        "INGRESO PARA EMPRESAS":"COMPANIES LOGIN ",

        //!Login - talents
        "Conéctate con los mejores proyectos y aplica":"Connect with the best projects and apply",
        "a oportunidades de manera remota.":"to opportunities remotely.",
        "INGRESO PARA TALENTOS":"TALENT LOGIN",

        //!Login pre-login
        "Conectando al talento más destacado":"Connecting the most outstanding talent",
        "con los mejores proyectos IT.":"with the best IT projects.",
        "Soy Talento":"I am a Talent",
        "Soy Empresa":"I am a company",

        //!NavBar
        "Contrata y gestiona talentos de forma global con LinkIt":"Hire and manage talent globally with LinkIt",
        "Comienza ahora!":"Starts now!",
        "Inicio":"Home",
        "Servicios":"Services",
        "Proceso":"Process",
        "Cotiza":"Quote",
        "Vacantes":"Vacancies",
        "Recursos":"Resources",
        "Blogs":"Blogs",
        "Ebooks":"Ebooks",
        "Webinars":"Webinars",
        "Libreria":"Library",
        "Quiénes Somos":"About us",
        "Misión":"Mission",
        "Visión":"Vision",
        "Valores e Historia":"Values and History",
        "Talento interno":"Internal talent",
        "Mis datos":"My data",
        "Mis búsquedas":"My searches",
        "Cerrar sesión":"Sign off",
        "Panel":"Panel",
        "Mis vacantes":"My vacancies",
        "Regístrate":"Register",
        "Inicia Sesión":"Log in",
         //!Blogs
        "Leer Nota":"Read note",
        "Descubre más sobre el mundo IT":"Discover more about the IT world",
        //!CV
        "Arma tu CV con nuestro template":"Build your CV with our template",
        "Descargar Plantilla":"Download Template",
        //!Ebooks
        "Ebooks descargables":"Downloadable ebooks",
        //!Events
        "Ver Grabación":"View Recording",
        "Hablamos de trabajo remoto, oportunidades IT, tus primeros pasos en el empleo, cómo contratar talento internacional y mucho más!":"We talk about remote work, IT opportunities, your first steps in employment, how to hire international talent and much more!",
        //!Accordion Faqs
        "LinkIT es tu recruitment partner que, sin importar las distancias, conecta a las empresas con el mejor talento tech a lo largo del mundo.":"LinkIT is your recruitment partner that, regardless of distance, connects companies with the best tech talent throughout the world.",
        "+ ¿Qué es LinkIT?":"+ What is LinkIT?",
        "+ ¿Por qué LinkIT?":"+ Why LinkIT?",
        "Linkit no es una agencia de recursos humanos, es tu Partner que te ayudará a escalar en tu negocio. Nuestros pilares son Agilidad, Calidad y Excelencia tiro cualquier pilar porque da para pensar esto.":"Linkit is not a human resources agency, it is your Partner that will help you scale your business. Our pillars are Agility, Quality and Excellence, I throw any pillar because it makes you think about this.",
        "+ ¿De qué parte del mundo encuentran talento?":"+ Where in the world do you find talent?",
        "LinkIT no tiene barrera, busca talento en todo el globo sin importar la ubicación ni la nacionalidad, el foco está en el talento, la experiencia y el match con los objetivos marcados.":"LinkIT has no barrier, it searches for talent throughout the globe regardless of location or nationality, the focus is on talent, experience and the match with the established objectives.",
        "Una de las cosas que hace único a LinkIT es que se centra 100% en la confianza y la transparencia con sus partners, es por esto por lo que no hay ningún pago hasta que el talento comience a trabajar.":"One of the things that makes LinkIT unique is that it focuses 100% on trust and transparency with its partners, which is why there is no payment until the talent starts working.",
        "+ ¿Piden pagos antes de concretar el servicio?":"+ Do you ask for payments before completing the service?",
        "+ ¿Cómo encontrar talento en un mercado tan competitivo como el de la tecnología?":"+ How to find talent in a market as competitive as technology?",
        "Gracias a nuestro gran equipo experto y multidisciplinario, junto con el dominio en herramientas de búsqueda y bolsas de datos internas,logramos cruzar las barreras del talento y de ubicación yendo a indagar sobre a candidatos en búsqueda activa así como también a aquellos que no lo estén.":"Thanks to our great expert and multidisciplinary team, together with mastery of search tools and internal data pools, we manage to cross the talent and location barriers by inquiring about candidates in active search as well as those who are not.",
        "+ ¿Qué tipo de roles son los más trabajados por LinkIT?":"+ What type of roles are most worked on by LinkIT?",
        "LinkIT llega en un 360º de perfiles técnicos, encontrando los mejores diseñadores de producto, front-end, back-end, full-stack y mucho más.":"LinkIT reaches 360º of technical profiles, finding the best product designers, front-end, back-end, full-stack and much more.",
        "+ ¿En cuánto tiempo presentan los primeros candidatos cualificados?":"+ How long does it take to present the first qualified candidates?",
        "Tardamos no más de 7 a 10 días hábiles en presentar los primeros candidatos, previamente seleccionados y entrevistados.":"It takes us no more than 7 to 10 business days to present the first candidates, previously selected and interviewed.",
        "+ ¿Sólo se dedican a reclutamiento Tech?":"+ Are you only dedicated to Tech recruiting?",
        "No, si bien nos especializamos en este área, tenemos una red de partners que están dispuestos a brindar el servicio para otras áreas otorgando los mismos beneficios que nosotros.":"No, although we specialize in this area, we have a network of partners who are willing to provide the service for other areas, providing the same benefits as us.",
        "+ ¿Qué modalidades de contratación se trabajan?":"+ What contracting modalities are worked on?",
        "Gracias a los partners que tenemos con distintas empresas del mundo, podemos alinear los requisitos legales del país donde radique la empresa, así como donde esté el talento. Los tipos de relaciones laborales más frecuentes pueden ser:":"Thanks to the partners we have with different companies around the world, we can align the legal requirements of the country where the company is located, as well as where the talent is. The most frequent types of employment relationships can be:",
        "Como trabajador autónomo modalidad freelance":"As a self-employed worker, freelance modality",
        "Mediante un contrato temporal":"Through a temporary contract",
        "En relación de dependencia En caso de no avanzar con el proceso, ¿me tendrán en cuenta futuras oportunidades? Por supuesto! Aceptando los términos y condiciones entrarás en nuestra gran base de datos para poder asignarte el proyecto a tu medida, alineado con tus talentos y necesidades.":"In a dependency relationship If I do not advance with the process, will I be considered for future opportunities? Of course! By accepting the terms and conditions you will enter our large database to be able to assign you the project tailored to you, aligned with your talents and needs.",
        //!FAQ
        "Preguntas Frecuentes":"Frequent questions",
        //!Ebook resources
        "Descargar":"Download",
        //!All Resources
        "No se encontraron recursos":"No resources found",
        //!SearchBar
        "Buscar recursos":"Search resources",
        //!SideBar
        "Buscar":"Search",
        "Temas":"Topics",
        //!Libreria
        "Todos los recursos":"All resources",
        //!Recursos
        "Recursos de LinkIT":"LinkIT Resources",
        //!Register
        "Apellido":"Lastname",
        "Confirmar contraseña":"Confirm Password",
        "Crear Cuenta":"Create Account",
        "Registrate con Google":"Sign up with Google",
        "¿Ya tienes una cuenta?":"Do you already have an account?",
        "Ingresa aquí":"Enter here",
        //!Talentos modulo A
        "Conéctate con los mejores proyectos IT":"Connect with the best IT projects",
        "Aplica a las mejores oportunidades":"Apply to the best opportunities",
        "de manera remota.":"remotely",
        //!Talentos modulo C
        "Lo que dicen nuestros talentos":"What our talents say",
        //!Talentos modulo D
        "Crecimiento y desarrollo":"Growth and development",
        "Trabaja en los mejores proyectos de tecnología con las empresas más destacadas del mundo. Te acompañamos en tu desarrollo profesional asesorándote sobre las tecnologías de vanguardia, competitividad en el mercado y mejores oportunidades globales.":"Work on the best technology projects with the most prominent companies in the world. We accompany you in your professional development, advising you on cutting-edge technologies, market competitiveness and better global opportunities.",
        "Trabajo remoto":"Remote work",
        "Despídete de las largas horas de traslado y trabaja desde la comodidad de tu hogar. Democratizamos oportunidades a nivel global para que encuentres el equilibrio perfecto entre el trabajo y la vida personal.":"Say goodbye to long commutes and work from the comfort of your home. We democratize opportunities globally so you find the perfect balance between work and personal life.",
        "Facilidades de pago":"Payment facilities",
        "Elige dónde y cómo recibir el dinero. Te asesoramos en las mejores formas para recibir el dinero, teniendo en cuenta las contrataciones y legislaciones laborales a nivel global.":"Choose where and how to receive the money. We advise you on the best ways to receive the money, taking into account contracting and labor legislation at a global level.",
        //!Talentos modulo E
        "Cómo aplicar a":"How to apply to",
        "Consulta nuestras vacantes":"Check our vacancies",
        "Tenemos posiciones abiertas en múltiples áreas de crecimiento.":"We have open positions in multiple growth areas.",
        "Aplica completando el formulario":"Apply by completing the form",
        "Selecciona tu posición ideal rellenando la solicitud en pocos clicks.":"Select your ideal position by filling out the application in a few clicks.",
        "Proceso de entrevistas":"Interview process",
        "Conoce en detalle la oportunidad y prepárate para los próximos pasos.":"Learn about the opportunity in detail and prepare for the next steps.",
        "Consigue el trabajo de tus sueños":"Get your dream job",
        "Comienza a trabajar de forma remota y lleva tu carrera al siguiente nivel.":"Start working remotely and take your career to the next level.",
        //!Talentos modulo F
        "Oportunidades en más de 100 tecnologías":"Opportunities in more than 100 technologies",
        //!Talentos modulo G
        "Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!":"If none of these vacancies are for you, don't worry, there are many more to come!",
        "Contáctanos para futuras oportunidades":"Contact us for future opportunities",
        //!Talentos Job filters
        "Encontrar Vacante":"Find vacancies",
        //!Footer
        "Conectando al talento mas destacado con los mejores proyectos IT":"Connecting the most outstanding talent with the best IT projects",
        "Empresa":"Company",
        "Cómo funciona":"How does it work",
        "Casos de éxito":"Success stories",
        "Ingresar":"Sign in",
        "Talento":"Talent",
        "Eventos":"Events",
        "Valores e historia":"Values and history",
        "Desarrolladores":"Developers",
        "Infraestructura":"Infrastructure",
        "Datos":"Data",
        "Ciberseguridad":"Cybersecurity",
        "En Chile":"In Chile",
        "En Colombia":"In Colombia",
        "En España":"In Spain",
        "En LATAM":"In LATAM",
        "Todos los derechos reservados":"All rights reserved",
        "Politica de Privacidad":"Privacy Policy",
        "Terminos y condiciones":"Terms and Conditions",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
      },
    }
  },
};

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init(i18nOptions);

export default i18n;
