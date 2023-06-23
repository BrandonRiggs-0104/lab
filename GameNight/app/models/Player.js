export class Player {
  constructor(name, imageUrl) {
    this.score = 0
    this.name = name
    this.imgUrl = imageUrl
  }
}

  get PlayerStats() {
  let stats = `The new player is ${this.name}, their score is ${this.score}`
  return stats
}