const apiUrl = 'http://localhost:3000/books'
const newBook = {
    'title': 'mastering javascript',
    'author': 'John David',

}

await fetch(apiUrl, {
    method:"POST",
    body:JSON.stringify(newBook)
})