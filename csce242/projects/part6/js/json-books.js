const getBooks = async() => {
    const url = "https://vfisher084.github.io/csce242/json/json-books.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log("error");
    }
}

const getBookIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

const showBooks = async() => {
    const books = await getBooks();
    const bookId = getBookIdFromURL();

    if(bookId) {
        const book = books.find(book => book.id == bookId);

        if(book) {
            //book image
            const img = document.querySelector("#book-img img");
            if(img) {
                img.src = book.image;
            }
            //book price
            const price = document.querySelector("#book-info h3");
            if(price) {
                price.textContent = `$${book.price}`;
            }
            //book information
            const bookInfo = document.querySelector("#book-info p:nth-of-type(1)");
            if(bookInfo) {
                bookInfo.innerHTML = `<strong>Title:</strong> ${book.title}
                <br><strong>Author:</strong> ${book.author}`;
            }
            const description = document.querySelector("#book-info p:nth-of-type(2)");
            if(description) {
                //replace new lines with paragraphs for correct formatting
                const formattedDescription = book.description.replace(/\n/g, "<p>");
                description.innerHTML = `<strong>Description:</strong> ${formattedDescription}`;
            }
        }
    }
}

window.onload = showBooks;




