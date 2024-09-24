let api = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
let mealsData = [];

// Sample restaurant data
const restaurantData = {
    "Id": "0",
    "URL": "https://www.zomato.com/ncr/plum-by-bent-chair-aerocity-new-delhi",
    "Restaurant_Name": "Plum By Bent Chair",
    "Address": "The Walk, Worldmark 2, Aerocity, New Delhi",
    "location": "Aerocity",
    "City": "New Delhi",
    "star_rating": "4.6",
    "Cuisines": "Asian",
    "Phone_Number": "011 61495178",
    "offer": "",
    "Cost_for_two": "₹1800",
    "Restaurant_Type": "",
};

// Function to fetch meals based on the search input
const requestApi = async (meal) => {
    try {
        const response = await fetch(api + meal);
        const allData = await response.json();
        mealsData = allData.meals;
        displayData(mealsData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Function to display fetched meals
const displayData = (data) => {
    const contain = document.getElementById('contain');
    contain.innerHTML = ""; 

    if (data && data.length > 0) {
        data.slice(0, 12).forEach((item, index) => {
            contain.innerHTML += `
                <div class="meal-card">
                    <img src="${item.strMealThumb}" alt="${item.strMeal}" onclick="showMealDetail(${index})">
                    <h1>${item.strMeal}</h1>
                </div>`;
        });
    } else {
        contain.innerHTML = "<p>No meals found.</p>";
    }
};

// Function to show meal details
const showMealDetail = (index) => {
    const meal = mealsData[index];
    const mealDetail = document.getElementById('mealDetail');

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]; // Accessing ingredient
        const measure = meal[`strMeasure${i}`]; // Accessing measure
        if (ingredient) ingredients.push(`${ingredient} - ${measure}`); // Template literals
    }

    mealDetail.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>${meal.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>${ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Restaurant Information:</h3>
        <p><strong>Name:</strong> ${restaurantData.Restaurant_Name}</p>
        <p><strong>Address:</strong> ${restaurantData.Address}</p>
        <p><strong>Location:</strong> ${restaurantData.location}, ${restaurantData.City}</p>
        <p><strong>Star Rating:</strong> ${restaurantData.star_rating}</p>
        <p><strong>Cuisines:</strong> ${restaurantData.Cuisines}</p>
        <p><strong>Phone Number:</strong> ${restaurantData.Phone_Number}</p>
        <p><strong>Cost for Two:</strong> ${restaurantData.Cost_for_two}</p>
        <p><a href="${restaurantData.URL}" target="_blank">View on Zomato</a></p>
    `;

    // Display the meal details
    document.getElementById('mealDetailOverlay').style.display = 'flex';
    
    // Hide the main meal display
    document.getElementById('contain').style.display = 'none';
};

// Close overlay functionality
document.getElementById('closeOverlay').addEventListener('click', () => {
    document.getElementById('mealDetailOverlay').style.display = 'none';
    document.getElementById('contain').style.display = 'flex'; // Show the main meal display again
});

// Search button functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const meal = document.getElementById('search').value.trim();
    if (meal) {
        requestApi(meal);
    } else {
        alert("Please enter a meal name to search!");
    }
});

// Load default meals on page load
const loadDefaultMeals = async () => {
    const response = await fetch(api + "chicken");
    const allData = await response.json();
    mealsData = allData.meals;
    displayData(mealsData);
};

loadDefaultMeals();
