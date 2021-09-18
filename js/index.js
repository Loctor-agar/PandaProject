// const counters = document.querySelectorAll('.counter');

// counters.forEach((counter) => {
//     counter.innerText = 0;
//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerHTML;
//         const increment = target / 150;

//         if (c < target) {
//             counter.innerHTML = `${Math.ceil(c + increment)}`;
//             setTimeout(updateCounter, 4)
//         }
//     };
//     updateCounter();
// });

$('.single-item').slick();

