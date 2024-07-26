window.addEventListener('load', function() {
    const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
    const calendarGlider = document.getElementById('calendar-glider');

    function getMonthDates() {
        const dates = [];
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        console.log(lastDay);

        for (let day = today.getDate(); day <= lastDay; day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = daysOfWeek[date.getDay()];
            const isToday = day === today.getDate() ? ' today' : '';
            dates.push(`
                <div class="day${isToday}" data-date="${date.toDateString()}">
                    ${dayOfWeek}
                    <br />
                    ${day}
                </div>
            `);
        }
        return dates.join('');
    }

    calendarGlider.innerHTML = getMonthDates();

    const glider = new Glider(calendarGlider, {
        slidesToScroll: 4,
        slidesToShow: 4,
        draggable: true,
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
});
document.addEventListener('DOMContentLoaded', function () {
    // Criação dinâmica dos dias da semana
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const calendarGlider = document.getElementById('calendar-glider');
    
    for (let i = 0; i < 21; i++) {  // Gerar 21 dias como exemplo
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = daysOfWeek[i % 7];  // Alternar entre os dias da semana
        calendarGlider.appendChild(day);
    }

    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 4,
        slidesToShow: 4,
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
});