// Quiz JavaScript remains the same

// Community Section JavaScript
const postButton = document.getElementById('post-btn');
const thoughtInput = document.getElementById('thought-input');
const thoughtsContainer = document.getElementById('thoughts-container');

postButton.addEventListener('click', () => {
    const thoughtText = thoughtInput.value.trim();
    if (thoughtText) {
        const thoughtElement = document.createElement('div');
        thoughtElement.classList.add('thought');
        thoughtElement.innerText = thoughtText;
        thoughtsContainer.appendChild(thoughtElement);
        thoughtInput.value = '';
    }
});
