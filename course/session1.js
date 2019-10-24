//var sevi = {
//    name: 'Severine',
//    age: 33,
 //   height: 166,
//    greet(person){
 //       console.log('Hello ' + person.name + ", my name is " + this.name)
//    }
   
//}

//var christoph = {
//    name: 'Christoph',
 //   age: 31,
//    height: 181
//}

Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.meetups = []
  }

  greet(person){
    console.log('Hello ' + person.name + ", my name is " + this.name)
  }

  attend(meetup){
    this.meetups.push(meetup)
    meetup.attendees.push(this)
  }
}

sevi = new Person("Severine", 33)
christoph = new Person("Christoph", 31)


Meetup = class {
  constructor(name) {
    this.name = name
    this.attendees = []
  }
  printAttendeeNames(){
    this.attendees.forEach(printName)
  }
}

printName = person => console.log(person.name)

wtmb = new Meetup('Women Techmakers Berlin')
coolesMeetup = new Meetup('Cooles Meetup')


sevi.attend(wtmb)
christoph.attend(wtmb)
wtmb.printAttendeeNames()
