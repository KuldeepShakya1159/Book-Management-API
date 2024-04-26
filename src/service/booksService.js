const booksModel = require('../repository/models/bookModel');

const getAllBooks = async()=>{
    const books = await booksModel.find();
    if(books.length>0){
        return books;
    }
}

const getBookWithId = async(id)=>{
    const book = await booksModel.findOne({_id:id})
    if(book){
        return book;
    }
}

const addBooktoDb = async(bookdata)=>{
    let book = new booksModel(bookdata);
    book = await book.save();
    return book;
}

const deleteBook = async(id)=>{

    const book = await booksModel.deleteOne({_id:id})
    return book;
}

const updateBook = async(id,data)=>{
    console.log(id)
    console.log(data)
    const book = await booksModel.updateOne(
        {_id:id},
        {
            $set:data
        }
    )

    return book;
}

const search = async(key)=>{

    try{
        console.log(key,"+===============from service")
        const books = await booksModel.find(key);

        console.log(books);

        if(books.length>0){
            return books
        }

        return "no books found";

    }catch(err){
        return `error while searching for book ${err}`
    
    }
   
       
    
     
    
    }
    

module.exports = {
    getAllBooks,
    getBookWithId,
    addBooktoDb,
    deleteBook,
    updateBook,
    search
}