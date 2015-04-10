var mn = require('./')
	, test = require('tape')
	;

test('inserts min into filename', function (t) {
	t.equal('jquery.min.js', mn('jquery.js'))
	t.end();
});

test('inserts alternate minstring into filename', function (t) {
	t.equal('jquery.super-min.js', mn('jquery.js','.super-min'))
	t.end();
});
