export class Hero {
    id: number;
    name: string;

    constructor(name) {
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
  }

  let hero = new Hero('krunal');
  console.log(hero.myName());
  console.log(hero.myName());
  console.log(hero.myName());