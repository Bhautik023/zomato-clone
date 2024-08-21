export interface RestaurantItemPropsType {
  restaurantName: string;
  key: number;
  id: number;
  rating: number;
  image: string;
  foodType: string;
  items: { id: Number; name: string; price: Number }[];
}