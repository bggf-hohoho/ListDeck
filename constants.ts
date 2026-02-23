import { StyleType, Vendor } from './types';

// 作者：小豐 的大頭貼 (臉部照片)
export const AUTHOR_AVATAR_URL = "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/308606892_493333446137991_866753150527897559_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=vGXRAiUB4xYQ7kNvwER4Pey&_nc_oc=AdlnbAwezmA5biqECfOqz0AfA3ZbjeUvGSXYtClkXbRUfu2jha72yVo2CXAWJtlQk1Q&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=5o8wzhrazYo36QCf7nlr6w&oh=00_AfvZcCjVokFd2m2_s7pQ_WICOwYeTFNFJCwQNiR9fIZwjw&oe=69A228AF";

// 介面專用小圖示 (預覽、輸出按鈕等)
export const UI_ICON_URL = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/92353989_125022249140816_578947242015064064_n.png?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=gsQTEGtSl7oQ7kNvwFWPpWu&_nc_oc=AdkvLL0VWxUw76ro-gO7S7Gr_QgH8_WfwHDmZajeWXN4oRzC1U3d7tx6j-TplewwZ78&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=b_Jrj7qkmlx-bOq96UE7tw&oh=00_AfvjBUdMw0KVF5AKGMkxwm80Z4E0t9fnNqO2O1I7FoVnPw&oe=69C3CD86";

export const FALLBACK_AVATAR_URL = "https://ui-avatars.com/api/?name=User&background=f3f4f6&color=B76E79&rounded=true&bold=true";

export const INITIAL_VENDORS: Vendor[] = [
  {
    id: '1',
    role: '傻妹一枚，請支援捧花🥰',
    name: '妤睿Ray',
    handle: 'ray_wedding_host',
    url: 'https://www.instagram.com/ray_wedding_host',
    imageUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/401263420_364163156133422_6906165210537268974_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=881vKjNj7UoQ7kNvwGy-FNN&_nc_oc=Adn62BR024pdq2jKPlYLtTTDKdNUrfIUHTYQxh5avpiueAva63xtTXU0DUt-NBaDoRA&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=GpGuVT-807Ss-ar1TqqwDg&oh=00_AftOeBhdlpyfQ3SsU2uBopMOiMYZq_dKAg4TLZIhtxNNtQ&oe=69A220E1',
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