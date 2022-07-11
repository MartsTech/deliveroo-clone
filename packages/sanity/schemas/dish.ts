export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
