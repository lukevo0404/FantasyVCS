const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/signin", controller.signin);
};

// router.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// router.post(
//   "/signup",
//   [
//     verifySignUp.checkDuplicateUsernameOrEmail,
//     verifySignUp.checkRolesExisted
//   ],
//   controller.signup
// );

// router.post("/signin", controller.signin);


// module.exports = router