const categoriesItemsEl = document.querySelectorAll('.item');

// 1)
const countCategories = function (categories) {
    console.log(`Number of categories: ${categories.length}`);
};

countCategories(categoriesItemsEl);

// 2)
const findCategoryWithElements = function (categories) {
    for (const category of categories) {
        console.log(`Category: ${category.firstElementChild.textContent}`);
        console.log(`Elements: ${category.lastElementChild.children.length}`);
    };
};

findCategoryWithElements(categoriesItemsEl);