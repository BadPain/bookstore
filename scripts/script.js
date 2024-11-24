function init() {
    renderBooks();
    getBookTemplate();
    getCommentTemplate();
}

function renderBooks() {
    let booksContent = document.getElementById('content');

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        booksContent.innerHTML += getBookTemplate(indexBook);
    };
}

function renderComment(bookIndex) {
    let CommentContent = document.getElementById('comment_content');
    CommentContent.innerHTML = "";
    let comments = books[bookIndex].comments;

    for (let indexComment = 0; indexComment < comments.length; indexComment++) {
        CommentContent.innerHTML += getCommentTemplate(bookIndex, indexComment);
    };
}

function getCommentTemplate(bookIndex, indexComment) {
    let comment = books[bookIndex].comments[indexComment];
    return `<div class="comment_section">
    <p class="comment" id="comment_section">Kommentare:</p>
    <p><strong>${comment.name}:</strong> ${comment.comment}</p>
    </div>`;
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
            <p class="book_Price">${books[indexBook].price} €</p>
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
        <br>

    </section>
    <br>
    <br>`;
}