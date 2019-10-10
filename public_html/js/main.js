
/*JavaScript for collapsing panel on Product Details*/
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});

function delCartItem(x) {
    var row = document.getElementById("row"+x);
    row.remove();
}