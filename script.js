//complete this code
class Animal{
    constructor(species){
        this.species = species
    }
    makeSound(){
        return 'The '+ this.species + ' makes a sound.'
    }
}

class Cat extends Animal{
    constructor(species){
        super(species)
    }
    purr(){
        return 'purr'
    }
}

class Dog extends Animal{
    constructor(species){
        super(species)
    }

    bark(){
        return 'woff'
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
