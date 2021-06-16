$(document).ready(function () {
    $('#firstName').submit(function (k) {
        reset();
        k.preventDefault();
        var firstName = $(firstName).val();
        var lastName = $(lastName).val();
        var email = $(email).val();
        var password = $(password).val();
        var dateOfBirth = $(dateOfBirth).vl();

        $('.error').remove();
        if (firstName.length < 4) {
            $(firstName).after('<span class ="error">This is the required field<span>');
        }
    });

});
