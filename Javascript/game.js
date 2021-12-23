const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: '¿Cual de estos no es un navegador?',
        choice1: 'Mozila',
        choice2: 'Chrome',
        choice3: 'Opera',
        choice4: 'Claro',
        answer: 4,
    },
    {
        question: "¿Que entiende usted por Internet Explore, Mozila Firefox Y Google Chorme?",
        choice1: "Son marcas de productos para computadores",
        choice2: "Es hadware para computador",
        choice3: "Son periféricos",
        choice4: "Son navegadores de Internet.",
        answer: 4,
    },
    {
        question: "¿El historial del navegador registra todas las paginas y sus fechas?",
        choice1: "Solo la Hora",
        choice2: "Solo fechas",
        choice3: "Si guarda la fecha y la hora",
        choice4: "Ninguna opción es correcta ",
        answer: 4,
    },
    {
        question: "La herramienta Zoom en la personalización del navegador nos permite...",
        choice1: "Cambiar el tamaño de la hoja para la impresión.",
        choice2: "Ver mas grande o mas pequeña la pagina web sin cambiar realmente el tamaño de la fuente",
        choice3: "Ambas opciones son correctas",
        choice4: "Ninguna opción es correcta",
        answer: 2,
    },
    {
        question: "La carpeta donde se descargan todos los archivos de algún navegador de Internet, ¿es posible cambiarla?",
        choice1: "Si es posible",
        choice2: "Algunas veces",
        choice3: "No es posible",
        choice4: "Ninguna respuesta es correcta",
        answer: 1,
    },
    {
        question: "¿Cuál no es un pokemon tipo lucha?",
        choice1: "Lucario",
        choice2: "Machamp",
        choice3: "Hariyama",
        choice4: "Hitmolee",
        answer: 1,
    },
    {
        question: "¿Cual de la siguiente opciones no es un motor de búsqueda?",
        choice1: "Yahoo", 
        choice2: "Google", 
        choice3: "Microsoft Office", 
        choice4: "Bing",
        answer: 3,
    },
    {
        question: "¿Que lenguaje no es orientado a Objetos?",
        choice1: "Java", 
        choice2: "Haskell", 
        choice3: "C++", 
        choice4: "Python",
        answer: 2,
    },
    {
        question: "¿Que lenguaje no sirve para estilizar sitios web?",
        choice1: "Stylus",
        choice2: "Less", 
        choice3: "Sass", 
        choice4: "NextCSS",
        answer: 4,
    },
    {
        question: "¿Qué es son los perifericos?",
        choice1: "Son todo tipo de extenciones utiles para un computador como (mause, teclado, parlantes etc)",
        choice2: "Son los que contrlan el software de un computador", 
        choice3: "son todo los componentes dentro de un computador", 
        choice4: "Son todas las anteriorres",
        answer: 1,
    },
    /*otros 10 mas*/
    {
        question: '¿HTML es un lengauje de programacion?',
        choice1: 'no, es un lenguaje de etiquetas',
        choice2: 'Sí, es un lenguaje que añade etiquetas',
        choice3: 'Sí, es un lenguaje de programacion orientado a objetos',
        choice4: 'Ninguna de las anteriores',
        answer: 1,
    },
    {
        question: "¿Cuanto duran los datos de un ordenador?",
        choice1: "1 decada",
        choice2: "2 dos decadas",
        choice3: "6 0 7 años",
        choice4: "6 0 7 decadas",
        answer: 4,
    },
    {
        question: "El sistema operativo es:",
        choice1: "El software almacenado en el hardware.",
        choice2: "La unidad elemental de información.",
        choice3: "Un conjunto de programas que se encargan de controlar la computadora",
        choice4: "La forma de almacenar datos",
        answer: 3,
    },
    {
        question: "¿Se puede recuperar un archivo borrado?",
        choice1: "No",
        choice2: "Sí, mediante una utilidad del sistema operativo.",
        choice3: "Sí, utilizando la papelera de reciclaje.",
        choice4: "Sí, después de vaciar la papelera de reciclaje.",
        answer: 3,
    },
    {
        question: "Se refiere al acto de transferir un archivo o fichero desde un servidor a nuestro computador:",
        choice1: "Upload",
        choice2: "Dowload",
        choice3: "Ambas respuestas son correctas",
        choice4: "Tokio, JapónNinguna de las respuestas es correcta",
        answer: 2,
    },
    {
        question: "¿Cómo se realiza la representación de un diagrama en una diapositiva?",
        choice1: "Sobre el botón (“Nueva diapositiva”) y la selección de (“Diagrama”) en la ventana de Auto perfil",
        choice2: "Sobre el menú (“Insertar”) y el submenú (“Gráfico”).",
        choice3: "Sobre el comando (“Diagrama”) del menú (“Insertar”).",
        choice4: "La opcion 1 y 2 son correctas",
        answer: 4,
    },
    {
        question: "¿Cuáles de las siguientes opciones son barras de menú específicas que tiene Excel?",
        choice1: "La barra de símbolos de Excel.", 
        choice2: "La barra de herramientas estándar.", 
        choice3: "La barra de panel de tareas.", 
        choice4: "Ninguna de las anteriores.",
        answer: 2,
    },
    {
        question: "¿Qué es hipertexto e hipermedia?",
        choice1: "Son texto o gráficos que tienen vínculos incrustados.", 
        choice2: "Son objetos o equipos que forman el Internet.", 
        choice3: "Son páginas Web.", 
        choice4: "Son documentos con información de otros sitios Web, películas, fotografías o sonidos. ",
        answer: 1,
    },
    {
        question: "¿Cuál de las siguientes situaciones representa el origen más común de los problemas de" +
        "conexión en la instalación de cable coaxial?",
        choice1: "Defectos en el conductor de núcleo",
        choice2: "Mala conexión del blindaje", 
        choice3: "Mala conexión del conductor de núcleo.", 
        choice4: "Circuitos abiertos.",
        answer: 4,
    },
    {
        question: "¿Cuáles son los pasos que se debe seguir para solucionar problemas de programación" +
        "por medio de una computadora?",
        choice1: "Definir el algoritmo, Diseñar el Algoritmo, Comparar si se adapta al Problema e Implementar.",
        choice2: "Definición del Problema, Análisis del Problema, Diseño del Algoritmo, Codificación, Prueba" +
        "y Depuración, Documentación y Mantenimiento.", 
        choice3: "Implementar el algoritmo y luego analizar el problema", 
        choice4: "Ninguna de las anteriores.",
        answer: 2,
    },
    //5 mas
    {
        question: "Las características de los Sistemas Informáticos se definen según: ",
        choice1: "Sean abiertos o cerrados.",
        choice2: "El tipo de componentes de hardware",
        choice3: "El esquema de conexión de los equipos.",
        choice4: "Las aplicaciones que están instaladas",
        answer: 1,
    },
    {
        question: "¿Qué son las estructuras dinámicas?",
        choice1: "Son las que utilizan una cantidad de memoria variable, y esta no tiene restricción o limitación" +
            "en el tamaño utilizado", 
        choice2: "Son las que tienen un tamaño de memoria limitado y debe seguir ciertas consideraciones.", 
        choice3: "Son las que se deben definir previa ejecución del programa.", 
        choice4: "Ninguna de las anteriores.",
        answer: 1,
    },
    {
        question: "Dentro del lenguaje de control de datos la sentencia GRANT de SQL hace:",
        choice1: "Concede los derechos de acceso a un objeto.", 
        choice2: "Revoca los derechos de acceso a un objeto.", 
        choice3: "Concede los derechos de conexión al host.", 
        choice4: "Todas las anteriores.",
        answer: 1,
    },
    {
        question: "La correspondencia dinámica es posible realizarla gracias a:",
        choice1: "La utilización del ensamblador para la programación. ",
        choice2: "El planificador de procesos.", 
        choice3: "Los compiladores especializados ", 
        choice4: "La unidad de gestión de memoria (MMU).",
        answer: 4,
    },
    {
        question: "La Web 2.0 es un elemento que permite: ",
        choice1: "Concepto de las tecnologías de la información y comunicación que se fundamenta en crear y compartir recursos de diferente naturaleza",
        choice2: "Herramienta para solo enviar correos electrónicos", 
        choice3: "Plataforma de alta tecnología de computo para compartir recursos en las redes basadas en Cisco", 
        choice4: "todas las anteriores",
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 25

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()