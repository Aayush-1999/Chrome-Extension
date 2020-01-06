
window.onload = function(){
    fetch('https://uinames.com/api/?ext')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            fillData(data);
        })
        .catch(function (err) {
            console.log(err);
        });
};

function fillData(data){
    document.getElementById("image").src=data.photo;
    document.getElementById("name").innerHTML="Name : "+data.name+ " " + data.surname;
    document.getElementById("gender").innerHTML="Gender : "+data.gender;
    document.getElementById("phone").innerHTML="Phone : "+data.phone;
    document.getElementById("email").innerHTML="Email : "+data.email;
    document.getElementById("birthday").innerHTML="Birthday : "+data.birthday.dmy;
    document.getElementById("region").innerHTML="Region : "+data.region;
}