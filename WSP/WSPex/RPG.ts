// Declaration of Class and its methods
class Player {
  private strength: number;
  private name: string;

  constructor(strength: number, name: string) {
    this.strength = strength;
    this.name = name;
  }

  attack(monster: Monster) {
    if (Math.floor(Math.random() * 10) % 4 == 0) {
      Math.random() < 0.25;
      let damage: number = this.strength * 2;
      monster.injure(damage);
      console.log(
        `Player ${this.name} attacks a monster (HP: ${monster.hp}) [CRITICAL]`
      );
    } else {
      let damage: number = this.strength;
      monster.injure(damage);
      console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp})`);
    }
  }

  gainExperience(exp: number) {}
}

class Monster {
  hp: number;

  constructor() {
    this.hp = 100;
  }
  injure(damage: number) {
    this.hp -= damage;
  }
}

// Invocations of the class and its methods
const player = new Player(20, "Peter");
const monster = new Monster();

while (monster.hp > 0) {
  player.attack(monster);
  console.log(monster);
}
