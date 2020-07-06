const Word = require('../classes/word_class');

exports.create = async (request, response) => {
    const word = new Word(request.body);
    await word.insert(); 
    response.json(word.json());
} 

exports.read = async (request, response) => {
    const word = new Word();
    await word.getAll();
    response.json(word);
}

exports.update = async (request, response) => {
    const word = new Word(request.body);
    await word.getById(id);
    response.json(word);
}

exports.delete = async (request, response) => {
    const word = new Word(request.body);
    await word.getById(id);
    response.json(word);
}

// Follow Paul's Ice Cream OOP Example...
// Ask Paul... should we have a separate ORM file?
// Ask... Why routes are in the Controller file in 13.16
// Ask... where should we be doing error handling?
// No error handling in his Ice Cream OOP example. Controller?
