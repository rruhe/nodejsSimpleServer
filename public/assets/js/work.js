console.log("js file at the end of the body loaded");

(function generateDomElement() {
    let para = document.createElement("P");
    para.innerHTML = 'Stuff genareted by js';
    para.setAttribute("style", "color:red");
    para.style.backgroundColor = "yellow";
    para.style.fontFamily = "Impact";
    para.style.fontSize = "1.3rem";
    document.getElementsByTagName("div")[0].appendChild(para); 
})()


class SuperHero {
    constructor (name, alter) {
        this._name = name;
        this._alter = alter;
      }

      getAlter() {
        return this._alter;
      }
      getName() {
        return this._name;
      }

      setNewName () {
        this._name += " HERO";
      }
}
  
let heroOfTheDay = new SuperHero( "Reimund", 58);
let alter = heroOfTheDay.getAlter();

heroOfTheDay.setNewName();
console.log(heroOfTheDay.getName());
console.log(heroOfTheDay.name);

//   console.log(reimundsAlter);

