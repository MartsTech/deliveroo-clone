interface DishModel {
  _type: 'dish';
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  price: number;
  image: Image;
}
