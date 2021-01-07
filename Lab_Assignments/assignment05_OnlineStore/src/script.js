/* Add any JavaScript you need to this file. */
var items = [
  {
    Title: 'A Tale of Magic',
    Description:
      "This #1 New York Times bestseller is a new series starter set in Chris Colfer's Land of Stories universe, a collection perfect for both new and longtime fans!",
    Category: 'Reading Book',
    Price: 23.75
  },
  {
    Title: 'The Land of Stories',
    Description:
      'In the highly anticipated conclusion to the Land of Stories series, Conner and Alex must brave the impossible. All of the Land of Stories fairy tale characters--heroes and villains--are no longer confined within their world!',
    Category: 'Reading Book',
    Price: 14.95
  },
  {
    Title: 'Harry Potter and the Goblet of Fire',
    Description:
      'An extraordinary creative achievement by two extraordinary talents, Jim Kay’s inspired reimagining of J.K. Rowling’s classic series has captured a devoted following worldwide. This stunning new fully illustrated edition of Harry Potter and the Goblet of Fire brings more breathtaking scenes and unforgettable characters to life – including Cedric Diggory, Fleur Delacour and Mad-Eye Moody. With paint, pencil and pixels, Kay conjures the wizarding world as we have never seen it before. Fizzing with magic and brimming with humour, this full-colour edition will captivate fans and new readers alike as Harry, now in his fourth year at Hogwarts School of Witchcraft and Wizardry, finds himself competing in the legendary Triwizard Tournament and facing death-defying tasks, dragons and Dark wizards …',
    Category: 'Reading Book',
    Price: 36.6
  },
  {
    Title: 'The Disney Princess Cookbook',
    Description:
      "From Rapunzel's Frying Pan Eggs to Ariel's Sea Turtle Cupcakes, this beautiful cookbook is filled with delicious recipes inspired by the Princesses' many adventures. With simple step-by-step instructions, mouth-watering photos of each dish, and helpful tips from the Princesses themselves, this cookbook makes it easy to whip up some kitchen magic.",
    Category: 'Reading Book',
    Price: 17.33
  },
  {
    Title: 'Disney Storybook Collection',
    Description:
      'Featuring your favorite Disney characters, these bestselling storybook collections have been completely redesigned with all new covers, gilded pages, newly edited text, and a classic new look with over 250 illustrations-including full-page artwork from the Disney archives.',
    Category: 'Reading Book',
    Price: 17.81
  },
  {
    Title: 'Super Mario Activity Book',
    Description:
      'BEST ACTIVITY BOOK FOR YOUR CHILD!!! Super Mario Activity Book. *40 activity pages*Educational Games, *Coloring* How to Draw*Word Search*Puzzles* Mazes*Dot to Dot *and More...Original Artist Designs, High Resolution A Great Super Mario Activity Book For Boys, Girls, Toddlers, Preschoolers, Kids (6-7, 8-9, 10-12 ages)*Printed on one side of the paper 8,5*11',
    Category: 'Activity Book',
    Price: 7.96
  },
  {
    Title: 'Unicorn Activity Book',
    Description:
      'Fun! Fun! Fun! Let your kids creativity run wild! Original Artist Designs, High Resolution. A Gorgeous Unicorn Activity Book For Kids Ages 4-8!!!',
    Category: 'Activity Book',
    Price: 4.53
  },
  {
    Title: 'Ultimate Sticker Book',
    Description:
      "Disney·Pixar Cars 3: Ultimate Sticker Book is the perfect partner to Cars 3, the third installment of Disney·Pixar's Cars franchise. This Ultimate Sticker Book will feature all the memorable characters, including race car Lightning McQueen, key locations, and iconic moments from the movie. With beautiful, bright stickers and lively and informative captions, Ultimate Sticker Book is a must-have companion to Disney·Pixar's Cars 3.",
    Category: 'Activity Book',
    Price: 8.99
  },
  {
    Title: 'The Lion Guard Coloring Book',
    Description:
      'The Lion Guard Coloring Book: Great Coloring Pages For Kids. Welcome to The Lion Guard Coloring Book for Kids and Adults: Coloring All Your Favorite Characters in The Lion Guard (Unofficial The The Lion Guard Book) Multiple Coloring Pages: Amazing and unique Designs Hours of fun for any The Lion Guard, great for travel, family gatherings, gifts, party favors, go packs, birthdays and more. Games, puzzles, mazes and coloring fun with The Lion Guard and his friends. Sure to be a hit with any The Lion Guard fan! Delight your The Lion Guard fan with this The Lion Guard Coloring Book. Great gift for your favorite The Lion Guard enthusiast!',
    Category: 'Activity Book',
    Price: 7.32
  },
  {
    Title: 'Disney Dreams Collection',
    Description:
      "In this unique coloring book, sixty-three paintings from Thomas Kinkade's Disney Dreams Collection are presented in color across from the black line art of the same image. Enter the world of the Painter of Light as you create your own renditions of these paintings inspired by classic Disney movies, including The Jungle Book, Lady and the Tramp, Sleeping Beauty, and many more.",
    Category: 'Activity Book',
    Price: 9.56
  },
  {
    Title: 'The Little Prince 2021 Wall Calendar',
    Description:
      "In celebration of Antoine de Saint-Exupéry's masterpiece, The Little Prince 2021 Wall Calendar features the art and wisdom from one of the most beloved books in the world.",
    Category: 'Poster',
    Price: 19.99
  },
  {
    Title: 'Harry Potter Poster',
    Description:
      'Explore the many places and characters of the Harry Potter films through the magic of color in this special poster collection. The resplendent halls of Gringotts and the candy-filled shelves of Honeydukes are yours to illuminate in intricate drawings that include many of the most beloved characters of the series. Featuring twenty large-format, onesided prints from Harry Potter Magical Places & Characters Coloring Book, each detailed illustration is printed on high-quality card stock and can easily be removed for displaying.',
    Category: 'Poster',
    Price: 31.67
  },
  {
    Title: 'Harry Potter Poster Collection',
    Title_abbreviation: 2,
    Description:
      'Demonstrating Harry Potter’s global reach and unparalleled visual impact, Harry Potter: The Definitive Movie Posters features the most dramatic national and international movie posters created during the entire eight-film run. This elegant, large-scale fo',
    Category: 'Poster',
    Price: 23.81
  },
  {
    Title: 'Poster Art of the Disney Parks',
    Description:
      'Anyone who has ever walked through the gates at a Disney Park knows that there is a magical experience waiting to be had on the other side. All of the telltale signs are there: the sound of joyful music pipes across the promenade; the smells of popcorn and cookies waft through the air; and the colorful attraction posters depict all the wonderful rides and shows created for Guests by the Imagineers. ',
    Category: 'Poster',
    Price: 7.76
  },
  {
    Title: 'The Legend of Zelda',
    Description:
      'Fans of The Legend of Zelda will love this full-color activity book featuring Link, Princess Zelda, and their adventures in Hyrule. With tons of activities and stickers, The Legend of Zelda Official Sticker Book adds a new adventure to the legend!',
    Category: 'Poster',
    Price: 17.6
  },
  {
    Title: 'Fairy Tale Postcards',
    Description:
      'Twelve enchanting scenes from the world of folklore and fancy include episodes from the stories of Hans Christian Andersen, the Brothers Grimm, and other storytellers. Full-color images feature vignettes from Beauty and the Beast, Rumpelstiltskin, Thumbelina, and other tales as envisioned by Walter Crane, Edmund Dulac, and other artists.',
    Category: 'Post Card',
    Price: 9.26
  },
  {
    Title: 'Old Fashioned Christmas Postcards',
    Description:
      'A joy to cut, send or keep, these christmas cards kindle a warm glow of seasonal cheer',
    Category: 'Post Card',
    Price: 14.96
  },
  {
    Title: 'The Art of Disney',
    Description:
      "This box of postcards representing Disney's modern classics collects concept art—many pieces never before published—and final frames from ten iconic films made since Disney's renaissance spanning from The Little Mermaid to Big Hero 6.",
    Category: 'Post Card',
    Price: 30.99
  },
  {
    Title: 'Art of Coloring',
    Description:
      "This stunning collection of postcards features original vintage illustrations from Disney parks around the world-each inked with care by the masterful graphics team at Walt Disney Imagineering. Color in the cards and bring to life gorgeous attraction posters featuring the Haunted Mansion, Pirates of the Caribbean, It's a Small World, and more. Perfect for cultivating creativity, relaxation, and focus, these postcards are for you to keep and enjoy or mail to your friends and family.",
    Category: 'Post Card',
    Price: 13.99
  },
  {
    Title: 'Mickey Mouse Museum',
    Description:
      "Fun, funny, and feisty patterns and character designs permeate the near-ninety-year history of Disney's beloved mice: Mickey and Minnie. These images are ideal for taking pencil to paper and adding your own brand of color and style. Perfect for cultivating creativity, relaxation, and focus, these pages are filled with line art from Disney animation, comics, and more-featuring work from Ub Iwerks, Floyd Gottfredson, and more.",
    Category: 'Post Card',
    Price: 17.33
  }
];

window.onload = function() {
  var home = document.querySelector('#menu_1');
  home.addEventListener('click', listingAllItems);

  var fairyBook = document.querySelector('#menu_2');
  fairyBook.addEventListener('click', listingAllfairyBook);

  var fairyReadingBook = document.querySelector('#menu_21');
  fairyReadingBook.addEventListener('click', listingFairyReadingBook);

  var fairyActivityBook = document.querySelector('#menu_22');
  fairyActivityBook.addEventListener('click', listingFairyActivityBook);

  var picture = document.querySelector('#menu_3');
  picture.addEventListener('click', listingAllpicture);

  var poster = document.querySelector('#menu_31');
  poster.addEventListener('click', listingPoster);

  var postCard = document.querySelector('#menu_32');
  postCard.addEventListener('click', listingPostCard);

  //var contactUs = document.querySelector("#menu_4");

  var previousClickMenu = ''; // initialize variable which stores previous clicked menu
  function listingAllItems(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents
      var itemDisplayNum = 0;
      items.forEach(function(e) {
        itemDisplayNum++;
        printContents(e, itemDisplayNum);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    // Call printDetail function when a card is selected
    var bw = document.querySelector('#body-wrapper');
    for (let i = 1; i <= bw.childElementCount; i++) {
      let card = `#body-wrapper > div:nth-child(${i})`;
      document.querySelector(card).addEventListener('click', printDetail);
    }
  }

  function listingAllfairyBook(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Reading Book' || e.Category === 'Activity Book';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }

    clickDetail(); // Call printDetail function when a card is selected
  }

  function listingFairyReadingBook(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Reading Book';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    clickDetail(); // Call printDetail function when a card is selected
  }

  function listingFairyActivityBook(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Activity Book';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    clickDetail(); // Call printDetail function when a card is selected
  }

  function listingAllpicture(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Poster' || e.Category === 'Post Card';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    clickDetail(); // Call printDetail function when a card is selected
  }

  function listingPoster(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Poster';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    clickDetail(); // Call printDetail function when a card is selected
  }

  function listingPostCard(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText !== previousClickMenu) {
      document.querySelector('#body-wrapper').innerHTML = ''; // Delete all of the previous table contents

      let filteredItems = items.filter(function(e) {
        return e.Category === 'Post Card';
      });

      filteredItems.forEach(function(e) {
        printContents(e);
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
    clickDetail(); // Call printDetail function when a card is selected
  }

  // Print summary of items when a menu(or submenu) is clicked
  function printContents(e) {
    var divTag = document.createElement('div');
    divTag.className = 'column';
    var img = document.createElement('img');
    //img.src = `../image/${e.Title}.jpg`;
    img.src = `image/${e.Title.replace(/\s/g, '')}.jpg`;
    //console.log(`${e.Title.replace(/\s/g,'')}`);
    img.alt = `${e.Title}`;
    divTag.appendChild(img);
    var spanTagTitle = document.createElement('span');
    spanTagTitle.innerText = `${'\n'} ${e.Title}`;
    divTag.appendChild(spanTagTitle);
    var spanCategory = document.createElement('span');
    spanCategory.innerText = `${'\n'} Category: ${e.Category}`;
    divTag.appendChild(spanCategory);
    var spanPrice = document.createElement('span');
    spanPrice.innerText = `${'\n'} Price(CDN$): ${e.Price}`;
    divTag.appendChild(spanPrice);
    document.querySelector('#body-wrapper').appendChild(divTag);
  }

  // Print detals of items when a card is clicked
  function clickDetail() {
    var bw = document.querySelector('#body-wrapper');
    for (let i = 1; i <= bw.childElementCount; i++) {
      let card = `#body-wrapper > div:nth-child(${i})`;
      document.querySelector(card).addEventListener('click', printDetail);
    }
  }

  function printDetail() {
    var clickedTitle = this.getElementsByTagName('span')[0].innerText;
    var filteredDescription = items.filter(function(e) {
      return clickedTitle.trim() === e.Title.trim();
    });
    window.alert(filteredDescription[0].Description);
  }
};
