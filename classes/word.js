class Word {
    constructor(word) {
        this.word = word;
    }

    print() {
        console.log('print');
    }
}

const w = new Word('test');

module.exports = {
    Word
}