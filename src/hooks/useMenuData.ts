import { useLanguage } from '../context/LanguageContext';

export interface CustomizationOption {
  id: string;
  name: string;
  price?: number;
}

export interface CustomizationCategory {
  id: string;
  name: string;
  type: 'single' | 'multiple';
  options: CustomizationOption[];
  required?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
  desc?: string;
  customizations?: CustomizationCategory[];
}

export function useMenuData() {
  const { t } = useLanguage();

  const menuItems: MenuItem[] = [
    // Breakfast
    { 
      id: 'b1', 
      name: t('menu.items.cheeseOmelet'), 
      price: 6.50, 
      category: t('menu.categories.breakfast'), 
      desc: t('menu.desc.cheeseOmelet'),
      img: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'addons',
          name: t('order.customizations.addons'),
          type: 'multiple',
          options: [
            { id: 'extraCheese', name: t('order.customizations.extraCheese'), price: 1.00 },
            { id: 'noOnions', name: t('order.customizations.noOnions') },
            { id: 'mushrooms', name: t('order.customizations.mushrooms'), price: 0.50 }
          ]
        }
      ]
    },
    { 
      id: 'b2', 
      name: t('menu.items.shakshuka'), 
      price: 8.50, 
      category: t('menu.categories.breakfast'), 
      desc: t('menu.desc.shakshuka'),
      img: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'bread',
          name: t('order.customizations.breadChoice'),
          type: 'single',
          required: true,
          options: [
            { id: 'sourdough', name: t('order.customizations.sourdough') },
            { id: 'baguette', name: t('order.customizations.baguette') }
          ]
        }
      ]
    },
    { 
      id: 'b3', 
      name: t('menu.items.frenchToast'), 
      price: 7.00, 
      category: t('menu.categories.breakfast'), 
      desc: t('menu.desc.frenchToast'),
      img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: 'b4', 
      name: t('menu.items.vegetableOmelet'), 
      price: 7.50, 
      category: t('menu.categories.breakfast'), 
      desc: t('menu.desc.vegetableOmelet'),
      img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'addons',
          name: t('order.customizations.addons'),
          type: 'multiple',
          options: [
            { id: 'extraCheese', name: t('order.customizations.extraCheese'), price: 1.00 },
            { id: 'noOnions', name: t('order.customizations.noOnions') }
          ]
        }
      ]
    },

    // Lunch
    { 
      id: 'l1', 
      name: t('menu.items.mandiMeat'), 
      price: 14.00, 
      category: t('menu.categories.lunch'), 
      desc: t('menu.desc.mandiMeat'),
      img: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'addons',
          name: t('order.customizations.addons'),
          type: 'multiple',
          options: [
            { id: 'extraRice', name: t('order.customizations.extraRice'), price: 2.00 },
            { id: 'spicySauce', name: t('order.customizations.spicySauce'), price: 0.50 }
          ]
        }
      ]
    },
    { 
      id: 'l2', 
      name: t('menu.items.greenSalad'), 
      price: 5.50, 
      category: t('menu.categories.lunch'), 
      desc: t('menu.desc.greenSalad'),
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: 'l3', 
      name: t('menu.items.lentilSoup'), 
      price: 4.50, 
      category: t('menu.categories.lunch'), 
      desc: t('menu.desc.lentilSoup'),
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=200&q=80' 
    },

    // Fresh Pastry
    { 
      id: '1', 
      name: t('menu.items.butterCroissant'), 
      price: 4.50, 
      category: t('menu.categories.pastry'), 
      desc: t('menu.desc.butterCroissant'),
      img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '2', 
      name: t('menu.items.painAuChocolat'), 
      price: 5.00, 
      category: t('menu.categories.pastry'), 
      desc: t('menu.desc.painAuChocolat'),
      img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '3', 
      name: t('menu.items.almondCroissant'), 
      price: 5.50, 
      category: t('menu.categories.pastry'), 
      desc: t('menu.desc.almondCroissant'),
      img: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '4', 
      name: t('menu.items.fruitDanish'), 
      price: 5.00, 
      category: t('menu.categories.pastry'), 
      desc: t('menu.desc.fruitDanish'),
      img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=200&q=80' 
    },
    
    // Artisanal Bread
    { 
      id: '5', 
      name: t('menu.items.sourdoughBoule'), 
      price: 8.00, 
      category: t('menu.categories.bread'), 
      desc: t('menu.desc.sourdoughBoule'),
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '6', 
      name: t('menu.items.frenchBaguette'), 
      price: 4.00, 
      category: t('menu.categories.bread'), 
      desc: t('menu.desc.frenchBaguette'),
      img: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '7', 
      name: t('menu.items.oliveHerbFougasse'), 
      price: 6.50, 
      category: t('menu.categories.bread'), 
      desc: t('menu.desc.oliveHerbFougasse'),
      img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '8', 
      name: t('menu.items.wholeWheatLoaf'), 
      price: 7.00, 
      category: t('menu.categories.bread'), 
      desc: t('menu.desc.wholeWheatLoaf'),
      img: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=200&q=80' 
    },

    // Coffee & Beverages
    { 
      id: '9', 
      name: t('menu.items.espresso'), 
      price: 3.50, 
      category: t('menu.categories.coffee'), 
      desc: t('menu.desc.espresso'),
      img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'milk',
          name: t('order.customizations.milkChoice'),
          type: 'single',
          options: [
            { id: 'wholeMilk', name: t('order.customizations.wholeMilk') },
            { id: 'oatMilk', name: t('order.customizations.oatMilk'), price: 0.50 },
            { id: 'almondMilk', name: t('order.customizations.almondMilk'), price: 0.50 }
          ]
        }
      ]
    },
    { 
      id: '10', 
      name: t('menu.items.cappuccino'), 
      price: 4.50, 
      category: t('menu.categories.coffee'), 
      desc: t('menu.desc.cappuccino'),
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=200&q=80',
      customizations: [
        {
          id: 'milk',
          name: t('order.customizations.milkChoice'),
          type: 'single',
          options: [
            { id: 'wholeMilk', name: t('order.customizations.wholeMilk') },
            { id: 'oatMilk', name: t('order.customizations.oatMilk'), price: 0.50 },
            { id: 'almondMilk', name: t('order.customizations.almondMilk'), price: 0.50 }
          ]
        },
        {
          id: 'sweetness',
          name: t('order.customizations.sweetness'),
          type: 'single',
          options: [
            { id: 'regular', name: t('order.customizations.regular') },
            { id: 'lessSweet', name: t('order.customizations.lessSweet') },
            { id: 'noSugar', name: t('order.customizations.noSugar') }
          ]
        }
      ]
    },
    { 
      id: '11', 
      name: t('menu.items.coldBrew'), 
      price: 5.00, 
      category: t('menu.categories.coffee'), 
      desc: t('menu.desc.coldBrew'),
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: '12', 
      name: t('menu.items.freshOrangeJuice'), 
      price: 6.00, 
      category: t('menu.categories.coffee'), 
      desc: t('menu.desc.freshOrangeJuice'),
      img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=200&q=80' 
    },
  ];

  return menuItems;
}
