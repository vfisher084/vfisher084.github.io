const getBookCovers = async() => {
    const url = "https://vfisher084.github.io/csce242/json/hp-books.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log("error");
    }
}

const displayBookCovers = async() => {
    const books = await getBookCovers();
}

const sections = document.querySelector("#book img");






