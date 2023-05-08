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
    is_liked: number;
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
  is_liked: number;
  content: string;
}

export interface iTitle {
  title: string;
}

export interface iMode {
  mode: boolean;
}

export interface iCategory {
  value: string;
  label: string;
}

export interface iUserRegister {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface iUser {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface iUserLogin {
  username: string;
  password: string;
}

export interface iUserProfile {
  avatar: string;
  name: string;
  dob: Date;
  gender: string;
  address: string;
  email: string;
}

export interface iContent {
  category: string;
  title: string;
  banner: string;
  body: string;
}

export interface iComment {
  name: string;
  comment: string;
  time: string;
}
