// Function to get a random URL from a list of URLs
function getRandomUrl(urls) {
  if (urls.length === 0) return null; // Return null if the list is empty
  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
}

function getTicketImage() {
  const urls = [
    "https://marketplace.canva.com/EAE31TXmiVs/1/0/1600w/canva-blue-concert-photography-ticket-party-6WevsTB9ewg.jpg",
    "https://marketplace.canva.com/EAFIcL5Qokk/1/0/1600w/canva-black-and-dark-red-modern-music-concert-ticket-mXAHtv8CL0A.jpg",
    "https://mswordeventtickets.com/wp-content/uploads/2022/07/event-tickets-16-CRC.png",
    "https://marketplace.canva.com/EAFQU36pveo/1/0/1600w/canva-dark-grey-minimalist-new-year-music-festival-ticket-kdvKtawlYec.jpg",
    "https://marketplace.canva.com/EAE90yQXxJM/1/0/1600w/canva-purple-modern-new-year-music-festival-ticket-qUzMgL46aq0.jpg",
    "https://img.freepik.com/free-vector/flat-design-music-festival-landing-page_23-2150627716.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais",
    "https://marketplace.canva.com/EAFFy4DmGeU/1/0/1600w/canva-pink-and-purple-concert-music-ticket-EKOrfqZ5YBI.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-music-concert-ticket-template-027cbf5b8e957e3f3797326a6f7372d8_screen.jpg?ts=1561534909",
  ];

  return getRandomUrl(urls);
}

export default getTicketImage;
