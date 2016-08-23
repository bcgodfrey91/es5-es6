class Demo {
  constructor(wowString) {
    this.wow = wowString
  }

  printWow() {
    console.log(`I am printing ${this.wow}`)
  }
}

const d = new Demo('wow')

d.printWow()

// regular old functions below

// let is mutable == you can change it
// EX: let ok = "ok"
//    ok = "wow"

// const cannot be changed or modified
//typically your functions will be constants
const hello = () => {
  console.log('sah duh')
}

const hello2 = message => {
  console.log(message)
}

const hello3 = (message, partingMessage) => {
  console.log(`${message} and say goodbye like ${partingMessage}`)
}

hello()
hello2('sah duhhhhh')
hello3('sah', 'later')


const someArray =  [1, 2, 3, 4, 5, 6, 7]

someArray.forEach(element => {
  console.log(element)
})

module.exports = Demo
