import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    src: "https://i.ibb.co/SX0qnNy/shri-q-Er-Pvf-IV4-unsplash-1.jpg"
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    src: "https://i.ibb.co/x1YzHd5/shiromani-kant-Tg-ILZ-c06-E-unsplash.jpg"
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers. Beware might cause nightmares.",
      src: "https://i.ibb.co/ggcJdj3/stormseeker-r-X12-B5u-X7-QM-unsplash.jpg" 
  },
];
