const booksService = require('../service/booksService');

const getBooks = async(req,res)=>{
    try{
        const books = await booksService.getAllBooks();
    if(books.length>0){
        return res.status(200).json({result:books})
    }
    }catch(err){
        return res.json({result:`Please add some books to load the content`})
    } 
}

const getBook = async(req,res)=>{
    try{
        const book = await booksService.getBookWithId(req.params.id);
        if(book){
            return res.status(200).json({result:book})
        }
    }catch(err){

        return res.json({result:'cannot find book with id'})
    }
}

const addBook = async(req,res)=>{
    try{
        const book = await booksService.addBooktoDb(req.body);
        return res.status(201).json({result:book})
    }catch(err){
        return res.json({result:'cannot add book'})
    }
}

const deleteBook = async(req,res)=>{
    try{
    
        const book = await booksService.deleteBook(req.params.id);
        return res.status(202).json({result:`${book} successfully deleted`})

    }catch{
        return res.json({result:'error while deleting'})
    }
}

const updateBook = async(req,res)=>{
    try{
        const book = await booksService.updateBook(req.params.id,req.body);
        return res.status(200).json({result:book});
    }catch(err){
        return res.json({result:'error while updating'})
    }
}

const filterBook = async(req,res)=>{
    
    try{
        let filter = {};
        const {author , publish_year} = req.query;
        if(author){
            filter.author = author;
        }
        if(publish_year){
            filter.publish_year=publish_year
        }

        const books = await booksService.search(filter);
      
        if(books.length>0){
            return res.status(200).json({result:books})
        }else{
            return res.json({result:`no books found ${books}`})
        }
    }catch(err){
        return res.json({result:"error while searching books"})
    }
   
    
}

module.exports = {
    getBook,
    getBooks,
    addBook,
    deleteBook,
    updateBook,
    filterBook
}
