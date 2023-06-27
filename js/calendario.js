document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "es",
    events: [
      {
        title: "Entrega TP - CURSO WEB 1",
        start: "2023-06-28",
        end: "2023-06-28",
      },
    ],
  });
  calendar.render();
});
