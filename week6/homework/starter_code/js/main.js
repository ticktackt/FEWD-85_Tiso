
$(document).on('ready', function() {
  $('.readmore').on('click', handleReadMore);
  $('.readless').on('click', handleReadLess);
});


function handleReadMore(event) {
  event.preventDefault();
 $('.hide').slideDown().show();
 $('.readmore').hide();
}

function handleReadLess(event) {
  event.preventDefault();
  $('.hide').slideUp();
  $('.readmore').show();

}