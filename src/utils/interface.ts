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
  mode: boolean;
}

export interface iPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  like: number;
  dislike: number;
  is_liked?: number;
  content: string;
}

export interface iTitle {
  title: string;
}

export interface iMode {
  mode: boolean;
}

export interface iCategory {
  name: string;
  key: string;
}

export interface iUserRegister {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface iUser {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface iUserLogin {
  username: string;
  password: string;
}
