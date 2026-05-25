const btn = document.getElementById("getbtn");
const QuoteElem = document.getElementById("quote");

const fetchData = async () => {
  QuoteElem.innerHTML = "Loading...";

  try {
    let response = await fetch("https://dummyjson.com/quotes/random");
    
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    let json = await response.json();
    QuoteElem.innerHTML = `
      "${json.quote}" 
      <br> 
      <span style="font-size: 18px; opacity: 0.6; display: block; margin-top: 15px;">
        — ${json.author}
      </span>
    `;

  } catch (error) {
    console.error(error);
    QuoteElem.innerHTML = "Oops! Something went wrong. Click the button to try again.";
  }
};
btn.addEventListener("click", fetchData);
fetchData();