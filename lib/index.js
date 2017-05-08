let nouns = ['cat', 'keyboard', 'mouse', 'onion', 'turtle', 'cell phone', 'backgammon', 'cassette tape', 'movie', 'pencil', 'shirt', 'hairbrush'];
let adjs = ['smelly', 'sticky', 'random', 'gross', 'putrid', 'green', 'hard', 'soft', 'bouncy', 'lightweight', 'beautiful', 'nice'];
let exclamations = ['wicked', 'awesome', 'totally rad', 'so coooool', 'terrific', 'crazy awesome', 'neato burrito', 'sorta neat', 'just ok', 'not that great', 'pretty awfull'];

let firstNames = ['Gerty', 'Betty', 'Bobby', 'Nick', 'Jon', 'Scott', 'Alice', 'Ricky', 'Bobberto'];
let lastNames = ['Winterbottom', 'Gertzenhiemen', 'Smith', 'Goldsworthy', 'Bobby', 'Rosebottom'];

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
    getCustomer: function() {
        let randomFirstIndex = Math.floor((Math.random() * firstNames.length));
        let randomLastIndex = Math.floor((Math.random() * lastNames.length));
        return firstNames[randomFirstIndex] + ' ' + lastNames[randomLastIndex];
    }
};
