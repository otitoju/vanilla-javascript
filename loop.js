//function that return a name
function getName(name){
    return console.log(name + ' how are you')
}
getName('john')

//looping
var list = [1,2,3,4]
for(let i of list){
    console.log(i)
}
// for(let i in list){
//     i = i+1
//     console.log(i)
// }
//function that strips email and get an index
function getEmail(mail){
    mail = mail.split('@')
    return console.log(mail[0])
}
getEmail('you@gmail.com')

//function that returns true if the word dog is contained in the input string
function findDog(word){
    word = word.toLowerCase().split(' ')
    console.log(word)
    for(let j of word){
        //console.log(j)
        if (j == 'dog'){
            console.log(j)
        }
        else{
            console.log(false)
        }
        
    }
}
findDog('is There a dog in the house')

//get all the first letter of a word
var txt = 'is there a dog'
var cpr = 'dog'
for(let i of txt.split(' ')){
    console.log(i[0])
}
//function that count the number of times a word is repeated in a sentence
function countWord(word){
    word = word.split(' ')
    var count = 0
    for(let i=0; i<=word.length; i++){
        if(word[i] == 'dog'){
            count = count + 1
        }     
    }
   console.log(count + " times")
}
countWord('is there dog in dog in dog dog')

//function that reverse word and join the word back
function reverseWord(word){
    word = word.split(' ')
    rev = word.reverse()
    console.log(rev)
    joi = rev.reverse()
    console.log(joi)
    rt = joi.join(' ')
    console.log(rt)
}
reverseWord('you are mine')

//function that find the middle word of a sentence
function findMiddle(sentence){
    sentence = sentence.split(' ')
    num = sentence.length
    div = Math.round(num/2)
    if(num % 2 != 0){
        ans = (num/2) - 0.5
        console.log(sentence[ans])
    }
    else{
        if(num <= 2){
            console.log(`we have ${num} words, i choose ${sentence[num-1]}`)
        }
        else{
            ans = num/2
            console.log(sentence[ans-1] + " and " + sentence[ans] + ' are in the middle')
        }
    }
    //console.log(sentence[div])
}
findMiddle('am a')

//function that reverse numbers
function reverseNum(num){
    num = num.toString().split('')
    revs = num.reverse()
    console.log(revs)
    tr = revs.join('')
    int = parseInt(tr)
    console.log(int)
}
reverseNum(3445)

//functions that sort even number and odd numbers
function mySort(nums){
    evens = []
    odds = []
    nums = nums.toString().split('')
    for(let i=0; i < nums.length; i++){
        if((nums[i] % 2) === 1){
            odds.push(parseInt(nums[i]))
        }
        else{
            evens.push(parseInt(nums[i]))   
        }
    }
    //console.log('Even number')
    console.log('Even number are: ' + evens)
    //console.log('Odd number')
    console.log('Even number are: ' + odds)
    let numsArray = odds.sort((a, b) => a - b).concat(evens.sort((a, b) => a - b));
    return numsArray;
    
}
var a = mySort(145678)
console.log(a)

//function that find capital letter in a sentence
function findCapitalLetters(sentence){
    sentence = sentence.split('')
    keep =[]
    //console.log(sentence)
    for(let k = 0; k < sentence.length; k++){
        if(sentence[k] === sentence[k].toUpperCase()){
            keep.push(sentence[k])
            //console.log(keep)
            //console.log(sentence[k])
            //console.log(sentence[k].length)
        }
    }
    console.log(keep)
}
findCapitalLetters('I Need aLl cpital letters a')