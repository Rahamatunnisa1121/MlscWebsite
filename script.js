// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background-animation'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const particles = new THREE.BufferGeometry();
const particleCount = 1000;
const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
}

particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const material = new THREE.PointsMaterial({
    size: 0.005,
    color: '#0078d4'
});

const particleMesh = new THREE.Points(particles, material);
scene.add(particleMesh);
camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    particleMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add member cards
function addMemberCard(container) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `<img src="/api/placeholder/300/400" alt="Team Member" class="member-image">`;
    container.appendChild(card);
}

// Populate member cards
document.querySelectorAll('.members-grid').forEach(grid => {
    for (let i = 0; i < 8; i++) {
        addMemberCard(grid);
    }
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});