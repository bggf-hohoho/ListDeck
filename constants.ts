import { StyleType, Vendor } from './types';

// 作者：小豐 的大頭貼 (使用使用者先前提供的網址)
export const AUTHOR_AVATAR_URL = "https://scontent.fkhh1-2.fna.fbcdn.net/v/t39.30808-6/308606892_493333446137991_866753150527897559_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hTec36x_PiYQ7kNvwHDT0-w&_nc_oc=AdmEGy5_kLDfR5Xg84gfroOKRvSSY6S9i84jRmqg8iYbkja9LKVBncYXqXNaIaSmLj0&_nc_zt=23&_nc_ht=scontent.fkhh1-2.fna&_nc_gid=La1R28fJFikmtWxbtO9gGw&oh=00_Aflsx9jc9NG3fgzmIsXV3A2G5StBtM0iY7wAxBvEJ-El6A&oe=69499BEF";
export const FALLBACK_AVATAR_URL = "https://ui-avatars.com/api/?name=User&background=f3f4f6&color=B76E79&rounded=true&bold=true";

export const INITIAL_VENDORS: Vendor[] = [
  {
    id: '1',
    role: '傻妹一枚，請支援捧花🥰',
    name: '妤睿Ray',
    handle: 'ray_wedding_host',
    url: 'https://www.instagram.com/ray_wedding_host',
    // 修正：更換為使用者指定的固定 FB CDN 網址
    imageUrl: 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t39.30808-6/401263420_364163156133422_6906165210537268974_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JvHfo8GnN8QQ7kNvwFCrU3e&_nc_oc=AdmXVzVwqndP3t-UXq4qem3fdJyVmG8wREaXAaEXVvOIM_gchrgPyOvnBN2EiP1mvRM&_nc_zt=23&_nc_ht=scontent.fkhh1-1.fna&_nc_gid=aLpU1eBbD8Xj3uGMfsfTkg&oh=00_AfkjXshwaR2w5trVqL9Use0d2KQU0RIGvpUXLe1i_GmjWQ&oe=69499421',
    scale: 50,
    showHandle: true,
  },
  {
    id: '2',
    role: '婚禮主持',
    name: '小豐',
    handle: 'Bgg.Feng',
    url: 'https://www.instagram.com/Bgg.Feng',
    imageUrl: AUTHOR_AVATAR_URL,
    scale: 50,
    showHandle: true,
  },
  {
    id: '3',
    role: '台中好吃，佤漾南洋料理',
    name: 'WAYAN',
    handle: 'wayan.tw',
    url: 'https://www.instagram.com/wayan.tw',
    imageUrl: 'https://static.wixstatic.com/media/8c334e_55010d75c4a142aca8d074b3269eb857~mv2.png/v1/fill/w_562,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wayan%20logo%20color%20on%20transparent.png',
    scale: 50,
    showHandle: true,
  }
];

export const PRESET_VENDORS: Vendor[] = [
  {
    id: 'preset-4',
    role: '一般女性孕產婦按摩',
    name: '泌乳明師',
    handle: 'mizooming',
    url: 'https://www.instagram.com/mizooming',
    imageUrl: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=400&auto=format&fit=crop',
    scale: 50,
    showHandle: true,
  },
  {
    id: 'preset-5',
    role: '逢甲知名早午餐',
    name: 'LOWCA勞咖早午餐',
    handle: 'lowca__',
    url: 'https://www.instagram.com/lowca__',
    imageUrl: 'https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=400&auto=format&fit=crop',
    scale: 50,
    showHandle: true,
  }
];

export const STYLE_CONFIG = {
  [StyleType.ELEGANT_MINIMAL]: {
    label: '優雅極簡',
    subLabel: 'Elegant Minimal',
    bg: 'bg-[#f8f5f2]',
    text: 'text-[#4a4a4a]',
    accent: 'text-[#8b7355]',
  },
  [StyleType.PLAYFUL_POP]: {
    label: '活潑撞色',
    subLabel: 'Playful Pop',
    bg: 'bg-[#FFDEE9]',
    text: 'text-[#2d3436]',
    accent: 'text-[#d63031]',
  },
  [StyleType.RUSTIC_GARDEN]: {
    label: '清新森林',
    subLabel: 'Rustic Garden',
    bg: 'bg-[#F0F4F1]',
    text: 'text-[#2F3E32]',
    accent: 'text-[#4A6741]',
  },
  [StyleType.CUTE_KAWAII]: {
    label: '粉彩萌系',
    subLabel: 'Kawaii',
    bg: 'bg-[#FFF0F5]',
    text: 'text-[#555]',
    accent: 'text-[#FF69B4]',
  },
  [StyleType.VINTAGE_POLAROID]: {
    label: '復古拍立得',
    subLabel: 'Vintage Polaroid',
    bg: 'bg-[#E8E6E1]',
    text: 'text-[#333333]',
    accent: 'text-[#555555]',
  },
  [StyleType.WABI_SABI]: {
    label: '侘寂美學',
    subLabel: 'Wabi-Sabi',
    bg: 'bg-[#D6C6B0]',
    text: 'text-[#4A4036]',
    accent: 'text-[#786C5E]',
  },
  [StyleType.BOHO_CHIC]: {
    label: '波西米亞',
    subLabel: 'Boho Chic',
    bg: 'bg-[#E6D0C3]',
    text: 'text-[#5D4037]',
    accent: 'text-[#A16E5C]',
  },
  [StyleType.ART_DECO]: {
    label: '復古奢華',
    subLabel: 'Art Deco',
    bg: 'bg-[#1a1a1a]',
    text: 'text-[#C5A582]',
    accent: 'text-[#E8DCC5]',
  },
  [StyleType.COMIC_POP]: {
    label: '美式畫風',
    subLabel: 'Comic Pop',
    bg: 'bg-[#FFEB3B]',
    text: 'text-black',
    accent: 'text-[#F44336]',
  },
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