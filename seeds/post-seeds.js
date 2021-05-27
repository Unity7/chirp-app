const { Post } = require("../models");

const postdata = [
  {
    title: "There is nothing to fear but fear itself",
    user_id: 10,
  },
  {
    title: "Random Acts of Kindness",
    user_id: 8,
  },
  {
    title: "Don't miss out!",
    user_id: 1,
  },
  {
    title: "Achievements",
    user_id: 4,
  },
  {
    title: "Be in the now",
    user_id: 7,
  },
  {
    title: "Buddah Says",
    user_id: 4,
  },
  {
    title: "Dreams",
    user_id: 1,
  },
  {
    title: "Know your voice",
    user_id: 1,
  },
  {
    title: "Make an impact",
    user_id: 9,
  },
  {
    title: "Isolation.",
    user_id: 5,
  },
  {
    title: "Everybody dies",
    user_id: 3,
  },
  {
    title: "Honor",
    user_id: 10,
  },
  {
    title: "Inspire others",
    user_id: 8,
  },
  {
    title: "Balance",
    user_id: 3,
  },
  {
    title: "Words of power",
    user_id: 3,
  },
  {
    title: "Old wisdom",
    user_id: 7,
  },
  {
    title: "Manners",
    user_id: 6,
  },
  {
    title: "Inner Garden",
    user_id: 4,
  },
  {
    title: "Never say never",
    user_id: 6,
  },
  {
    title: "Dang weasels!",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
