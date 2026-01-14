const container = document.getElementById('container');
container.classList.add('love');

// Fungsi untuk membuat pola hati
function createHeart() {
    // Angka 13 dan 15 adalah skala ukuran hati
    for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        
        // Rumus Matematika Kurva Hati
        const x = 16 * Math.pow(Math.sin(angle), 3);
        const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        const heartBlock = document.createElement('div');
        heartBlock.classList.add('block-heart');

        // Mengatur posisi setiap blok
        const posX = x * 15 + window.innerWidth / 2;
        const posY = y * 15 + window.innerHeight / 2 - 50;

        heartBlock.style.left = `${posX}px`;
        heartBlock.style.top = `${posY}px`;

        // Menambahkan sedikit delay animasi agar muncul satu per satu seperti di video
        heartBlock.style.animationDelay = `${i * 0.1}s`;
        
        container.appendChild(heartBlock);
    }
}

createHeart();