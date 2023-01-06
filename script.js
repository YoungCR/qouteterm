const quotebtn = document.getElementById("quotebtn");
quotebtn.addEventListener("click", newQuote);

function newQuote() {
    // console.log("testing");
    const apiPage = Math.floor(Math.random()*103);
    const randomNumber = Math.floor(Math.random()*20);
    // console.log(apiPage);
    // console.log(randomNumber);
    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("quote-author");
  
    fetch(`http://api.quotable.io/quotes?page=${apiPage}`)
      .then(response => response.json())
      .then(data => {
  
        let quote = data.results[randomNumber].content;
        let author = data.results[randomNumber].author;
  
        quoteText.innerHTML = `"${quote}"`;
        quoteAuthor.innerHTML = `~${author}`;
      });
  };

  function test() {
    console.log("does it work?");
  }