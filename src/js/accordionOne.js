// Accordion One
let items = document.querySelectorAll('#accordion .item .header');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        items.forEach((header) => {
            header.closest('.item').classList.remove('active');
        });
        e.currentTarget.closest('.item').classList.toggle('active');
    });
})