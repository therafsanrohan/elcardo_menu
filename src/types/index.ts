export type CuisineType = 'indian' | 'thai' | 'cafe' | 'all';

export interface MenuItemVariant {
  id: string;
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  serial: number;
  name: string;
  description: string;
  price?: number;
  variants?: MenuItemVariant[];
  cuisine: CuisineType;
  category: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}
