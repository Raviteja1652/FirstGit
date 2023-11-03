var form = document.getElementById('thisForm');
var list = document.getElementById('thisList');
form.addEventListener('submit', addUser);

function editAndDelete(param, ItemId){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(`${param.userName} : ${param.emailId}`))
    
    var del = document.createElement('button')
    del.className = 'details'
    del.textContent = 'delete'
    del.dataset.id = ItemId
    li.appendChild(del)

    var edit = document.createElement('button')
    edit.textContent = 'Edit'
    li.appendChild(edit)

    list.appendChild(li)

    del.onclick= () => {
        const itemId = del.dataset.id
        list.removeChild(li)
        axios.delete(`https://crudcrud.com/api/aae705730af745f29aeeb7765d4a1863/bookingData/${itemId}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err)) 
    }
    
    edit.onclick =()=>{
        list.removeChild(li)        
        document.getElementById('name').value = param.userName
        document.getElementById('email').value = param.emailId
        axios.delete(`https://crudcrud.com/api/aae705730af745f29aeeb7765d4a1863/bookingData/${ItemId}`
        /*, {  // before it was put. but its not working propery so changed to delete
            userName : document.getElementById('name').value,
            emailId : document.getElementById('email').value
        }*/
        )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    // return li;
}

function addUser(e){
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    let myObj = {
        userName : name,
        emailId : email
    };
    axios.post('https://crudcrud.com/api/aae705730af745f29aeeb7765d4a1863/bookingData', myObj)
        .then((response) => {
            console.log(response.data)
            editAndDelete(myObj, response.data._id)
        })
        .catch((err) => {
            console.log(err)
            document.body.innerHTML = document.body.innerHTML + '<h4>something went wrong</h4>'
        }
    )
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/aae705730af745f29aeeb7765d4a1863/bookingData')
        .then((res) => {
            console.log(res.data)
            res.data.forEach((item) => editAndDelete(item, item._id))
        })
        .catch((err) => console.log(err)) 
});
