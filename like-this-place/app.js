Person = class {
  constructor(name) {
    this.name = name
    this.friends = []
    this.locations = []

  }
  getFriend(newFriend) {
    document.write('<div class="friend">'+newFriend.name+'</div>')
    this.friends.push(newFriend)
    // newFriend.friends.push(this) fügt this direkt zur anderen Freundeliste hinzu
    // console.log(this.name + ' ist jetzt mit ' + newFriend.name + ' befreundet');
  }
  likeLocation(location) {
    location.lovers.push(this)
    this.locations.push(location)
  }
}

Location = class {
  constructor(name) {
    this.name = name
    this.lovers = []
  }
}


severine = new Person('Severine')
tim = new Person('Tim')
leila = new Person('Leila')
noemi = new Person('Noemi')
luca = new Person('Luca')

severine.getFriend(tim)
severine.getFriend(leila)
severine.getFriend(noemi)
severine.getFriend(luca)

neukoelln = new Location('Neukoelln')
richardplatz = new Location('Richardplatz')

severine.likeLocation(neukoelln)

tim.likeLocation(richardplatz)

console.log(neukoelln);