$(document).ready(function() {
  $('#load-content').click(function() {

    $('#more-content').toggleClass('shown');

    $('#load-content').hide();
    $('.hidep').hide();



    if ($('#more-content').hasClass('shown')) {

      $('#load-content').text('Hide  Description');
      $('#more-content').fadeToggle('slow', function() {
        $('#load-content').fadeToggle('slow');
        $('.footer').hide();

      });
    } else {
      $('#load-content').text('Quotes');
      $('#more-content').fadeToggle('slow', function() {
        $('#load-content').fadeIn('slow');
        $('.hidep').show();
        $('.footer').show();
      });
    }


  });
});
