// const categoriesItemsEl = document.querySelectorAll('.item');

// // 1)
// const countCategories = function (categories) {
//     console.log(`Number of categories: ${categories.length}`);
// };

// countCategories(categoriesItemsEl);

// // 2)
// const findCategoryWithElements = function (categories) {
//     for (const category of categories) {
//         console.log(`Category: ${category.firstElementChild.textContent}`);
//         console.log(`Elements: ${category.lastElementChild.children.length}`);
//     };
// };

// findCategoryWithElements(categoriesItemsEl);

// ============================

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списку ${items.length} категорії:`);

items.forEach(node => {
    const h2 = node.querySelector('h2');
    const nodeItems = node.querySelectorAll('li');
    console.log(` - категорія ${h2.textContent} (кількість елементів: ${nodeItems.length})`);
});