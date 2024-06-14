// 1. User information

const userName = 'Futurenow'
const fullName = 'MartyMacfly'
const age = 25
const isStudent = true 

// 2. Adrees
const adress ={
    street: '421 boolean valley',
    city: 'Detroit',
    state: 'Michigan',
    zipCode: 45876
}

// 3 hobbies
const Hobbies = ['Coding', 'Reading', 'Gaming']

// 4. Generating text perzonalized

const perzonalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old. I live in the state ${adress.state}, in the city  ${adress.city} and in the ${adress.street}
I love ${Hobbies.join(', ')}
Followme for adventures`

console.log(perzonalizedBio)