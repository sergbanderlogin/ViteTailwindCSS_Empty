// import  "../assets/libs/flowbite.js";

// Accordion
let items = document.querySelectorAll('#accordion .item .header');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        items.forEach((header) => {
            header.closest('.item').classList.remove('active');
        });
        e.currentTarget.closest('.item').classList.toggle('active');
    });
})

// New pages Accordion
function accordion() {
    const items = document.querySelectorAll('.accordion-trigger');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const parent = item.parentNode

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                document.querySelectorAll('.accordion-item').forEach(child => {
                    child.classList.remove('active')
                });

                parent.classList.add('active')
            }
        })
    })
}

accordion()