function Book(title,author,pages,haveRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.haveRead = haveRead;
    this.info = function(){
        return (this.title +" by "+ this.author+", "+this.pages)
    }
}

const test = new Book('lo`rd', 'mama', 2343, true)
console.log(test.info());