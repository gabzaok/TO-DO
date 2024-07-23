window.addEventListener('load', function() {
    setTimeout(() => {
        const glider = new Glider(calendarGlider, {
            slidesToScroll: 4,
            slidesToShow: 4,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            scrollLock: true,
        });

        glider.refresh(); // Atualiza o Glider após a adição dos itens

        glider.scrollItem(0);

        calendarGlider.addEventListener('click', function(event) {
            if (event.target.classList.contains('day')) {
                document.querySelectorAll('.day').forEach(day => {
                    day.classList.remove('selected');
                });
                event.target.classList.add('selected');
            }
        });
    }, 100); // Atraso de 100ms
});
