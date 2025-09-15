export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;      
  priceText?: string; 
  date: String;         
  price: string | number;
  priceText?: string;
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
