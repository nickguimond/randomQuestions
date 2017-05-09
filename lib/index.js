let nouns = ['cat', 'keyboard', 'mouse', 'onion', 'turtle', 'cell phone', 'backgammon game', 'cassette tape', 'movie', 'pencil', 'shirt', 'brush','tv','car','van','goat','zebra','dog','elephant','seagull','bat','crab','snail','racoon','bear','teddy bear','jeans','t-shirt','jeans','dress','skirt','flower','guitar','sunhat','fedora','baseball hat','sunglasses','ripped jeans','acoustic guitar','watermellon','dress shirt','winter jacket','cheeseburger','cow','pig','picture frame','wall art','paint brush','can of paint','water'];
let adjs = ['smelly', 'sticky', 'random', 'gross', 'putrid', 'green', 'hard', 'soft', 'bouncy', 'lightweight', 'beautiful', 'nice'];
let exclamations = ['wicked', 'awesome', 'totally rad', 'so coooool', 'terrific', 'crazy awesome', 'neato burrito', 'sorta neat', 'just ok', 'not that great', 'pretty awfull'];

let firstNames = ['Gerty', 'Betty', 'Bobby', 'Nick', 'Jon', 'Scott', 'Alice', 'Ricky', 'Bobberto', 'Audri' , 'Sally' , 'Amber' , 'Jedd' , 'Joey', 'Billy', 'Willaim', 'Joe','Sarah','Judy','Kendra', 'Mary-Ann','Richard','John','Fred','Daniel', 'Thomas','Jacob','Noah','Luis','Samuel','Justin','David','Logan','Ben','Juan','Pedro','James','Santiago','Martin','Jack','Emma','Brianna','Emilia','Sara','Sue','Zoe','Lea','Alysha','Sofia','Mia','Victoria','Raquel','Isabella','Olivia','Paula','Charlotte','Mary','Nicole','Grace','Madison'];
let lastNames = ['Winterbottom', 'Gertzenhiemen', 'Smith', 'Goldsworthy', 'Bobby', 'Rosebottom', 'Smith', 'McSnikkers','McPickles','Ryder','Flynn','Williams','Johnson','Jones','Brown','Davis','Taylor','Anderson','Martin','Thompson','Wilson','Miller','Allen','Young','Wright','Adams','Baker','King','Scott','Evans','Cook','Murphy','Gray','Ross','Coleman','Gonzales','Woods','Fisher','Cruz','Hicks'];

let questions = [
    `I have a question about my ${combo()}`,
    `Can you help me find my ${noun()}?`,
    `What color ${noun()} should i get?`,
    `Who sells the best ${adj()} tacos?`,
    `Where can i get a ${exc()} haircut?`,
    `What do you suppose this ${noun()} is made of?`,
    `Which ${noun()} is the fastest?`,
    `Why is my ${noun()} so ${adj()}?`,
    `What is the best ${combo()} brand?`,
    `What ${exc()} ${combo()} should i get?`,
    `How do i make the best ${combo()}?`,
    `What ${noun()} should i get?`,
    `Do you sell ${exc()} ${noun()}s?`,
    `Where can i buy a new ${noun()}?`,
    `How many ${exc()} TV channels are there relating to ${noun()}?`,
    `Do i think too much about ${noun()}s?`,
    `How can i go about getting a refund for this ${combo()}?`,
    `Oh ${exc()} .. . I feel like i got overcharged for this ${combo()}?`,
    `What paperwork will be required to officialy adopt this ${noun()}?`,
    `When can I expect delivery of my new ${noun()}?`,
    `Where can I find a ${exc()} present for my mom?`
    
];

function combo() {
    let randomNounIndex = Math.floor((Math.random() * nouns.length));
    let randomAdjsIndex = Math.floor((Math.random() * adjs.length));
    return adjs[randomAdjsIndex] + ' ' + nouns[randomNounIndex];
}
function adj() {
    let randomAdjsIndex = Math.floor((Math.random() * adjs.length));
    return adjs[randomAdjsIndex];
}
function noun() {
    let randomNounIndex = Math.floor((Math.random() * nouns.length));
    return nouns[randomNounIndex];
}
function exc() {
    let randomExIndex = Math.floor((Math.random() * exclamations.length));
    return exclamations[randomExIndex];
}

module.exports = {
    getQuestion: function() {
        let randomNum = Math.floor((Math.random() * questions.length));
        return questions[randomNum];
    },
    getPersonName: function() {
        let randomFirstIndex = Math.floor((Math.random() * firstNames.length));
        let randomLastIndex = Math.floor((Math.random() * lastNames.length));
        return firstNames[randomFirstIndex] + ' ' + lastNames[randomLastIndex];
    }
};
