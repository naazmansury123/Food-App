async function fetchMeals(query) {
    const url = query 
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}` 
        : 'https://www.themealdb.com/api/json/v1/1/search.php?s';
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals; // Return the meals array
}

function showAlert(message) {
    alert(message);
}

async function loadMeals() {
    try {
        const meals = await fetchMeals(); // Fetch all meals
        if (meals) {
            meals.forEach(meal => {
                meal.strPrice = Math.floor(Math.random() * 20); // Random price between 0 and 19
            });

            const highCostMeals = meals.filter(meal => meal.strPrice > 10); // High-cost meals
            const lowCostMeals = meals.filter(meal => meal.strPrice <= 10); // Low-cost meals
            
            displayMeals('highCostContainer', highCostMeals);
            displayMeals('lowCostContainer', lowCostMeals);
        }
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

function displayMeals(containerId, meals) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
            <p>${meal.strInstructions}</p>
            <p>Price: $${meal.strPrice}</p>
        `; // Display meal name, image, instructions, and price
        container.appendChild(mealDiv);
    });
}

async function searchMeals() {
    const query = document.getElementById('search-input').value; // Get the search query
    const meals = await fetchMeals(query); // Fetch meals based on the search query
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    searchResultsContainer.innerHTML = ''; // Clear previous search results
    
    if (meals) {
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                <p>${meal.strInstructions}</p>
                <p>Price: $${meal.strPrice}</p>
            `; // Display meal name, image, instructions, and price
            searchResultsContainer.appendChild(mealDiv);
        });
    } else {
        searchResultsContainer.innerHTML = '<p>No meals found.</p>'; // Message when no meals found
    }
}

// Adding event listeners to buttons
document.addEventListener('DOMContentLoaded', function () {
    const highCostButton = document.getElementById('high-cost-button');
    const lowCostButton = document.getElementById('low-cost-button');
    const searchButton = document.getElementById('search-button');

    // Load meals when the page is loaded
    loadMeals();

    if (highCostButton) {
        highCostButton.addEventListener('click', function() {
            showAlert("You clicked on High-Cost!");
            document.getElementById('highCostContainer').style.display = 'block'; // Show high-cost meals
            document.getElementById('lowCostContainer').style.display = 'none'; // Hide low-cost meals
            document.getElementById('searchResultsContainer').style.display = 'none'; // Hide search results
        });
    }

    if (lowCostButton) {
        lowCostButton.addEventListener('click', function() {
            showAlert("You clicked on Low-Cost!");
            document.getElementById('lowCostContainer').style.display = 'block'; // Show low-cost meals
            document.getElementById('highCostContainer').style.display = 'none'; // Hide high-cost meals
            document.getElementById('searchResultsContainer').style.display = 'none'; // Hide search results
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            searchMeals(); // Call searchMeals function on button click
            document.getElementById('highCostContainer').style.display = 'none'; // Hide high-cost meals
            document.getElementById('lowCostContainer').style.display = 'none'; // Hide low-cost meals
        });
    }
});
