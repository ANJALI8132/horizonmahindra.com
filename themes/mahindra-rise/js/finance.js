$('.doctabs li a').click(function (touch) {
    $('.doctabs li a.active').removeClass('active');
    $(this).addClass('active');
});
display("salaried");

$('.financetab li a').click(function (touch) {
    $('.financetab li a.active').removeClass('active');
    $(this).addClass('active');
});
financemaintab("forloan");

// Finance Function
function display(divIdToDisplay) {
    $('div.blockdiv').hide();
    $('div#' + divIdToDisplay + '.blockdiv').fadeIn("slow");
}

function financemaintab(divIdToDisplay) {
    $('li.blockdiv').hide();
    $('li#' + divIdToDisplay + '.blockdiv').fadeIn("slow");
}