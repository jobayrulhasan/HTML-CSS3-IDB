/*-------------Literal pattern-------------*/
var aeroplane = {
    year: 2000,
    make: 'Airbus',
    capacity: 300,
    engine : 2,
    window : 25,
    pilot  : 3,
    airHostage: 8,
    model: 'Ab-2837',
    getInfo: function () {
        return 'Aeroplane: ' + this.make + ' ' + this.year + ' ' + this.model + ' '+this.capacity+' '+this.engine+' '+this.window+' '+this.pilot+' '+this.airHostage;
    }
};
console.log(aeroplane.getInfo());
document.getElementById("heading").innerHTML=("Aeroplane details(Literal pattern)");
document.getElementById("demo").innerHTML="Plane name: "+aeroplane.make + '<br>'+"Model : "+aeroplane.model+'<br>'+"Manufacturaing year: "+aeroplane.year+' '+'Last'+'<br>'+"Number of Engine: "+aeroplane.engine+'<br>'+"Passanger capacity: "+aeroplane.capacity+'<br>'+"Number of window: "+aeroplane.window+'<br>'+"Number of pilot: "+aeroplane.pilot+'<br>'+"Number of air host: "+aeroplane.airHostage;

/*-------------Dynamic pototype object--------------*/

//Define a functional object 
var Animal = function (name,age) {
    this.name = name;
    this.age = age;

};
Animal.prototype.getName = function () {
    return this.name;
};
Animal.prototype.getAge = function () {
    return this.age;
};

// object Create
var animalName = new Animal("Horse",10);
console.log(animalName.getName());
console.log(animalName.getAge());

Animal.prototype.showAnimalName = function (){
    console.log('This animal name is ',this.getName());
    console.log('This animal age is ',this.getAge());
    document.getElementById("demo1").innerHTML="Animal name is : "+animalName.name + "<br>"+ "Age is : "+ animalName.age;
};
animalName.showAnimalName();
document.getElementById("heading1").innerHTML="Dynamic pototype object";
document.getElementById('demo1').innerHTML= "Animal name is :" +animalName.name + "<br>" + "Age is : " + animalName.age+' '+'years';


/*---------------PotoType Property-----------------*/

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.Hello = function () {
    console.log("output," + this.name);
}

Student.prototype.Print = function () {
    console.log("output1" + this.name, this.age);
}
Student.prototype.Prints = function () {
    console.log( this.age);
}

Student.prototype.email = "jobayeridb20@gmail.com"

var student = new Student("Sharif Uddin", 20);
var student1 = new Student("Amirul Islam", 22);
var student2 = new Student("Abdur Rahman", 25);

document.getElementById("heading2").innerHTML="Prototype Property";
document.getElementById('demo2').innerHTML= "Name :" +student.name + "<br>" + "Age : " +student.age +' '+"years"+ "<br>" + "Email(achived via prototype):"+' '+ student.email;
document.getElementById('demo3').innerHTML= "Name :" +student1.name + "<br>" + "Age : " +student1.age +' '+"years"+"<br>" + "Email(achived via prototype):"+' '+ student1.email;
document.getElementById('demo4').innerHTML= "Name :" +student2.name + "<br>" + "Age : " +student2.age +' '+"years" +"<br>" + "Email(achived via prototype):"+' '+ student2.email;
console.log(student);
console.log(student1);
console.log(student2);

/*-----------Inheritance-----------*/
       
/*Base class*/
function Flowrer(){
    this.name = "Rose"
    this.count = 10;
}

/*derived class*/
function Garden() {
    Flowrer.call(this);
        this.tree = "China rose";
        this.numbers = 1000;
    }

/*Create an object*/
    var garden = new Garden();
    var flowername = garden.name;
    console.log(flowername);
document.getElementById("heading3").innerHTML="Inheritance";
document.getElementById('demo5').innerHTML= "Name :"+' '+garden.name + "<br>" + "Number of flower : "+' '+garden.count +'pcs'+ "<br>" + "Inheritded flower:"+' '+ garden.tree +'<br>'+"Another number: "+garden.numbers+'pcs';


/*--------- JavaScript Namespace--------*/
var car = {
    startEngine: function () {
        console.log("Car started");
    }
}
var bike = {
    startEngine: function () {
        console.log("Bike started");
    }
}
car.startEngine();
bike.startEngine();


/*------------------ Thank you sir-----------------*/