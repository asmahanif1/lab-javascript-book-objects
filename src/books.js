// Iteration 1 | Books Array


// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
        language: "English",
        description: `One of Hemingway's most famous works, it tells the story of Santiago...`
       }
   },
   {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
       language: "English",
       description: `This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...`
    }
  
   },
   {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
       language: "English",
       description: `One of the most popular novels in the English language...`
    }
  
   },
   {
    title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
     language: "English",
     description: `Educated is an account of the struggle for self-invention...`
  }
   },
   {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
       language: "English",
       description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
    }
  

   }
    
];






// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} Pages`;

}



// Iteration 3 | Delete Language
// Your code here:

 booksArray.forEach(book=>{
  delete book.details.language;
});





// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(book=>{
  book.readingTime = Math.round((book.pages*500)/90);
});





// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(dictionary) {
  let newBooksArray =[];
  for (var auther in dictionary){
    dictionary[auther].forEach(book=>{
      let  obj1 = {
        title: book[0],
        pages: book[1],
        auther: auther
      }
      newBooksArray.push(obj1);
    }); 
  }
  return newBooksArray;
  }

  const books = booksByAuthor(dictionary);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  let totalPages = 0;
  let totalBooks = 0;
  books.forEach(book=>{
    totalPages = totalPages + book.pages;
    totalBooks++;
  });
  return Math.round(totalPages/totalBooks);
  
}
