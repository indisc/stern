

$('#myModal-hochhaus').on('hidden.bs.modal', function () {
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src);
});

$('#myModal-medienhaus').on('hidden.bs.modal', function () {
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src);
});
$('#myModal-rochlitz').on('hidden.bs.modal', function () {
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src);
});