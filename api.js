const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const contain = document.getElementById("contain");
const mealDetailOverlay = document.getElementById("mealDetailOverlay");
const mealDetail = document.getElementById("mealDetail");
const closeOverlay = document.getElementById("closeOverlay");

// Replace 'YOUR_API_KEY' with your actual Spoonacular API key
const API_KEY = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    fetchMeals(query);
});

async function fetchMeals(query) {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    displayMeals(data.results);
}

function displayMeals(meals) {
    contain.innerHTML = ""; // Clear previous results
    meals.forEach(meal => {
        const mealCard = document.createElement("div");
        mealCard.className = "meal-card";
        mealCard.innerHTML = `
            <h3>${meal.title}</h3>
            <img src="${meal.image}" alt="${meal.title}">
            <button onclick="fetchMealDetails(${meal.id})">View Ingredients</button>
        `;
        contain.appendChild(mealCard);
    });
}

async function fetchMealDetails(mealId) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${mealId}/information?apiKey=${API_KEY}`);
    const meal = await response.json();
    showMealDetails(meal);
}

function showMealDetails(meal) {
    mealDetail.innerHTML = `
        <h2>${meal.title}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${meal.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
        </ul>
    `;
    mealDetailOverlay.style.display = "flex"; // Show overlay
}

closeOverlay.addEventListener("click", () => {
    mealDetailOverlay.style.display = "none"; // Hide overlay
});
