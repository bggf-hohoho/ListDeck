import { StyleType, Vendor } from './types';

export const INITIAL_VENDORS: Vendor[] = [
  {
    id: '1',
    role: '傻妹一枚，請支援捧花🥰',
    name: '妤睿Ray',
    handle: 'ray_wedding_host',
    url: 'https://www.instagram.com/ray_wedding_host',
    imageUrl: 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t39.30808-6/401263420_364163156133422_6906165210537268974_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wd9rwQiR4Y8Q7kNvwHoNMb_&_nc_oc=AdlPhe5-UfM1h_rwC-9KiHVxDDJz6jY8SJLlHrb-mACkFUqz0vDPdhVgpv0CZl-G-Yk&_nc_zt=23&_nc_ht=scontent.fkhh1-1.fna&_nc_gid=9zziu8VIy6CKdHie20ZlKg&oh=00_Afl-qvJTabTrWB7EZAC8g2sxTVfBoSSCqwYYvnPzYHAXPA&oe=69380021',
    scale: 50,
  },
  {
    id: '2',
    role: '婚禮主持',
    name: '小豐',
    handle: 'Bgg.Feng',
    url: 'https://www.instagram.com/Bgg.Feng',
    imageUrl: 'https://scontent.fkhh1-2.fna.fbcdn.net/v/t39.30808-6/308606892_493333446137991_866753150527897559_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wY0Bg8JpHhEQ7kNvwHcDXR3&_nc_oc=Adnl_Tb-ItiJ7vSxQMNEAtajlUhxE6uC2QuccvZN5j421MB9dB5nsZibc4dleWMvDDE&_nc_zt=23&_nc_ht=scontent.fkhh1-2.fna&_nc_gid=JZMevhKNiweWAjZ5NnwuIA&oh=00_AfmqQSfzjFDlanwrG5KwPkMkhgs7GWzyCBvrqIJx7rRoNA&oe=693807EF',
    scale: 50,
  },
  {
    id: '3',
    role: '台中好吃，佤漾南洋料理',
    name: 'WAYAN',
    handle: 'wayan.tw',
    url: 'https://www.instagram.com/wayan.tw',
    imageUrl: 'https://static.wixstatic.com/media/8c334e_55010d75c4a142aca8d074b3269eb857~mv2.png/v1/fill/w_562,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wayan%20logo%20color%20on%20transparent.png',
    scale: 50,
  }
];

export const PRESET_VENDORS: Vendor[] = [];

export const STYLE_CONFIG = {
  // 1. 優雅極簡
  [StyleType.ELEGANT_MINIMAL]: {
    label: '優雅極簡',
    subLabel: 'Elegant Minimal',
    bg: 'bg-[#f8f5f2]',
    text: 'text-[#4a4a4a]',
    accent: 'text-[#8b7355]',
  },
  // 2. 活潑撞色
  [StyleType.PLAYFUL_POP]: {
    label: '活潑撞色',
    subLabel: 'Playful Pop',
    bg: 'bg-[#FFDEE9]',
    text: 'text-[#2d3436]',
    accent: 'text-[#d63031]',
  },
  // 3. 清新森林
  [StyleType.RUSTIC_GARDEN]: {
    label: '清新森林',
    subLabel: 'Rustic Garden',
    bg: 'bg-[#F0F4F1]',
    text: 'text-[#2F3E32]',
    accent: 'text-[#4A6741]',
  },
  // 5. 粉彩萌系 (Moved to #5)
  [StyleType.CUTE_KAWAII]: {
    label: '粉彩萌系',
    subLabel: 'Kawaii',
    bg: 'bg-[#FFF0F5]',
    text: 'text-[#555]',
    accent: 'text-[#FF69B4]',
  },
  // 6. 復古拍立得
  [StyleType.VINTAGE_POLAROID]: {
    label: '復古拍立得',
    subLabel: 'Vintage Polaroid',
    bg: 'bg-[#E8E6E1]',
    text: 'text-[#333333]',
    accent: 'text-[#555555]',
  },
  // 7. 侘寂美學 (Moved to #7)
  [StyleType.WABI_SABI]: {
    label: '侘寂美學',
    subLabel: 'Wabi-Sabi',
    bg: 'bg-[#D6C6B0]',
    text: 'text-[#4A4036]',
    accent: 'text-[#786C5E]',
  },
  // 8. 波西米亞
  [StyleType.BOHO_CHIC]: {
    label: '波西米亞',
    subLabel: 'Boho Chic',
    bg: 'bg-[#E6D0C3]',
    text: 'text-[#5D4037]',
    accent: 'text-[#A16E5C]',
  },
  // 9. 復古奢華
  [StyleType.ART_DECO]: {
    label: '復古奢華',
    subLabel: 'Art Deco',
    bg: 'bg-[#1a1a1a]',
    text: 'text-[#C5A582]', // Desaturated gold
    accent: 'text-[#E8DCC5]',
  },
  // 10. 美式畫風
  [StyleType.COMIC_POP]: {
    label: '美式畫風',
    subLabel: 'Comic Pop',
    bg: 'bg-[#FFEB3B]',
    text: 'text-black',
    accent: 'text-[#F44336]',
  },
  // Others
  [StyleType.ANIME_MANGA]: {
    label: '復古雜誌',
    subLabel: 'Vintage Magazine',
    bg: 'bg-[#fff]',
    text: 'text-black',
    accent: 'text-[#ff0000]',
  },
  [StyleType.WATERCOLOR_DREAM]: {
    label: '夢幻水彩',
    subLabel: 'Watercolor',
    bg: 'bg-white',
    text: 'text-[#555]',
    accent: 'text-[#FF9A9E]',
  },
  [StyleType.IOS_MODERN]: {
    label: 'iOS 風格',
    subLabel: 'iOS Modern',
    bg: 'bg-[#F2F2F7]',
    text: 'text-black',
    accent: 'text-[#007AFF]',
  },
  [StyleType.COFFEE_HOUSE]: {
    label: '星巴克風',
    subLabel: 'Coffee House',
    bg: 'bg-[#F8F8F8]',
    text: 'text-[#1E3932]',
    accent: 'text-[#00704A]',
  },
};