

$('.menu').on('click', function(e) {
  e.preventDefault();
  $(this).next().toggleClass('active');
});


$(document).click(function (e) {
    var containers = $('.menu, .nav');
    if (!containers.is(e.target) && containers.has(e.target).length === 0){
        containers.removeClass('active');
    }
});
