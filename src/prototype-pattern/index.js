/**
 * This Animal function is called as constructor function
 * Every constructor function is treaded as Class and 
 * can be written as Pascal Case. 
 */
function Animal() {

}

/** public variable */
Animal.prototype.type = 'Animal: ';

/** public function */
Animal.prototype.walk = function () {
    this.log(' is walking');
}

/** public function */
Animal.prototype.talk = function () {
    this.log(' is talking');
}

/** public function */
Animal.prototype.log = function (msg) {
    console.log(this.type + msg);
}

var animal = new Animal(); // we have to use new to create instance
animal.walk();
animal.talk();