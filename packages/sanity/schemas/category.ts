export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
