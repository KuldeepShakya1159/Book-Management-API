const express = require('express');
const router = express.Router();

const userAuth = require("../middleware/jwtAuth");
const {
    getBook,
    getBooks,
    addBook,
    deleteBook,
    updateBook,
    filterBook
} = require('../controller/booksController')


router.route('/filter').get(filterBook);
router.route('/').get(getBooks);
router.route('/:id').get(getBook);
router.route('/add').post(userAuth,addBook);
router.route('/delete/:id').delete(userAuth,deleteBook);
router.route('/update/:id').put(userAuth,updateBook);


module.exports = router;