const wordModel = require('../models/words_model')

class Word {
    constructor(word_obj) {
        this._word = word_obj;
    }

    get id(){
        return this._word.id;
    }

    get definition(){
        return this._word.definition;
    }

    async getAll(){
        this._word = await wordModel.selectAll();
    }

    async getById(id){
        this._word = await wordModel.sleectAllBy(id);
    }

    getLiteral(){
        return this._word;
    }

}


module.exports = Word;