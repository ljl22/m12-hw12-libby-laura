//classes are object making machines, create parent class
class Desserts {
  constructor(type, calories) {
    this.name = type;
    this.calories = calories;
  }
}

// create child class ClassName
class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
    //this.includeSpoon(console.log('Here is your spoon!')) = include;
    this.includeSpoon = function () {
      console.log('Here is your spoon!');
  }
}

//give above properities a value by creating a variable (not creating another class)
const vanillaIceCream = new IceCream('ice cream', '340', 'vanilla', '3');
console.log(vanillaIceCream);
