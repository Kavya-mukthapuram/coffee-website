let searchForm = document.querySelector('.search-form');
let cartContainer = document.querySelector('#cartContainer');
let menuList = document.querySelector('.list');

// Search button
document.querySelector('#search-icon').addEventListener('click', () => {
    searchForm.classList.toggle('active');
    cartContainer.classList.remove('active');
    menuList.classList.remove('active');
     menuList.classList.toggle('active'); 
});

// Cart button
document.querySelector('#cart-btn').addEventListener('click', () => {
    cartContainer.classList.toggle('active');
    searchForm.classList.remove('active');
    menuList.classList.remove('active');
     menuList.classList.toggle('active');
});

// Menu button
document.querySelector('#menu-btn').addEventListener('click', () => {
    menuList.classList.toggle('active');
    searchForm.classList.remove('active');
    cartContainer.classList.remove('active');
});

// Close button inside cart items
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
    });
});
let menuBtn = document.querySelector('#menu-btn');
let navList = document.querySelector('.list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});