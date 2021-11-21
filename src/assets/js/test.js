$(document).ready(function () {
  $("#tabcontent div").hide(); // Скрываем содержание
  $("#customtabs a:first").attr("id", "current"); // Активируем первую закладку
  $("#tabcontent div").fadeIn(); // Выводим содержание

  $("#customtabs a").click(function (e) {
    e.preventDefault();
    $("#tabcontent .catalog__list").hide(); //Скрыть все сожержание
    $("#customtabs a").attr("id", ""); //Сброс ID
    $(this).parent().attr("id", "current"); // Активируем закладку
    $("#" + $(this).attr("title")).fadeIn(); // Выводим содержание текущей закладки
  });
});
