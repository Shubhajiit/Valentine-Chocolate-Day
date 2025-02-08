const themes = {
    romantic: {
        primary: '#FF1493',
        secondary: '#FF69B4',
        accent: '#FFB6C1'
    },
    magical: {
        primary: '#9400D3',
        secondary: '#8A2BE2',
        accent: '#9370DB'
    },
    sunset: {
        primary: '#FF4500',
        secondary: '#FF6347',
        accent: '#FFA07A'
    }
};

const box = document.querySelector('.chocolate-box');
const message = document.querySelector('.message');
const banner = document.querySelector('.banner');

// Apply initial chocolate animations with delays
document.querySelectorAll('.chocolate').forEach((choc, index) => {
    choc.style.animationDelay = `${index * 0.1}s`;
});

box.addEventListener('click', () => {
    box.classList.toggle('open');
    banner.classList.add('hidden');
    setTimeout(() => {
        message.classList.add('show');
    }, 1000);
});

function changeTheme(themeName) {
    const theme = themes[themeName];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
}

// Create falling items animation
function createFallingItem() {
const item = document.createElement('div');
item.className = 'falling-item';
const items = ['🍫', '❤️', '✨', '💝', '💖'];
item.innerHTML = items[Math.floor(Math.random() * items.length)];
item.style.left = Math.random() * 100 + 'vw';
item.style.fontSize = (Math.random() * 20 + 15) + 'px';
item.style.animationDuration = (Math.random() * 3 + 2) + 's';
document.body.appendChild(item);

// Remove the element after animation completes
item.addEventListener('animationend', () => {
    item.remove();
});
}

// Start creating falling items
function startFallingAnimation() {
// Create initial batch of items
for (let i = 0; i < 30; i++) {
    setTimeout(createFallingItem, Math.random() * 3000);
}

// Continue creating items periodically
setInterval(() => {
    if (document.querySelectorAll('.falling-item').length < 50) {
        createFallingItem();
    }
}, 300);
}

// Start the falling animation when the page loads
window.addEventListener('load', () => {
startFallingAnimation();
});

// Start the falling animation when the box is clicked
box.addEventListener('click', () => {
box.classList.toggle('open');
banner.classList.add('hidden');
setTimeout(() => {
    message.classList.add('show');
}, 1000);
});