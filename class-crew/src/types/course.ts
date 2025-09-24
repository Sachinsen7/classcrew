export interface Course {
  id: string;
  title: string;
  description: string;
  priceText?: string;
  price: string | number;
  date: string | Date;
  category: string;
  tagText: string;
  tagColor: string;
  tags: string[];
  image?: string;
  target?: string;
  duration?: string;
  location?: string;
}
