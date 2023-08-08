const quotes = {
    Shakira:
        "My songs are a reflection of how I think and how I feel at that moment. But I'm conscious of the fact that artists have a responsibility before the masses and they have to take care of their words.",
    "Corie Barry":
        "Have those uncomfortable moments. Because my strong personal belief is it is those moments that cause you to grow the most yourself, but that also differentiate you the most in your career.",
    "Sarah Blakely":
        "My dad encouraged us to fail. Growing up, he would ask us what we failed at that week. If we didn't have something, he would be disappointed. It changed my mindset at an early age that failure is not the outcome, failure is not trying. Don't be afraid to fail.",
    "Thomas A. Edison":
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    "Steve Jobs":
        "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    "Dolly Parton":
        "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "Rex Orange County":
        "The moment you start thinking about what other people and other artists think, you’re going to start writing like other people.",
    "Ray Bradbury":
        "Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.",
    "Leonardo da Vinci": "Poor is the pupil who does not surpass his master",
    "Leonardo Da Vinci": "Art is never finished, only abandoned",
    "Ernie Banks": "The only way to prove that you’re a good sport is to lose.",
};

const quoteEl = document.getElementById("quote");
const author = document.getElementById("author");
// const btn = document.getElementById('submit')


if (quoteEl.textContent === "") {
    // Object.values(obj)[0] -> Object gets an Object instance, value() method gets the values in the object, obj => the quotes object defined above, [0] => gets the index of the values in the object

    quoteEl.textContent = Object.values(quotes)[0];
    author.textContent = Object.keys(quotes)[0];
}

function generateRandomQuote() {
    const lengthOfArray = Object.values(quotes).length;
    const randomIndex = Math.floor(Math.random() * lengthOfArray);

    // console.log(randomIndex)
    quoteEl.textContent = Object.values(quotes)[randomIndex];
    author.textContent = Object.keys(quotes)[randomIndex];
}

// btn.addEventListener('click', generateRandomQuote)
