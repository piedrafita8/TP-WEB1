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
      {
        title: "Re-entrega TP - CURSO WEB 1",
        start: "2023-07-05",
        end: "2023-07-05",
      },
      {
        title: "Inicio curso Python",
        start: "2023-07-17",
        end: "2023-07-17",
      },
      {
        title: "Inicio curso Photoshop",
        start: "2023-07-18",
        end: "2023-07-18",
      },
      {
        title: "Inicio curso Fotografia",
        start: "2023-07-18",
        end: "2023-07-18",
      },
      {
        title: "Inicio curso E-commerce",
        start: "2023-07-20",
        end: "2023-07-20",
      },
      {
        title: "Inicio curso Desarrollo de Videojuegos",
        start: "2023-07-24",
        end: "2023-07-24",
      },
      {
        title: "Inicio curso CSS",
        start: "2023-07-28",
        end: "2023-07-28",
      },
    ],
  });
  calendar.render();
});
