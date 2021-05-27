const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Great! I love this!",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: "Kudos to you!",
    user_id: 6,
    post_id: 8,
  },
  {
    comment_text: "This is a great quote!",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text: "You are awesome!",
    user_id: 3,
    post_id: 18,
  },
  {
    comment_text: "I can relate to this!",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Awesome!",
    user_id: 1,
    post_id: 20,
  },
  {
    comment_text: "I agree with this 100%",
    user_id: 6,
    post_id: 7,
  },
  {
    comment_text: "If you think about it; it makes a lot of sense",
    user_id: 7,
    post_id: 4,
  },
  {
    comment_text: "I think I found my new profile quote!",
    user_id: 6,
    post_id: 12,
  },
  {
    comment_text: "Do it for the memes!",
    user_id: 6,
    post_id: 20,
  },
  {
    comment_text: "Let's get it!",
    user_id: 3,
    post_id: 14,
  },
  {
    comment_text: "This is really cool",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: "I don't understand this at all...",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text: "I sit just me or is anyone else lost? Haha",
    user_id: 5,
    post_id: 14,
  },
  {
    comment_text: "What?",
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: "Ok I can dig it",
    user_id: 8,
    post_id: 2,
  },
  {
    comment_text: "What do you mean by this?",
    user_id: 2,
    post_id: 20,
  },
  {
    comment_text: "Great post!",
    user_id: 4,
    post_id: 11,
  },
  {
    comment_text:
      "Awesome, I can relate to this quote and will keep it with me.",
    user_id: 5,
    post_id: 13,
  },
  {
    comment_text: "That is what I am talking about!",
    user_id: 9,
    post_id: 16,
  },
  {
    comment_text: "Yessir!",
    user_id: 6,
    post_id: 4,
  },
  {
    comment_text: "keep up the great work!",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "that's cool",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: "it's alright",
    user_id: 8,
    post_id: 10,
  },
  {
    comment_text: "Guess what?",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Yes I can agree",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "No I cannot agree",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Has someone else looked into this?",
    user_id: 4,
    post_id: 16,
  },
  {
    comment_text: "Thank you for sharing...",
    user_id: 4,
    post_id: 18,
  },
  {
    comment_text: "Thanks for posting",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "Nice post",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Kudos on your post.",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "Very nice",
    user_id: 3,
    post_id: 19,
  },
  {
    comment_text: "Awesome thoughts",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "This is very useful, thank you.",
    user_id: 10,
    post_id: 14,
  },
  {
    comment_text: "Awesome, I come here for this",
    user_id: 10,
    post_id: 8,
  },
  {
    comment_text: "niceeeeeeeeeeeeeeee",
    user_id: 10,
    post_id: 11,
  },
  {
    comment_text: "I understand",
    user_id: 8,
    post_id: 5,
  },
  {
    comment_text: "Proin at turpis a pede posuere nonummy.",
    user_id: 8,
    post_id: 19,
  },
  {
    comment_text: "We will have to wait and see",
    user_id: 9,
    post_id: 19,
  },
  {
    comment_text: "Alright that sounds correct",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: "This is in my wheelhouse",
    user_id: 2,
    post_id: 11,
  },
  {
    comment_text: "This should have been said sooner",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text: "You can say this again",
    user_id: 9,
    post_id: 6,
  },
  {
    comment_text: "awesome post. I will upvote.",
    user_id: 7,
    post_id: 9,
  },
  {
    comment_text: "Take my upvote!",
    user_id: 4,
    post_id: 19,
  },
  {
    comment_text: "nice ! upvoted",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "This sounds familiar.",
    user_id: 2,
    post_id: 19,
  },
  {
    comment_text: "I have heard this somewhere before",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "We will see about that",
    user_id: 10,
    post_id: 12,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
