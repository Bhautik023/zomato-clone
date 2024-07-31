export interface Restaurant {
  id: number;
  restaurantName: string;
  categories: string[];
  foodType: string;
  rating: number;
  location: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  items: { id: Number; name: string; price: Number }[];
}

export interface RestaurantsResponse {
  restaurant: Restaurant[];
}
