import {client} from '../sanity';

const fetchFeaturedList = async () => {
  const data = await client.fetch(featuredListQuery);
  return data as FeaturedModel[];
};

export default fetchFeaturedList;

const featuredListQuery = `
*[_type == 'featured']{
  _type,
  _id,
  _rev,
  _createdAt,
  _updatedAt,
  title,
  description,
  restaurants[] -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    description,
    lat,
    long,
    rating,
    address,
    image,
    category -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    image,
    },
    dishes[] -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      title,
      description,
      price,
      image
    }
  }
} | order(_createdAt asc)`;
