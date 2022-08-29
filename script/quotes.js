quoteBtn = document.querySelector('#quoteBtn')
quoteBody = document.querySelector('#quoteBody')

function randomColor() {
  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  quoteBody.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")"
}

async function randomQuote() {
  const response = await fetch('../script/quotes.json');
  const data = await response.json()
  var x = Math.floor(Math.random() * 103);
  console.log(data.quotes[x].quote)
  console.log(data.quotes[x].author)

  randomColor()

  Swal.fire({
    title: `${data.quotes[x].quote}\n\n\n${data.quotes[x].author}`,
    width: 600,
    padding: '3em',
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> OK!',
    color: '#453f3f',
    background: '#fff url(../img/quotesback.webp)',
    backdrop: `
      rgba(0,0,123,0.4)
    `
  }).then((result) => {
    if (result.isConfirmed) {
      quoteBtn.style.display = "flex"
      setTimeout(() => {
        quoteBtn.style.transform = "scale(1)"
      }, 150);
    }
  })
}

quoteBtn.addEventListener('click', () => {
  quoteBtn.style.transform = "scale(0.001)"
  quoteBtn.style.display = "none"
  randomQuote()
})

