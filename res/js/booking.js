$(function () {
    console.log('onload');
    // $('#form').on('submit', clickSubmit);
    $('#form').submit(clickSubmit);
});

function clickSubmit(event) {
    console.log('click submit');
    event.preventDefault();

    if ($('input[name="extra"]:checked').val === undefined) {
        
    }
}