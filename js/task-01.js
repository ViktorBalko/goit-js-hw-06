const categoriesRef = document.querySelector("#categories"); 
const itemsRef = categoriesRef.children;

console.log(`Numbers of categories: ${itemsRef.length}`);
// console.log(itemsRef);

const arrayCat = Array.from(itemsRef);
// console.log(arrayCat);

const result = arrayCat.forEach((el)  => {
 let titleCat = el.firstElementChild.textContent;
 let elCount = el.lastElementChild.children.length;

 console.log(`Category: ${titleCat} \n
 Elements: ${elCount}
 `);
})