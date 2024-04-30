import $ from "jquery";

$('body').append(`<p>Holberton Dashboard`);
$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p>Copyright - Holberton School</p>`)
$('body').append(`<p id='count'> ${count} clicks on the button</p>`);

function updateCounter($button) {
    var count = 0;

    var dprocess = $.debounce(process, 500);
    $($button).onClick(function () {
        count++;

        dprocess();
    });
    return count;
}

var count = updateCounter();
