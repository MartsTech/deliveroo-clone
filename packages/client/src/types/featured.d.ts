interface FeaturedModel {
  _type: 'featured';
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  restaurants: RestaurantModel[];
}
