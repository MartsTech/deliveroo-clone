interface RestaurantModel {
  _type: 'restaurant';
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  lat: number;
  long: number;
  rating: number;
  address: string;
  image: Image;
  category: CategoryModel;
  dishes: DishModel[];
}
