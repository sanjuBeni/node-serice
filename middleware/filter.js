const filterAge = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h2>Please Enter Age.</h2>");
  } else if (req.query.age < 18) {
    res.send("<h2>You cann't access this page.</h2>");
  } else {
    next();
  }
};

module.exports = filterAge;
