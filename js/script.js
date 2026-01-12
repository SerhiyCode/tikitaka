document.getElementById('toggleBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.page-content-wrapper').classList.toggle('collapsed');
}); 