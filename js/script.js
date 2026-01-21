
const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const wrapper = document.querySelector('.page__content-wrapper');

btn.onclick = e => {
    e.stopPropagation();
    sidebar.classList.toggle('collapsed');
    wrapper.classList.toggle('collapsed');
};

let scrollerWrap = document.querySelector('.scroller-wrap');
let backBtn = document.getElementById("blackBtn");
let nextBtn = document.getElementById("nextBtn");

scrollerWrap.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollerWrap.scrollLeft += evt.deltaY;
});

backBtn.addEventListener("click", () => {
    scrollerWrap.scrollBy({left: +-300, behavior: 'smooth'}); 
});

nextBtn.addEventListener("click", () => {
    scrollerWrap.scrollBy({left: 320, behavior: 'smooth'}); 
}); 


