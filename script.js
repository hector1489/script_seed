const mensajesDiv = document.getElementById('mensajes');
const mensajeInput = document.getElementById('mensajeInput');
const enviarBtn = document.getElementById('enviarBtn');

const respuestas = {
  "saludos": [
    "¡Hola! ¿En qué puedo ayudarte?",
    "¡Saludos! ¿Cómo estás hoy?",
    "¡Hola! Bienvenido."
  ],
  "preguntas_generales": [
    "Puedo ayudarte con información sobre...",
    "Mis funciones incluyen...",
    "Estoy aquí para responder a tus preguntas."
  ],
  "despedidas": [
    "¡Adiós! Que tengas un buen día.",
    "¡Hasta luego! Vuelve pronto.",
    "¡Nos vemos! Si necesitas algo más, no dudes en preguntar."
  ],
  "respuestas_por_defecto": [
    "Lo siento, no entiendo tu pregunta.",
    "Por favor, reformula tu pregunta.",
    "Aún estoy aprendiendo, ¿puedes intentar preguntar de otra manera?"
  ]
};

window.onload = () => {
    const saludoInicial = respuestas.saludos[Math.floor(Math.random() * respuestas.saludos.length)];
    agregarMensaje('Bot', saludoInicial);
};

enviarBtn.addEventListener('click', () => {
  const mensaje = mensajeInput.value.toLowerCase();
  if (mensaje.trim() !== '') {
    agregarMensaje('Usuario', mensaje);
    mensajeInput.value = '';
    responderBot(mensaje, respuestas);
  }
});

function responderBot(mensaje, respuestas) {
  let respuesta = obtenerRespuesta(mensaje, respuestas);
  setTimeout(() => {
    agregarMensaje('Bot', respuesta);
  }, 1000);
}

function obtenerRespuesta(mensaje, respuestas) {
  if (mensaje.includes('hola') || mensaje.includes('saludos')) {
    return respuestas.saludos[Math.floor(Math.random() * respuestas.saludos.length)];
  } else if (mensaje.includes('ayuda') || mensaje.includes('funciones')) {
    return respuestas.preguntas_generales[Math.floor(Math.random() * respuestas.preguntas_generales.length)];
  } else if (mensaje.includes('adiós') || mensaje.includes('hasta luego')) {
    return respuestas.despedidas[Math.floor(Math.random() * respuestas.despedidas.length)];
  } else {
    return respuestas.respuestas_por_defecto[Math.floor(Math.random() * respuestas.respuestas_por_defecto.length)];
  }
}

function agregarMensaje(remitente, texto) {
  const mensajeDiv = document.createElement('div');
  mensajeDiv.innerHTML = `<strong>${remitente}:</strong> ${texto}`;
  mensajesDiv.appendChild(mensajeDiv);
  mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
}