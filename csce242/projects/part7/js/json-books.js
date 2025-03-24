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
            //book reviews
            const reviews = document.querySelector("#reviews");
            if(reviews) {
                book.reviews.forEach(review => {
                    const p = document.createElement("p");
                    p.textContent = review;
                    reviews.append(p);
                });
            }
            //available quantity
            const quantity = document.querySelector("#quantity");
            if(quantity) {
                quantity.textContent = `Quantity Available: ${book.quantity}`;
            }
            //available formats
            const formats = document.querySelector("#format");
            if(formats) {
                
                    formats.textContent = `Available Formats: ${book.format}`;
            }
            //Open Library iframe for similar books
            const similarBooksSection = document.querySelector("#similar-books");
            if(similarBooksSection) {
                similarBooksSection.innerhtml = "";

                if(book.isbn) {
                    const iframe = document.createElement("iframe");
                    iframe.src = `https://openlibrary.org/isbn/${book.isbn}`;
                    iframe.width = "80%";
                    iframe.height = "300px";
                    iframe.style.border = "none";
                    similarBooksSection.appendChild(iframe);
                }
                else {
                    similarBooksSection.innerHTML= "<p>No similar books available.</p>";
                }
            }
        }
    }
}

window.onload = showBooks;




