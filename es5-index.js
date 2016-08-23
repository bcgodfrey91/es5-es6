var Demo = function(wowString) {
  this.wow = wowString
}

Demo.prototype.printWow = function (){
  console.log("I am printing " + this.wow)
}

var d = new Demo('wow')

d.printWow()

// regular old functions below

var hello = function() {
  console.log('sah duh')
}

var hello2 = function(message) {
  console.log(message)
}

var hello3 = function(message, partingMessage){
  console.log(`${message} and say goodbye like ${partingMessage}`)
}

hello()
hello2('sah duhhhhh')
hello3('sah', 'later')

var someArray = [1, 2, 3, 4, 5, 6, 7]

someArray.forEach(function(element){
  console.log(element)
})
