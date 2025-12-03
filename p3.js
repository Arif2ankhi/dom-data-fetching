async function getEmail(id = 1){
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    // console.log(apiUrl );
    const response = await fetch(apiUrl)
    const data = await response.json()
    return  data.email
}

function getEmail2(id=1){
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
let email =''
fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
    email = data
})
return email;

}

console.log( await getEmail(2));