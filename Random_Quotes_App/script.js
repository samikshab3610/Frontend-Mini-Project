const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

btn.addEventListener('click', getQuote);

async function getQuote() {

    btn.disabled = true;

    try {

        // quote.textContent = 'Loading...';
        // author.textContent = " ";

        const response = await fetch('https://dummyjson.com/quotes/random');

        if (!response.ok) {
            throw new Error("Fetch Failed");
        }

        const data = await response.json();
        console.log(data);
        quote.textContent = `"${data.quote}"`;
        author.textContent = `_${data.author}`;

    } catch (error) {
        quote.textContent = "Something Went Worng";
        author.textContent = '';
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.textContent = "New Quote";
    }

}

