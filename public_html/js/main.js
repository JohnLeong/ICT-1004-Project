
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
function addCartItem() {
    var row = document.createElement("tr");
    var detailscol = document.createElement("td");
    detailscol.class="p-4"
    var aligncenterbox = document.createElement("div");
    aligncenterbox.class="media align-items-center";
    var img = document.createElement("img");
    img.src="";
    var small = document.createElement("small");
    var mediabody = document.createElement('div');
    var span1 = document.createElement('span');
    span1.class = "text-muted";
    span1.textContent="Color:"
    var span2 = document.createElement('span');
    span2.class = "text-muted";
    span2.textContent="Size:"
    var span3 = document.createElement('span');
    span3.class = "text-muted";
    span3.textContent="Ships from:"
    
    small.appendChild(span1);
    small.appendChild(span2);
    small.appendChild(span3);
    
    mediabody.class="media-body";
    mediabody.appendChild(small);
    aligncenterbox.appendChild(mediabody);
    
    detailscol.appendChild(aligncenterbox);
    
    var price = document.createElement('td');
    price.class="text-right font-weight-semibold align-middle p-4";
    var qty = document.createElement('td');
    qty.class="align-middle p-4";
    var total = document.createElement('td');
    total.class="text-right font-weight-semibold align-middle p-4";
    var removebox = document.createElement('td');
    var abox = document.createElement('a');
    abox.class="shop-tooltip close float-none text-danger";
    abox.title="Remove";
    abox.onclick(delCartItem(x));
    abox.textContent="*";
    removebox.appendChild(abox);
    removebox.class="text-center align-middle px-0"
    
    row.appendChild(detailsCol);
    row.appendChild(price);
    row.appendChild(qty);
    row.appendChild(total);
    row.appendChild(removebox);
    
    document.getElementById("carttab").appendChild(row);
}