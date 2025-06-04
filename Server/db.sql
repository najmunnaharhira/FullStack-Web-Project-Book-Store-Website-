//Database code

CREATE DATABASE BookInventory;
USE BookInventory;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookTitle VARCHAR(255) NOT NULL,
    authorName VARCHAR(255) NOT NULL,
    imageURL VARCHAR(255),
    category VARCHAR(50),
    bookDescription TEXT,
    bookPDFURL VARCHAR(255)
);


CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT,
  content TEXT,
  FOREIGN KEY (book_id) REFERENCES books(id)
);


CREATE TABLE activity_log (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activity_type VARCHAR(50),
    description TEXT
);




INSERT INTO books (bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL) VALUES
('Heartstopper: Volume Four', 'Alice Oseman', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640745736i/56060300.jpg', 'Self-help', 'Boy meets boy. Boys become friends. Boys fall in love. The bestselling LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the fourth volume of HEARTSTOPPER, for fans of The Art of Being Normal, Holly Bourne and Love, Simon.\\n\\nCharlie didn''t think Nick could ever like him back, but now they''re officially boyfriends. Charlie''s beginning to feel ready to say those three little words: I love you.', 'https://www.goodreads.com/book/show/56060300-heartstopper'),
('Lessons in Chemistry', 'Bonnie Garmus', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033.jpg', 'History', 'Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth Zott would be the first to point out that there is no such thing as an average woman. But it’s the early 1960s and her all-male team at Hastings Research Institute takes a very unscientific view of equality. Except for one: Calvin Evans; the lonely, brilliant, Nobel–prize nominated grudge-holder who falls in love with—of all things—her mind. True chemistry results.', 'https://www.goodreads.com/book/show/58065033-lessons-in-chemistry'),
('I’m Glad My Mom Died', 'Jennette McCurdy', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649228846i/59366244.jpg', 'Autobiography', 'A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor—including eating disorders, addiction, and a complicated relationship with her overbearing mother—and how she retook control of her life.\\n\\nJennette McCurdy was six years old when she had her first acting audition. Her mother’s dream was for her only daughter to become a star, and Jennette would do anything to make her mother happy. So she went along with what Mom called “calorie restriction,” eating little and weighing herself five times a day. She endured extensive at-home makeovers while Mom chided, “Your eyelashes are invisible, okay? You think Dakota Fanning doesn’t tint hers?” She was even showered by Mom until age sixteen while sharing her diaries, email, and all her income.', 'https://www.goodreads.com/book/show/59366244-i-m-glad-my-mom-died'),
('The Final Gambit', 'Jennifer Lynn Barnes', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg', 'Fiction', 'To inherit billions, all Avery Kylie Grambs has to do is survive a few more weeks living in Hawthorne House. The paparazzi are dogging her every step. Financial pressures are building. Danger is a fact of life. And the only thing getting Avery through it all is the Hawthorne brothers. Her life is intertwined with theirs. She knows their secrets and they know her.', 'https://www.goodreads.com/book/show/59233594-the-final-gambit'),
('The Dark Queens', 'Shelley Puhak', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593216033i/53138220.jpg', 'Biography', 'Brunhild was a Spanish princess, raised to be married off for the sake of alliance-building. Her sister-in-law Fredegund started out as a lowly palace slave. And yet—in the 6th-century Merovingian Empire, where women were excluded from noble succession and royal politics was a blood sport—these two iron-willed strategists reigned over vast realms for decades, changing the face of Europe.', 'https://www.goodreads.com/book/show/53138220-the-dark-queens');


INSERT INTO books (bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL)
VALUES
('The Maid', 'Nita Prose', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg', 'Mystery', 'Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life''s complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection.', 'https://www.goodreads.com/book/show/55196813-the-maid'),
('Carrie Soto Is Back', 'Taylor Jenkins', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg', 'Fiction', 'By the time Carrie retires from tennis, she is the best player the world has ever seen. She has shattered every record and claimed twenty Slam titles. And if you ask her, she is entitled to every one. She sacrificed nearly everything to become the best, with her father as her coach. But six years after her retirement, Carrie finds herself sitting in the stands of the 1994 US Open, watching her record be taken from her by a brutal, stunning, British player named Nicki Chan.', 'https://www.goodreads.com/book/show/60435878-carrie-soto-is-back'),
('House of Sky', 'Sarah J. Maas', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg', 'Fantasy', 'Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebels’ plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.', 'https://www.goodreads.com/book/show/40132775-house-of-sky-and-breath'),
('Book Lovers', 'Emily Henry', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg', 'Fiction', 'Nora Stephens’ life is books—she’s read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby.', 'https://www.goodreads.com/book/show/58690308-book-lovers'),
('Sea of Tranquility', 'Emily St. John', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg', 'Fiction', 'A novel of art, time travel, love, and plague that takes the reader from Vancouver Island in 1912 to a dark colony on the moon five hundred years later, unfurling a story of humanity across centuries and space. Edwin St. Andrew is eighteen years old when he crosses the Atlantic by steamship, exiled from polite society following an ill-conceived diatribe at a dinner party. He enters the forest, spellbound by the beauty of the Canadian wilderness, and suddenly hears th', 'https://www.goodreads.com/book/show/58446227-sea-of-tranquility'),
('Hidden Pictures', 'Jason Rekulak', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg', 'Horror', 'A wildly inventive spin on the supernatural thriller, about a woman working as a nanny for a young boy with strange and disturbing secrets. Mallory Quinn is fresh out of rehab when she takes a job as a babysitter for Ted and Caroline Maxwell. She is to look after their five-year-old son, Teddy. Mallory immediately loves it. She has her own living space, goes out for nightly runs, and has the stability she craves. And she sincerely bonds with Teddy, a sweet, shy boy who is never without his sketchbook and pencil. His drawings are the usual fare: trees, rabbits, balloons. But one day, he draws something different: a man in a forest, dragging a woman’s lifeless body.', 'https://www.goodreads.com/book/show/58724923-hidden-pictures'),
('Bad Gays: A Homosexual History', 'Huw Lemmey', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631844850i/59012057.jpg', 'History', 'Too many popular histories seek to establish heroes, pioneers and martyrs but as Huw Lemmey and Ben Miller argue, the past is filled with queer people whose sexualities and dastardly deeds have been overlooked. We all remember Oscar Wilde, but who speaks for Bosie? What about those ‘bad gays’ whose unexemplary lives reveals more than we might expect?', 'https://www.goodreads.com/book/show/59012057-bad-gays'),
INSERT INTO books (bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL)
VALUES
('The Song of Achilles', 'Madeline Miller', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1331154660i/11250317.jpg', 'Fiction', 'A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer’s enduring masterwork, The Iliad.', 'https://www.goodreads.com/book/show/11250317-the-song-of-achilles'),
('Dune', 'Frank Herbert', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg', 'Science Fiction', 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad’Dib. He would avenge the traitorous plot against his noble family—and bring to fruition humankind’s most ancient and unattainable dream.', 'https://www.goodreads.com/book/show/44767458-dune'),
('The Night Circus', 'Erin Morgenstern', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1476180810i/9361589.jpg', 'Fantasy', 'The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.', 'https://www.goodreads.com/book/show/9361589-the-night-circus'),
('Educated', 'Tara Westover', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg', 'Memoir', 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.', 'https://www.goodreads.com/book/show/35133922-educated'),
('Where the Crawdads Sing', 'Delia Owens', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529591916i/36809135.jpg', 'Fiction', 'For years, rumors of the "Marsh Girl" haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.', 'https://www.goodreads.com/book/show/36809135-where-the-crawdads-sing'),
('Atomic Habits', 'James Clear', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320i/40121378.jpg', 'Self-help', 'No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world’s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.', 'https://www.goodreads.com/book/show/40121378-atomic-habits'),
('The Silent Patient', 'Alex Michaelides', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552347136i/40097951.jpg', 'Thriller', 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.', 'https://www.goodreads.com/book/show/40097951-the-silent-patient'),
('Becoming', 'Michelle Obama', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528202410i/38746485.jpg', 'Memoir', 'In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address.', 'https://www.goodreads.com/book/show/38746485-becoming')






//user 
INSERT INTO users (email, password) VALUES
('alice@example.com', 'password123'),
('bob@example.com', 'securepassword')
 //reviews

 INSERT INTO reviews (book_id, content) VALUES
(1, 'A beautiful and heartwarming story. The characters are so well-developed and the plot is engaging. Highly recommended!'),
(2, 'An insightful look into the struggles and triumphs of a woman chemist in the 1960s. The writing is brilliant and the story is captivating.'),
(3, 'A raw and powerful memoir. Jennette McCurdy’s honesty and humor shine through as she recounts her difficult childhood and journey to healing.'),
(4, 'An exciting and suspenseful read. The plot twists kept me on the edge of my seat and the characters are fascinating.'),
(5, 'A compelling historical biography. The author does a great job of bringing these two powerful women to life and showing their impact on history.'),
(6, 'A unique and engaging mystery. The protagonist is lovable and quirky, and the story is full of surprises.'),
(7, 'A captivating sports drama. The character development is excellent and the tennis matches are described with great detail and excitement.'),
(8, 'A mesmerizing fantasy. The world-building is fantastic and the characters are complex and relatable.'),
(9, 'A delightful romantic comedy. The dialogue is witty and the chemistry between the characters is electric.'),
(10, 'A thought-provoking science fiction. The narrative spans centuries and explores deep themes with great skill.'),
(11, 'A thrilling horror novel. The suspense is intense and the supernatural elements are well-crafted.'),
(12, 'A fascinating look at lesser-known figures in LGBTQ+ history. The stories are well-researched and enlightening.');

CREATE TABLE BrowsingHistory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user.id INT,
    book.id INT,
    browsed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);
CREATE TABLE Recommendations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    recommended_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

CREATE TABLE Wishlist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

CREATE TABLE CartItems (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

CREATE TABLE IF NOT EXISTS new_checkout (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    shipping_address VARCHAR(255) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    total_payment DECIMAL(10, 2) NOT NULL,
    book_ids VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
`;
INSERT INTO BrowsingHistory (user_id, book_id) VALUES
(1, 1),
(1, 2),
(2, 3);

INSERT INTO Recommendations (user_id, book_id) VALUES
(1, 3),
(2, 1);
INSERT INTO CartItems (user_id, book_id, quantity) VALUES
(1, 1, 2),
(2, 2, 1);


INSERT INTO books (bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL) VALUES

('Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future', 'Ashlee Vance', 'https://images-na.ssl-images-amazon.com/images/I/71I5KtGq+xL.jpg', 'Biography', 'A biography of Elon Musk, exploring his work with SpaceX, Tesla, and his vision for the future.', 'https://www.pdfdrive.com/elon-musk-how-the-billionaire-ceo-of-spacex-and-tesla-is-shaping-our-future-e160021416.html'),
('Margaret Thatcher: A Life and Legacy', 'Mr David Cannadine', 'https://images-na.ssl-images-amazon.com/images/I/61j0X2pAOiL.jpg', 'Biography', 'A biography of Margaret Thatcher, examining her life, political career, and lasting legacy.', 'https://www.pdfdrive.com/margaret-thatcher-a-life-and-legacy-e161840479.html'),
('Life in Motion', 'Misty Copeland', 'https://images-na.ssl-images-amazon.com/images/I/51PmTzVesXL.jpg', 'Biography', 'The inspiring memoir of Misty Copeland, the first African American principal dancer with the American Ballet Theatre.', 'https://www.pdfdrive.com/life-in-motion-an-unlikely-ballerina-e177814594.html'),
('The John Lennon Letters', 'John Lennon, Hunter Davies', 'https://images-na.ssl-images-amazon.com/images/I/91aknDoPknL.jpg', 'Biography', 'A collection of John Lennon\'s letters, providing insight into his thoughts and life.', 'https://www.pdfdrive.com/the-john-lennon-letters-e179567017.html');


  