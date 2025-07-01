export interface Category {
  _id: string;
  name: string;
  description: string;
  status: "Active" | "Inactive";
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface CategoryResponse {
  success: boolean;
  message: string;
  data: Category[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}