export interface iDataPosts {
  key: number;
  data: {
    id: number;
    category: string;
    title: string;
    author: string;
    date: string;
    like: number;
    dislike: number;
    is_liked?: number;
    content: string;
  };
}

export interface iTitle {
  title: string;
}

export interface iCategory {
  name: string;
  key: string;
}
