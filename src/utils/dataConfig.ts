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

export const widgetArray = [
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

export const darkModeArray = [
  {
    title: 'LIGHT',
    key: 'light',
  },
  {
    title: 'DARK',
    key: 'dark',
  },
];

export const listMemberGroup = [
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
