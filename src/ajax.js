import axios from "./axios";

// //1. Use console.log() to output an array with all of your article data from the API
// axios.get("/articles").then( (data) => {
//     console.log(data.data)
// })

//2. Create a new article using axios and then console.log() its ID
// axios.post("/articles", {
//     title: "The truth about Bumble Bees",
//     content: "Are they pawns of the government?",
//     tags: ["bees", "the truth"]
// }).then( (data) => {
//     console.log(data.data.id)
// })

//3.Fetch one of your articles from the API and console.log() it
// axios.get("/articles/34").then( (data) => {
//     console.log(data.data.data);
// })

//4. Add a new tag to one of your articles and console.log() the tags array from the response
// axios.put("/articles/36", {
//     title: "Medieval Hoods: An expose",
//     content: "Why were they so great? And what can the modern hoodie learn from them?",
//     tags: ["hoods", "warmth", "geenland fashion"]  
// }).then( (data) => {
//     console.log(data.data.data.tags)
// })

// 6.Add a comment to an article using axios and console.log() its ID
// axios.post("/articles/34/comments", {
//     email: "bob@beeconspiracies.com",
//     comment: "Bee Illuminati Confirmed"
// }).then( (data) => {
//     console.log(data.data.data.id)
// })

//7.Use console.log() to list all of the comments for one of your articles
// axios.get("/articles/34/comments").then( (data) => {
//     console.log(data.data.data)
// })

//8. Use console.log() to output a list of all the tags
// axios.get("/tags").then( (data) => {
//     console.log(data.data.data)
// })

//9.Try fetching an article with an ID that doesn't exist and console.log() "Not found" when it fails
// axios.get("/articles/35").then( (data) => {
//     console.log(data.data.data);
// }).catch((error) => {
//     console.log(error);
// })

//10.Using console.log() output an array of just the titles of all the articles

// axios.get("/articles").then( (data) => {
//     let articles = data.data.data;
//     let titles = [];
//     articles.map( (article) => { 
//         return titles.push(article.title);
//     })
//     console.log(titles)
// })