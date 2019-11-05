const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')

const stuffToDoAfterLoadingDataBase = (err, loadedFile) => {
  if (err) {
    console.log('hey, an error occured', err)
    return
  }
  console.log('hello')

  const wtmb = Meetup.create(loadedFile)
  const onur = new Person('Juan', 38)
  onur.attend(wtmb)
  wtmb.printAttendeeNames()
  console.log(wtmb.name)
}

Database.load('meetup.json',stuffToDoAfterLoadingDataBase)
console.log('am i the last ?')




// const loadedFile = Database.load('meetup.json')


