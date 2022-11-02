/*global $ */
(function () {
    'use strict';

    const recipeDiv = $('#recipe');

    function showRecipe(recipe) {
        $(`
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}">
            <h2>Ingredients:</h2>
        `).appendTo(recipeDiv);

        recipe.ingredients.forEach(ingredient => {
            $(`
                <h3>${ingredient}</h3>
            `).appendTo(recipeDiv);
        });
    }

    function clearRecipe(){
        recipeDiv.empty();
    }

    $('#shnitzel').change(async () => {
        if(recipeDiv) {
            clearRecipe();
        }
        try {
            const response = await fetch('shnitzel.json');
            const shnitzel = await response.json();
            showRecipe(shnitzel);
        }
        catch (e) {
            console.log(e.message);
        }
    });

    $('#fries').change(async () => {
        if (recipeDiv) {
            clearRecipe();
        }
        try {
            const response = await fetch('fries.json');
            const fries = await response.json();
            showRecipe(fries);
        }
        catch (e) {
            console.log(e.message);
        }
    });

    $('#greenBeans').change(async () => {
        if (recipeDiv) {
            clearRecipe();
        }
        try {
            const response = await fetch('greenBeans.json');
            const greenBeans = await response.json();
            showRecipe(greenBeans);
        }
        catch (e) {
            console.log(e.message);
        }
    });

})();