// 1.
class Animal{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
        getName(){
            return this.name;
        }
        getWeight(){
            return this.weight;
        }
       
        setName(name){
            this.name = name;
        }
        setWeight(weight){
            this.weight = weight;
        }
        toString(){
            return `Nó ${this.name} và cân nặng là ${this.weight}`
        }
    }

    let objAnimal1 = new Animal('Elephant', 45.6);
    console.log(objAnimal1.toString());

    let objAnimal2 = new Animal('Cat', 12);
    objAnimal2.setName('Mouse');
    console.log(objAnimal2.name)
    
    

