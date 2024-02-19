export interface IHttpResponse<T> {
  statusCode: number;
  data: T | null;
  metadata?: object;
  success: boolean;
  message?: string;
  messageUser?: string;
}

export interface IAiResponse {
  recipes: {
    name: string;
    rating: number;
    description: string;
    image: {
      description: string;
      link: string;
    };
    instructions: string[];
    ingredientsPlate: {
      name: string;
      quantity: string;
    }[];
  }[];
}
