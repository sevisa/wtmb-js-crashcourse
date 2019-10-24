// [] = Array
// {} = Object
// () = Function
// "" = String



//Class Person
Person = class {
    constructor(name, isTeacher, isWizard) {
        this.name = name;
        this.isTeacher = isTeacher;
        this.isWizard = isWizard;
    }
  
    join(hogwartsHouse) {
        if (this.isWizard === true){
            this.hogwartsHouse = hogwartsHouse
            hogwartsHouse.members.push(this) 
            return true;
        } else {
            console.log( this.name + ' :Entrance just with magic membercard!')
            return false;
        }
  
    }
  
    bewitch(person){
        if (this.isWizard === true){
            console.log(this.name + ' bewitches ' + person.name)
        } else {
            console.log('Nice try ' + this.name + '. But you are a Muggel, not a Wizard!')
        }
    }
  
  //   win(points, house) {
  //     house.housepoints =  house.housepoints + points;
  //   }
  }
  
  harry = new Person ('Harry Potter', false, true)
  dumbledore = new Person ('Albus Dumbledore', true, true)
  malfoy = new Person ('Draco Malfoy',false, true)
  dudley = new Person ('Dudley Vernon', false, false)
  ron = new Person ('Ron Weasley' , false, true)
  hermione = new Person ('Hermione Granger', false, true)
  snape = new Person ('Severus Snape', true, true)
  minerva = new Person ('Minerva McGonagall', true, true)
  
  
  
  //Class Hogwarts House
  HogwartsHouse = class {
    constructor(name, heraldicAnimal) {
        this.name = name;
        this.heraldicAnimal = heraldicAnimal;
        this.housepoints = 0;
        this.members = []
  
    }
    printMemberNames() {
        console.log ( this.name + ' has these members: ' + this.members[0].name);
  
    }
    
  
  }
  
  gryffindor = new HogwartsHouse('Gryffindor', 'lion')
  ravenclaw = new HogwartsHouse('Ravenclaw', 'eagle')
  slytherin = new HogwartsHouse('Slytherin', 'snake')
  hufflepuff = new HogwartsHouse('Hufflepuff', 'badger')
  
  HatSong = class {
      constructor(name) {
          this.name = name
          this.hatSongs = [] //array
      } 
  }
  
  hatSong1 = new HatSong ('... Hmm. Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There\'s talent, oh my goodness, yes — and a nice thirst to prove yourself, now that\'s interesting... So where shall I put you?...You are a')
  hatSong2 = new HatSong ('Now slip me snug about your ears, I\'ve never yet been wrong, I\'ll have a look inside your mind and tell where you belong!.....You are a')
  hatSong3 = new HatSong ('Now the Sorting Hat is here. And you all know the score: I sort you into Houses. Because that is what I\'m for......You are a')
  
  
  //Class Magic Hat
  MagicalHat = class {
      constructor(name, houses, hatSongs) {
          this.name = name; // String
          this.houses = houses // array
          this.hatSongs = hatSongs //array
      }
  
      chooseHousefor(person) {
          let hatSong = this.chooseHatSong()
          let randomNumber = Math.floor(Math.random() * this.houses.length);
          let house = this.houses[randomNumber]
          let hasJoined = person.join(house)
  
          if(hasJoined) {
              console.log(person.name + '.... ' + hatSong.name + ' ' + house.name + ' !') 
          }
          
      }
  
      chooseHatSong() {
          let randomNumber = Math.floor(Math.random() * this.hatSongs.length);
          return this.hatSongs[randomNumber]
      }
  }
  
  
  sortingHat = new MagicalHat ('Sorting Hat', [gryffindor, ravenclaw, slytherin, hufflepuff],[hatSong1, hatSong2, hatSong3])
  
  
  
  
  
  
  //ACTIONS
  sortingHat.chooseHousefor(snape)
  
  console.log(snape);
  // harry.bewitch(dudley)
  // dudley.bewitch(malfoy)
  // malfoy.win(1, slytherin)
  // harry.join(gryffindor)
  // malfoy.join(slytherin)
  // ron.join(gryffindor)
  // dudley.join(gryffindor)
  // malfoy.win(7, slytherin)
  