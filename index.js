var path = require('path');

module.exports = function (file, minstring) {
	var ext = path.extname(file);
	minstring = minstring || '.min';

	return path.join(
		path.dirname(file)
		, path.basename(file, ext) + minstring + ext
	);
}
