/*function to make a N/M grid table when height and width is submit*/
function makeGrid() {
    "use strict";

    let height =document.getElementById('input_Height').value;
    let width = document.getElementById('input_Width').value;
    let table = document.getElementById('pixel_Canvas');

    // Table grid creation code :
    let i, j;
    table.innerHTML = '';
    let tbody = document.createElement('tbody');
    for (i = 0; i < height; i = i + 1) {
        let tr = document.createElement('tr');
        for (j = 0; j < width; j = j + 1) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

//jQuery to change color of pixel when clicked.
$('body').on('click', 'td', function () {
    "use strict";
    let color = document.getElementById('color_Picker').value;
    $(this).css('background-color', color);

    if ($(this).attr('style')) {
        $('this').removeAttr('style')
    } else {
        $('this').attr('style', 'background-color' + color);
    }
});
