
const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const wrapper = document.querySelector('.page__content-wrapper');

btn.onclick = e => {
    e.stopPropagation();
    sidebar.classList.toggle('collapsed');
    wrapper.classList.toggle('collapsed');
};