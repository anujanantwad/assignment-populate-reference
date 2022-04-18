const express = require('express');
const router = express.Router();
const BookController= require("../controllers/allController")


router.post("/Books", BookController.Books  )

router.post("/Author", BookController.Author  )

router.post("/Publisher", BookController.Publisher  )
router.get("/getBookswithauthor", BookController.getBookswithauthor  )
router.get("/getbookwithpublisher", BookController.getbookwithpublisher  )
router.post("/createBooks", BookController.createBooks  )
 router.post("/authorValidation", BookController.authorValidation  )
router.post("/Bookswithpublisher", BookController.Bookswithpublisher  )
router.post("/publisherValidation", BookController.publisherValidation  )




module.exports = router;