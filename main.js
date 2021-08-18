const text = document.querySelector('.quote');
const auth = document.querySelector('.author')
const nextBtn = document.querySelector('.next');
const tweetBtn = document.querySelector('.twitter-share-button')
const loader = document.querySelector('.loader')

const getQuote = async () => {
    loader.classList.remove('hide');
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random() * quotes.length);
    loader.classList.add('hide');
    const item = quotes[num];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    auth.innerText = authorName;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
}

nextBtn.addEventListener("click", getQuote)

getQuote();
