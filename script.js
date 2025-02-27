let btn = document.querySelector('#generate-btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

btn.addEventListener('click', function () {


    // generate a num between 0 and the total number of quotes
    let randomNum = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomNum].quote;
    person.innerText = quotes[randomNum].person;

    quotes.splice(randomNum, 1);

    if (quotes.length == 0) {
        quote.innerText = 'Sorry, there are no quotes left \n :(';
        quote.setAttribute('class', 'warning');
        person.innerText = '';
        btn.disabled = true;
    }

    document.querySelector('.icon').remove();
});

const quotes = [
    {
        quote: `"You don't have to be great to start, but you have to start to be great"`,
        person: `Zig Ziglar`
    },
    {
        quote: `"A determined mind is a very powerful mind."`,
        person: `unknown`
    },
    {
        quote: `"When everything feels overwhelming, just focus on one thing"`,
        person: `unknown`
    },
    {
        quote: `"Don't be afraid to start all over again. You may like your new story better"`,
        person: `unknown`
    },
    {
        quote: `"It's not hard. You've just never done it before. Know the difference. Engage your curiosity. Shift your perspective."`,
        person: `unknown`
    },
    {
        quote: `"It's better to try and fail than to not try at all."`,
        person: `Nicole Krauss`
    },
    {
        quote: `"The world is changed by your example, not by your opinion."`,
        person: `Paulo Coelho`
    },
    {
        quote: `"Become addicted to constant and never ending self-improvement."`,
        person: `Anthony J. D'Angelo`
    },
    {
        quote: `"Invest in yourself because you are worth it."`,
        person: `unknown`
    },
    {
        quote: `"The universe reveals its secrets to those who dare to follow their hearts."`,
        person: `Ralph Smart`
    },
    {
        quote: `"You are ready to unlock a new level of your life."`,
        person: `unknown`
    },
    {
        quote: `"Sometimes the hardest thing and the right thing are the same."`,
        person: `Isaac Slade`
    },
    {
        quote: `"Rearrange your patterns. A new world awaiting..."`,
        person: `unknown`
    },
    {
        quote: `"It is better to be lonely than allow people who are not going anywhere keep you from your destiny."`,
        person: `Joel Osteen`
    },
    {
        quote: `"Success is a pile of failure that you are standing on."`,
        person: `Dave Ramsey`
    },
    {
        quote: `"A mind troubled by doubt cannot focus on the course of victory."`,
        person: `Arthur Golden`
    },
    {
        quote: `"Success is not final, failure is not fatal, it is the courage to continue that counts."`,
        person: `Winston Churchill`
    },
    {
        quote: `"Don't stop when you're tired. Stop when you're done."`,
        person: `Wesley Snipes`
    },
    {
        quote: `"The journey of a thousand miles begins with one step."`,
        person: `Lao Tzu`
    },
    {
        quote: `"Much effort, much prosperity."`,
        person: `Euripides`
    },
];

