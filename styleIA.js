const toggleBtn = document.getElementById('chatbot-toggle-btn');
const closeBtn = document.getElementById('chatbot-close-btn');
const container = document.getElementById('chatbot-container');
const form = document.getElementById('chatbot-form');
const input = document.getElementById('chatbot-input');
const messagesContainer = document.getElementById('chatbot-messages');

// Ouvrir/Fermer le chatbot
toggleBtn.addEventListener('click', () => {
    container.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
    container.classList.add('closed');
});

// Gérer l'envoi d'un message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    // 1. Ajouter le message de l'utilisateur
    appendMessage(text, 'user');
    input.value = '';

    // 2. Simuler une réponse du Bot après 1 seconde
    setTimeout(() => {
        appendMessage("C'est une réponse automatique de test !", 'bot');
    }, 1000);
});

// Fonction utilitaire pour ajouter un message et scroller vers le bas
function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    
    // Défilement automatique vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}