const Words = require('../classes/word');

exports.create = async (request, response) => {
    const word = new Word(request.body);
    await word.insert(); 
    response.json(word.json());
} 

exports.read = async (request, response) => {
    const word = new Word(request.body);
    await word.getById(id);
    response.json(word);
}

exports.update = async (request, response) => {
    const word = new Word(request.body);
    await word.getById(id);
    response.json(word);
}

exports.delete = async (request, response) => {
    const word = new Word(request.body);
    await word.getByID(id);
    response.json(word);
}

// Set up Words model. 
