const proverb1 = [Not, knowing, is, Buddha];
const proverb2 = [Gold, coins, to, a cat];
const proverb3 = [Even, monkeys, fall from, trees];
const proverb4 = [Time, flies, like, an arrow];
const proverb5 = [Hot, dumplings, rather than, flowers];
const proverb6 = [];
const proverb7 = [];
const proverb8 = [];
const proverb9 = [];
const proverb10 = [];


const allProverbs = [proverb1, proverb2, proverb3, proverb4, proverb5, proverb6, proverb7, proverb8, proverb9, proverb10];



// Random index number of allProverbs selects a proverb, from which a word is pulled 
const randomProverb = allProverbs[Mathfloor(Math.random() * 10)];

/* The function runs through a loop with a length of a proverb (4 words => 0 - 3)
   each loop, it pulls a word from a random proveb, which index is the same as the length of mixedProverb.
   Then the array of words is joined and */

function mixedMessages() {
    const mixedProverb = [];
    for (let i = 0; i < 4, i++) {
        mixedProverb.push(randomProverb[mixedProverbs.length]);
    }
    return mixedProverb.join(' ');
}
console.log(mixedProverb);


