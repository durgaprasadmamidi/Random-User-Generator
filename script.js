function showSpinner(){
    let div = document.querySelector('.spinner');
    div.classList.remove('hidden');
}

function hideSpinner(){
    let div = document.querySelector('.spinner');
    div.classList.add('hidden');
}

function getRandomUser(){
    showSpinner();
    fetch('https://randomuser.me/api/').
        then((response)=>response.json()).
        then((jsonData)=>jsonData.results[0]).
        then((user)=>{
            let p = document.querySelectorAll('.text-xl');
            p[0].textContent = `Name: ${user.name.title}  ${user.name.first} ${user.name.last}`;
            p[1].textContent = `Email: ${user.email}`;
            p[2].textContent = `Phone: ${user.phone}`;
            p[3].textContent = `Location: ${user.location.city} ${user.location.country}`;
            p[4].textContent = `Age: ${user.dob.age}`;
            document.querySelector('img').src = user.picture.large;
            if(user.gender === 'male'){
                document.body.style.backgroundColor = 'steelblue';
            }
            else{
                document.body.style.backgroundColor = 'rebeccapurple';
            }
            hideSpinner();
        });
}
    let btn = document.getElementById('generate')
    btn.addEventListener('click',getRandomUser)
