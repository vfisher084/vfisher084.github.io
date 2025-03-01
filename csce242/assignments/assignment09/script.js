//Pizza class
class Pizza {
    //pizza constructor with 6 attributes
    constructor(name, ingredients, sauce, cheese, price, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }

    //creates an HTML section for the pizza
    getSection() {
        const section = document.createElement("section");
        section.classList.add("pizza-box");
        section.innerHTML = `
            <h3>${this.name}</h3>
            <img src="images/${this.image}" alt="${this.name}" class="pizza-image">
            `;
        section.onclick = () => this.showModal(); //shows modal when pizza is clicked
        return section;
    }

    //creates a modal for the pizza
    showModal() {
        const modal = document.getElementById("pizzaModal");
        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `
            <div class="w3-animate-top modal-content">
                <div id="text-div">
                    <span class="close-btn" onclick="document.getElementById('pizzaModal').style.display='none'">&times;</span>
                    <h4>${this.name}</h4>
                    <p><strong>Ingredients:</strong> ${this.ingredients}</p>
                    <p><strong>Sauce:</strong> ${this.sauce}</p>
                    <p><strong>Cheese:</strong> ${this.cheese}</p>
                    <p><strong>Price:</strong> $${this.price}</p>
                </div>
                <div id="image-div">
                    <img src="images/${this.image}" alt="${this.name}" class="pizza-image">
                </div>
            </div>
            `;
            modal.style.display = "block";
    }
}

//array of 5 pizza instances
const pizzas = [
    new Pizza("Hawaiian", "Ham, Pineapple", "Tomato Sauce", "Mozzarella", 20, "hawaiian.jpg"),
    new Pizza("Buffalo Chicken Ranch", "Chicken, Onions", "Wing Sauce", "Mozzarella", 17, "buffalo-chicken.jpg"),
    new Pizza("Margherita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", 19, "margherita.jpg"),
    new Pizza("Pepperoni", "Pepperoni slices", "Tomato sauce", "Mozzarella", 16, "pepperoni.jpg"),
    new Pizza("Veggie", "Peppers, Olives, Onions", "Tomato Sauce", "Mozzarella", 15, "veggie.jpg")
];

//appending pizzas to the DOM
const main = document.querySelector('main');
const pizzaContainer = document.createElement('div');
pizzaContainer.classList.add('pizza-container');
main.appendChild(pizzaContainer);

pizzas.forEach(pizza => {
    pizzaContainer.appendChild(pizza.getSection());
})

//close modal when clicked outside of it (close button also does this)
window.onclick = (event) => {
    const modal = document.getElementById("pizzaModal");
    if(event.target === modal) {
        modal.style.display = "none";
    }
}