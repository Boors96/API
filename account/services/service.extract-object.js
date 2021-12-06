

exports.extractUser = (req, res, next) => {
  return Object.assign({}, req.body);
}
