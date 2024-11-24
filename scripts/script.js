function init() {
    renderBooks();
}

function renderBooks() {
    let booksContent = document.getElementById('content');
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        booksContent.innerHTML += getBookTemplate(indexBook);
    };
}

function getBookTemplate(indexBook) {
    return `<section class="bookViewClass">

        <div class="book_Name">${books[indexBook].name}</div>
        <hr>
        <div class="book_Icon_Class">
            <img class="book_Icon" src="./img/icons/book_icon.svg" alt="">
        </div>
        <hr>
        <div class="book_Liked">
            <p class="book_Price">${books[indexBook].price}</p>
            <div class="book_New_Liked">
                <p>${books[indexBook].likes}</p>
                <img class="book_heart" src="./img/icons/heart_on.svg" alt="">
                <img class="book_heart" src="./img/icons/heart_off.svg" alt="">
            </div>
        </div>
        <div class="book_Infos_Main">
            <div class="book_Infos">
                <span>Author</span>
                <span>Erscheiungsjahr</span>
                <span>Genre</span>
            </div>
            <div class="book_Infos_Script">
                <p>: ${books[indexBook].author}</p>
                <p>: ${books[indexBook].publishedYear}</p>
                <p>: ${books[indexBook].genre}</p>
            </div>
        </div>
        <hr>
        <div>
            
        </div>
    </section>
    <br>
    <br>`
}

// function getCommentTemplate(indexBook, indexComment) {
//     return `
//     <p class="comment" id="comment_section">Kommentare:</p>
//     <p>${books[indexBook].comments[indexComment].name}</p>
//     <p>${books[indexBook].comments[indexComment].comment}</p>
//     `
// }