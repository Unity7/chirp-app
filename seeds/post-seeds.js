const { Post } = require("../models");

const postdata = [
  {
    title: "There is nothing to fear but fear itself",
    post_body: "Today is the day that I conqueror my fears",
    user_id: 10,
  },
  {
    title: "Random Acts of Kindness",
    post_body:
      "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    user_id: 8,
  },
  {
    title: "Don't miss out!",
    post_body:
      "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    user_id: 1,
  },
  {
    title: "Achievements",
    post_body:
      "No matter what you achieve, what you want to aspire to be, or how famous and powerful you become, the most important thing is whether you are excited about each and every moment of your life because of your work and people around you.",
    user_id: 4,
  },
  {
    title: "Be in the now",
    post_body:
      "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    user_id: 7,
  },
  {
    title: "Buddah Says",
    post_body:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    user_id: 4,
  },
  {
    title: "Dreams",
    post_body:
      "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    user_id: 1,
  },
  {
    title: "Know your voice",
    post_body:
      "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    user_id: 1,
  },
  {
    title: "Make an impact",
    post_body:
      "A life is not important except in the impact it has on other lives.",
    user_id: 9,
  },
  {
    title: "Isolation.",
    post_body:
      "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
    user_id: 5,
  },
  {
    title: "Everybody dies",
    post_body: "Every man dies. Not every man really lives.",
    user_id: 3,
  },
  {
    title: "Honor",
    post_body:
      "Guard your honor. Let your reputation fall where it will. And outlive the bastards.",
    user_id: 10,
  },
  {
    title: "Inspire others",
    post_body:
      "Many people think that if they were only in some other place, or had some other job, they would be happy. Well, that is doubtful. So get as much happiness out of what you are doing as you can and don't put off being happy until some future date.",
    user_id: 8,
  },
  {
    title: "Balance",
    post_body: "What I dream of is an art of balance.",
    user_id: 3,
  },
  {
    title: "Words of power",
    post_body: "One kind word can warm three winter months.",
    user_id: 3,
  },
  {
    title: "Old wisdom",
    post_body:
      "Forsake not an old friend; for the new is not comparable to him: a new friend is as new wine; when it is old, thou shalt drink it with pleasure.",
    user_id: 7,
  },
  {
    title: "Manners",
    post_body:
      "She was a woman who, between courses, could be graceful with her elbows on the table.",
    user_id: 6,
  },
  {
    title: "Inner Garden",
    post_body:
      "Gardens and flowers have a way of bringing people together, drawing them from their homes.",
    user_id: 4,
  },
  {
    title: "Never say never",
    post_body:
      "Never say never, for if you live long enough, chances are you will not be able to abide by its restrictions. Never is a long, undependable time, and life is too full of rich possibilities to have restrictions placed upon it.",
    user_id: 6,
  },
  {
    title: "Dang weasels!",
    post_body:
      "Eagles may soar, but weasels don't get sucked into jet engines.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
