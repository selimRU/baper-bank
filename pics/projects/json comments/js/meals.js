const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeals(data.meals))
}
 const displaymeals = (meals) => {
      const mealContainer = document.getElementById('meal-container');
      mealContainer.innerHTML = ``;
      meals.forEach(meal => {
        console.log(meal);
      const mealDiv = document.createElement('meals');
      mealDiv.classList.add('col');
      mealDiv.innerHTML =`
      <div onclick="displayDetail(${meal.idMeal})" class="card">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
    </div>
      
      `;
      mealContainer.appendChild(mealDiv);
    });
}
 const searchMeal = () => {
  const searchField = document.getElementById('search-food');
  const searchFieldValue = searchField.value;
  loadMeals(searchFieldValue);
  searchField.value = '';
 }
 const loadDetail = (idMeal) => {
  console.log(idMeal);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetail(data.meals[0]))
 }
 const displayDetail = (meal) =>{
  const phDetailContainer = document.getElementById('phonedetail-container');
  phDetailContainer.innerHTML = ``;
  const phDetailDiv = document.createElement('phdetail-div');
      phDetailDiv.classList.add('card');
      phDetailDiv.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      `;
      phDetailContainer.appendChild(phDetailDiv);
 }

loadMeals('');
