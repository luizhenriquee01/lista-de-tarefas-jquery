$(document).ready(function () {
  $('button').click(function () {});

  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoDaNovaNota = $('#input-max').val();
    const novoItem = $('<li></li>');
    $(`<h2>${enderecoDaNovaNota}</h2>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');

    $('#input-max').val('');

    $('h2').click(function () {
      $(this).addClass('texto-sublinhado');
    });
    $('#botao-redefinir').click(function () {
      location.reload();
    });
  });
});
