document.addEventListener('DOMContentLoaded', () => {
    const monthYearElem = document.getElementById('month-year');
    const calendarDatesElem = document.getElementById('calendar-dates');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar(date) {
        calendarDatesElem.innerHTML = '';
        
        const year = date.getFullYear();
        const month = date.getMonth();

        // Set month and year header
        monthYearElem.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Get the first day of the month
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            calendarDatesElem.innerHTML += '<div class="date"></div>';
        }

        // Add days of the month
        for (let day = 1; day <= lastDate; day++) {
            calendarDatesElem.innerHTML += `<div class="date">${day}</div>`;
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});
