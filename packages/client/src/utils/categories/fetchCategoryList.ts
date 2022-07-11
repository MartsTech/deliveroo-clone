import {client} from '../sanity';

const fetchCategoryList = async () => {
  const data = await client.fetch(categoryListQuery);
  return data as CategoryModel[];
};

export default fetchCategoryList;

const categoryListQuery = `
*[_type == 'category']{
  _type,
  _id,
  _rev,
  _createdAt,
  _updatedAt,
  title,
  image,
} | order(_createdAt asc)`;
