"use strict";
let array = [];
class Animal {
    constructor(name, gender, size, age, vaccine, image) {
        this.image = image;
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        array.push(this);
    }
    display() {
        return `             
        <div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
                <div class="card-body">
                    <h5 class="card-title text-center bg-dark text-light text1">${this.name}</h5>
                    <p class="card-text text1">Gender : ${this.gender}</p>
                    <p class="card-text text1">Age :  ${this.age}</p>
                    <p class="card-text text1">Size :  ${this.size}</p>
                    <a href="#" class="d-grid btn rounded-pill d-flex justify-content-center gap-3 align-items-center text1 fs-3 btn-color text-light  bg-${this.vaccine ? "success" : "danger"}"> Vaccine ${this.vaccine ? `<i class="fa-solid fa-vial-circle-check"></i>` : `<i class="fa-solid fa-vial-virus"></i>`}</a>
                </div>
            </div>
        </div> 
        `;
    }
}
class Cat extends Animal {
    constructor(name, gender, size, age, vaccine, image, breed, furcolor, URLbreed) {
        super(name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.furcolor = furcolor;
        this.URLbreed = URLbreed;
    }
    display() {
        return `             
        <div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
                <div class="card-body">
                <h5 class="card-title text-center bg-dark text-light text1">${this.name}</h5>
                <p class="card-text text1">Gender : ${this.gender}</p>
                <p class="card-text text1">Age :  ${this.age}</p>
                <p class="card-text text1">Size :  ${this.size}</p>
                <a href="#" class="d-grid btn rounded-pill d-flex justify-content-center gap-3 align-items-center text1 fs-3 text-light bg-${this.vaccine ? "success" : "danger"}"> Vaccine ${this.vaccine ? `<i class="fa-solid fa-vial-circle-check"></i>` : `<i class="fa-solid fa-vial-virus"></i>`}</a>
                    <p class="card-text text1">Breed : ${this.breed}</p>
                    <p class="card-text text1">Fur color : ${this.furcolor}</p>
                    <p class="card-text text1">Breed Info : <a href=" # " target='_blank'>${this.URLbreed} </a></p>
                </div>
            </div>
        </div> 
        `;
    }
}
class Dog extends Animal {
    constructor(name, gender, size, age, image, breed, training, vaccine) {
        super(name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `             
        <div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
                <div class="card-body">
                <h5 class="card-title text-center bg-dark text-light text1">${this.name}</h5>
                <p class="card-text text1">Gender : ${this.gender}</p>
                <p class="card-text text1">Age :  ${this.age}</p>
                <p class="card-text text1">Size :  ${this.size}</p>
                <a href="#" class="d-grid btn rounded-pill d-flex justify-content-center gap-3 align-items-center text1 fs-3 text-light  bg-${this.vaccine ? "success" : "danger"}"> Vaccine ${this.vaccine ? `<i class="fa-solid fa-vial-circle-check"></i>` : `<i class="fa-solid fa-vial-virus"></i>`}</a>
                    <p class="card-text text1">Breed : ${this.breed}</p>
                    <p class="card-text text1">Training :  ${this.training ? "Yes" : "No"}</p>
                </div>
            </div>
        </div> 
        `;
    }
}
new Animal("Bacon", "male", "small", 3, true, "./images/pic7.jpg");
new Animal("Spike", "female", "small", 1, false, "./images/pic8.jpg");
new Cat("Meowley Cyrus", "female", "small", 2, false, "./images/pic1cat.jpg", "Siemese", "Ginger", "www.siamese.com");
new Cat("Feline Dion", "male", "medium", 3, true, "./images/pic2cat.jpg", "Angera", "Tiger", "www.angera.com");
new Cat("Oscar", "male", "big", 4, false, "./images/pic3cat.jpg", "Siemese", "Gold", "www.siamese.com");
new Cat("Sam", "male", "big", 5, true, "./images/pic4cat.jpg", "Angera", "Black and White ", "www.siamese.com");
new Dog("Max", "male", "small", 1, "./images/pic5dog.jpg", "Pug", false, true);
new Dog("Cooper", "male", "small", 2, "./images/pic6dog.jpg", "Husky", true, false);
document.querySelector(".sortdown").addEventListener("click", agesort);
function agesort() {
    array.sort(function (min, max) {
        return min.age - max.age;
    });
    document.getElementById("cartanimal").innerHTML = "";
    allclasses();
}
;
document.querySelector(".sortup").addEventListener("click", agesort1);
function agesort1() {
    array.sort(function (min, max) {
        return max.age - min.age;
    });
    document.getElementById("cartanimal").innerHTML = "";
    allclasses();
}
;
function allclasses() {
    array.forEach((val) => {
        document.getElementById("cartanimal").innerHTML += val.display();
    });
}
allclasses();
