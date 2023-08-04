const scrollX = document.getElementById('positionX');
const scrollY = document.getElementById('positionY');
const btn = document.getElementById('btn');

window.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY);
    scrollX.innerText = e.clientX;
    scrollY.innerText = e.clientY;

    // if(e.clientY > 220) {
    //   btn.classList.add('active');
    // } else {
    //   btn.classList.remove('active');
    // }

    // btn.addEventListener('click', (e) => {
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    //     console.log("yes")
    // })
})

