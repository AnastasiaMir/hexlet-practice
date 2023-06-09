export default (validations, validationResult, redirectUrl = '/signup') => async (req, res, next) => {
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  req.flash('errors', errors.array());
  return res.redirect(redirectUrl);
};
