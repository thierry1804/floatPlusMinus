$('#test').off('keypress').on('keypress', function(e) {
    var regex = RegExp(/\.|\d/);
    if (!regex.test(e.key)) {
        e.preventDefault();
    }
    regex = RegExp(/\./);
    if (regex.test($(this).val()) && e.key === '.') {
        e.preventDefault();
    }
    regex = RegExp(/^0/);
    var regexN = RegExp(/\./);
    if (regex.test($(this).val()) && !regexN.test(e.key) && e.target.selectionStart === 1) {
        e.preventDefault();
    }
    regex = RegExp(/\d\./);
    if (regex.test($(this).val()) && e.key === '0' && e.target.selectionStart === 0) {
        e.preventDefault();
    }
});
