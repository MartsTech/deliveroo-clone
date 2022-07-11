export default {
  name: "featured",
  title: "Featured",
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
      name: "restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
