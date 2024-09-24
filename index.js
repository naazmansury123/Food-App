// function GreetPerson(name) {
//     return "hello,"+ name +"!";
// }
// console.log(GreetPerson("naaz"));

// 1 Fibonacci Series:
// function FibonacciNumber(n) {
//     let a = 0;
//     let b = 1;
//     let next;
//     for (let i = 1; i <= n; i++) {
//                console.log(a);
//                next = a+b;
//               a = b;
//                b =next;
//     }
  
// }
// console.log(FibonacciNumber(5));

// 2 string reversal
// function string(n) {
//     let rev = '';
//     for (let i = n.length-1; i>=0; i--) {
//                 rev+=n[i];
//     }
//     return rev;
// }

// console.log(string("naaz"));

// 3 prime number
// function prime(num) {
//     if (num<=1) {
//         return "no"
//     } else {
        
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num%i===0) {
//             return "no"
//         }
        
        
//     }
//     return "yes"
    
// }
// console.log(prime(2));

// 4 array sum

// function sum(n) {
//     let sum = 0;
//     for (let i = 0; i < n.length; i++) {
//         sum+=n[i];        
//     }
//     return sum;
// }
// console.log(sum([1,2,3,4,5]));

// 5 Factorail Number
// function FindFactorail(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact=fact*i;
// }
//     return fact;
// }
// console.log(FindFactorail(12));

//6 fabbonaciNumber
// function Fibonacci(n) {
//     let fab =[0,1];
//     for (let i = 2; i <= n; i++) {
//          fab[i] = fab[i-1] + fab[i-2];       
//     }
//     return fab;
// }
// console.log(Fibonacci(5));
// function add(a,b,c,d) { Factory function
//     return{
//         a:a,
//         b:b,
//         c:c,
//         d:d
//     };
// }
// console.log(add('naaz','city','age','name6'));
// function ari(a,b,num) {
//     function Addition(a,b) {
//          return a+b;
//     }
//     function subtraction(a,b) {
//             return a-b;
//         }
    
//     function Multiplication(a,b) {
//             return a*b;
//     }
//     function Divide(a,b) {
//             return a/b>>0;
//     }
//     function Modules(a,b) {
//             return a%b;   
// }
// if (num==="+") {
//     return Addition(a,b);
// }
// else if (num==="-") {
//     return (subtraction(a,b));
// }
// else if (num==="/") {
//     return (Divide(a,b));
// }
// else if (num==="*") {
//     return (Multiplication(a,b));
// }
// else if (num==="%") {
//     return (Modules(a,b))
// }
// else{
//     return 'invelid';
// }
// }
// console.log(ari(2,4,"+"));
// console.log(ari(3,2,"-"));



// function atm(amount) {
//          let  notes2000 = Math.floor(amount/2000);
//          amount         = amount%2000;

//          let notes1000  = Math.floor(amount/1000);
//          amount = amount%1000;

//          let notes500   = Math.floor(amount/500);
//          amount = amount%500;

//          let notes200 = Math.floor(amount/200);
//          amount = amount%200;

//          let notes100  = Math.floor(amount/100);
//          amount = amount%100;

//          let notes50 = Math.floor(amount/50);
//          amount = amount%50;

//          let notes20 = Math.floor(amount/20);
//          amount = amount%20;

//          let notes10 = Math.floor(amount/10);
//          amount = amount%10;
//          return{
//             "2000":notes2000,
//             "1000":notes1000,
//             "500":notes50,
//             "200":notes200,
//             "100":notes100,
//             "50":notes50,
//             "20":notes10,
//             "10":notes10,
//             'reamaining notes':amount
//          }
// }
// console.log(atm(10001));


// function greeting(name,callback) {
//  console.log(`hello,${name}!`)
//    callback();

// }
// function say() {
//  console.log("Goodbye!");  
// }
// greeting('alice',say);

// function set(num,deley,callback) {
//    setTimeout(()=>{
//       console.log(num);
//       callback
//    },deley)
// }
// set(1000,()=>console.log('massage deleyed'));
// semantic functionvalue
// falsy value


// function even(num,callback) {
//    let sum =0;
//       for (let i = 1; i <= num; i++) {
//          if (num%i===0) {
//             return sum+=i;      
//       }
//    }
//    callback(sum);
// }
// function odd(num,callback) {
//    let fact = 0;
//       for (let i = 0; i <= num; i++) {
//          if (num%i===0) {  
//             fact+=i;
//       }
//    }
//    callback(fact);
// }
// function sum(num) {
//    if (num%2===0) {
//       even(num, (result) => {
//          console.log("Sum of factors for even number:", result);
//       });
//    } else {
//       odd(num, (result) => {
//          console.log("Sum of factors for odd number:", result);
//       });
//    }
// }
// sum(4);

// function sum(num,num1,callback) {
//  return callback(num,num1);  
// }
// console.log(sum(10,5,(a,b)=>a+b));

// function GreetPerson(Name,callback) {
//    console.log(`hello,${Name}`)
//    ;callback();
// }
// function Bye(name,callback) {
//    console.log("goodbye!")
// }
// GreetPerson('Naaz',Bye);
// let x = [];
// let y = [];
// let z = x+y;
// console.log(typeof z);
// let city = "NEW YORK";
//     let kfclocation = 10;
//     console.log(`city:${city},KFC Location:${kfclocation}`);
// const Name = prompt("Enter Your Name:");
// console.log("Hello",Name);














document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let mealsData = [];

    // Fetch meals from the API
    function fetchMeals(query = '') {
        fetch(apiURL + query)
            .then(response => response.json())
            .then(data => {
                mealsData = data.meals || [];
                simulateCostsAndDisplay(mealsData);
            })
            .catch(error => {
                document.getElementById('meals-container').innerHTML = `<p>Error: ${error.message}</p>`;
            });
    }

    // Simulate cost for meals and display
    function simulateCostsAndDisplay(meals) {
        meals.forEach(meal => {
            meal.strCost = Math.floor(Math.random() * 5000) + 100; // Simulated cost
        });
        displayMeals(meals);
    }

    // Display meals
    function displayMeals(meals) {
        const mealsContainer = document.getElementById('meals-container');
        mealsContainer.innerHTML = '';

        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('meal-item');

            mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-img">
                <h3 class="meal-name">${meal.strMeal}</h3>
                <p class="meal-cost">Cost: ₹${meal.strCost}</p>
                <div class="meal-cost-rating">
                    <div class="rating-input">
                        ${createStarRatingHTML()} <!-- Star Rating HTML -->
                    </div>
                    <button class="save-button">Save</button>
                </div>
            `;

            // Star click event
            const starInputs = mealDiv.querySelectorAll('.rating-input input');
            starInputs.forEach(star => {
                star.addEventListener('click', (event) => {
                    event.stopPropagation();
                    const ratingValue = event.target.value;
                    setStarColor(mealDiv, ratingValue);
                });
            });

            // Save button functionality
            mealDiv.querySelector('.save-button').addEventListener('click', () => {
                const cost = meal.strCost;
                const rating = mealDiv.querySelector('.rating-input input:checked')?.value || '0';
                saveMeal(meal.strMeal, cost, rating);
            });

            // Add event listener to view meal details
            mealDiv.addEventListener('click', () => {
                showMealDetails(meal);
            });

            mealsContainer.appendChild(mealDiv);
        });
    }

    // Create Star Rating HTML (5 stars)
    function createStarRatingHTML() {
        let starHTML = '';
        for (let i = 1; i <= 5; i++) {
            starHTML += `<input type="radio" name="rating" value="${i}" id="star${i}">
                         <label for="star${i}" class="star-label">★</label>`;
        }
        return starHTML;
    }

    // Set star color based on the rating value
    function setStarColor(mealDiv, ratingValue) {
        const stars = mealDiv.querySelectorAll('.star-label');
        stars.forEach((star, index) => {
            if (index < ratingValue) {
                star.style.color = 'yellow'; // Highlight stars up to selected value
            } else {
                star.style.color = ''; // Reset the color for unselected stars
            }
        });
    }

    // Save meal data to localStorage
    function saveMeal(name, cost, rating) {
        const savedMeals = JSON.parse(localStorage.getItem('savedMeals')) || [];
        savedMeals.push({ name, cost, rating });
        localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
        alert(`Saved!\nMeal: ${name}\nCost: ₹${cost}\nRating: ${rating} star(s)`);
    }

    // Show meal details in a larger, centered box
    function showMealDetails(meal) {
        const mealsContainer = document.getElementById('meals-container');
        mealsContainer.innerHTML = '';

        const mealDetailsDiv = document.createElement('div');
        mealDetailsDiv.classList.add('meal-details');
        mealDetailsDiv.style.cssText = 'background-color: white; padding: 40px; max-width: 600px; margin: auto; text-align: center; border-radius: 10px;';

        mealDetailsDiv.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 300px;">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            <p><strong>Ingredients:</strong></p>
            <ul id="ingredients-list"></ul>
            <button id="back-button">Back</button>
        `;

        const ingredientsList = mealDetailsDiv.querySelector('#ingredients-list');
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient} - ${measure}`;
                ingredientsList.appendChild(listItem);
            }
        }

        mealsContainer.appendChild(mealDetailsDiv);

        // Back button functionality
        document.getElementById('back-button').addEventListener('click', () => {
            fetchMeals();
        });
    }

    // Search functionality
    const searchInput = document.getElementById('naaz');
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        fetchMeals(query);
    });

    // API and Home button functionality
    document.getElementById('item2').addEventListener('click', () => {
        fetchPopularDishes(); // Show trending/popular dishes on Home button click
    });

    document.getElementById('iti').addEventListener('click', () => {
        fetchMeals('chicken'); // Fetch meals related to API (chicken as an example)
    });

    // Show popular/trending dishes (simulated data)
    function fetchPopularDishes() {
        const trendingDishes = mealsData.slice(0, 5); // Display first 5 as trending
        displayMeals(trendingDishes);
    }

    // Fetch default meals on page load
    fetchMeals();
});
