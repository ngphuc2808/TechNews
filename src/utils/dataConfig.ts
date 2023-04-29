interface iNavBar {
  title: string;
  key: string;
  submenu?: boolean;
}
export const navBarArray: iNavBar[] = [
  {
    title: 'Trang chủ',
    key: 'Home',
  },
  {
    title: 'Danh mục',
    key: 'Category',
    submenu: true,
  },
  {
    title: 'Cộng đồng',
    key: 'Community',
  },
  {
    title: 'Đóng góp',
    key: 'Contribute',
  },
  {
    title: 'Về chúng tôi',
    key: 'About',
  },
];

interface iWidget {
  title: string;
  key: string;
}
export const widgetArray: iWidget[] = [
  {
    title: 'Gần đây',
    key: 'Recent',
  },
  {
    title: 'Phổ biến',
    key: 'Popular',
  },
  {
    title: 'Xem nhiều',
    key: 'Trendy',
  },
];

interface iDarkMode {
  title: string;
  key: string;
}
export const darkModeArray: iDarkMode[] = [
  {
    title: 'LIGHT',
    key: 'light',
  },
  {
    title: 'DARK',
    key: 'dark',
  },
];

interface iListMemberGroup {
  name: string;
  id: number;
  phone: string;
  mail: string;
  role: string;
}
export const listMemberGroup: iListMemberGroup[] = [
  {
    name: 'Mr. Hoàng Phúc',
    id: 19110268,
    phone: '0906391823',
    mail: '19110268@student.hcmute.edu.vn',
    role: 'Frontend Developer',
  },
  {
    name: 'Mr. Trường Giang',
    id: 19110194,
    phone: '0385536438',
    mail: '19110194@student.hcmute.edu.vn',
    role: 'Frontend Developer',
  },
  {
    name: 'Mr. Quyết Thắng',
    id: 19110291,
    phone: '0399791322',
    mail: '19110291@student.hcmute.edu.vn',
    role: 'Backend Developer',
  },
  {
    name: 'Mr. Thanh Nhã',
    id: 19110250,
    phone: '0965163425',
    mail: '19110250@student.hcmute.edu.vn',
    role: 'Backend Developer',
  },
  {
    name: 'Mr. Phi Anh',
    id: 19110512,
    phone: '0336260736',
    mail: '19110512@student.hcmute.edu.vn',
    role: 'Backend Developer',
  },
];

interface iPost {
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
export const post: iPost[] = [
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 1,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 2,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 2,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 0,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 3,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 0,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content:
      'For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is',
  },
  {
    id: 0,
    category: 'Smart Watch',
    title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
    author: 'Phucnh',
    date: 'November 6, 2019',
    like: 111,
    dislike: 110,
    is_liked: 1,
    content: 'Hihi',
  },
];

interface iCategory {
  name: string;
  key: string;
}
export const category: iCategory[] = [
  {
    name: 'Công nghệ',
    key: 'technology',
  },
  {
    name: 'Lập trình',
    key: 'program',
  },
];
