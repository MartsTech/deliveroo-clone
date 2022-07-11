export default {
  name: "restaurant",
  title: "Restaurant",
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
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lat",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "long",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a rating between 1 and 5"),
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
