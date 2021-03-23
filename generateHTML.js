const displayPortfolio = (response) => {
    const myHTML = `
    <html>
      <body>
        <h1>My Portfolio</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    response.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    response.end(myHTML);
  };

renderCards()
module.exports = generateHTML