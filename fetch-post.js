const apiUrl = 'http://localhost:3000/books'
const newBook = {
    'title': 'mastering javascript',
    'author': 'voxov jelanasky',
}

await fetch(apiUrl, {
    method:"POST",
    body:JSON.stringify(newBook)
})