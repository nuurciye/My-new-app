export type Language = 'en' | 'so';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      orderOnline: 'Order Online',
      about: 'About',
      contact: 'Contact',
      search: 'Search menu...',
      noResults: 'No items found',
    },
    home: {
      banner: 'Special Offer: Get 20% off your first online order! Use code: UMUMARWAN20',
      heroTitle: 'FRESH PASTRY & BAKERY',
      heroSubtitle: 'Experience the finest pastries and breads, baked fresh daily with passion and the highest quality ingredients.',
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      features: {
        fresh: 'Fresh Daily',
        freshDesc: 'Baked fresh every morning before the sun comes up.',
        local: 'Local Ingredients',
        localDesc: 'Sourcing the finest ingredients from local farmers.',
        expert: 'Expert Bakers',
        expertDesc: 'Crafted by master bakers with decades of experience.'
      },
      gallery: {
        title: 'The Gallery',
        subtitle: 'Follow our journey and see our delicious creations on social media.',
        behindScenes: 'Behind the Scenes',
        freshOut: 'Fresh Out the Oven',
        signature: 'Our Signature Pastries'
      },
      specialties: {
        title: 'Our Specialties',
        subtitle: 'Discover why we are the top-rated bakery near you for fresh pastry and artisanal bread.',
        items: {
          croissant: {
            title: 'Classic Croissant',
            desc: 'Flaky, buttery, and baked fresh every morning.'
          },
          sourdough: {
            title: 'Sourdough Boule',
            desc: 'Our signature artisanal bread, fermented for 48 hours.'
          },
          tart: {
            title: 'Fruit Tart',
            desc: 'Seasonal fresh fruits on a crisp pastry shell.'
          }
        }
      },
      testimonial: {
        quote: "The best artisanal bread I've had in 2023. Umumarwan Restaurant truly understands the craft of fresh pastry. It's my go-to bakery near me.",
        author: '— Sarah Jenkins, Local Food Critic'
      }
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Handcrafted daily using the finest ingredients.',
      categories: {
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        pastry: 'Fresh Pastry',
        bread: 'Artisanal Bread',
        coffee: 'Coffee & Beverages'
      },
      items: {
        cheeseOmelet: 'Cheese Omelet',
        shakshuka: 'Shakshuka',
        frenchToast: 'French Toast',
        vegetableOmelet: 'Vegetable Omelet',
        mandiMeat: 'Mandi Meat',
        greenSalad: 'Green Salad',
        lentilSoup: 'Lentil Soup',
        butterCroissant: 'Butter Croissant',
        painAuChocolat: 'Pain au Chocolat',
        almondCroissant: 'Almond Croissant',
        fruitDanish: 'Fruit Danish',
        sourdoughBoule: 'Sourdough Boule',
        frenchBaguette: 'French Baguette',
        oliveHerbFougasse: 'Olive & Herb Fougasse',
        wholeWheatLoaf: 'Whole Wheat Loaf',
        espresso: 'Espresso',
        cappuccino: 'Cappuccino',
        coldBrew: 'Cold Brew',
        freshOrangeJuice: 'Fresh Orange Juice'
      },
      desc: {
        cheeseOmelet: 'Fluffy omelet with melted cheese',
        shakshuka: 'Eggs poached in a sauce of tomatoes, olive oil, peppers, onion and garlic',
        frenchToast: 'Classic french toast with maple syrup',
        vegetableOmelet: 'Healthy omelet with fresh mixed vegetables',
        mandiMeat: 'Traditional slow-cooked meat with fragrant rice',
        greenSalad: 'Fresh mixed greens with house dressing',
        lentilSoup: 'Warm and comforting blended lentil soup',
        butterCroissant: 'Classic flaky pastry',
        painAuChocolat: 'Dark chocolate filled',
        almondCroissant: 'Frangipane filling, sliced almonds',
        fruitDanish: 'Seasonal fruit, vanilla custard',
        sourdoughBoule: '48-hour fermentation',
        frenchBaguette: 'Crisp crust, airy crumb',
        oliveHerbFougasse: 'Kalamata olives, rosemary',
        wholeWheatLoaf: '100% organic whole grain',
        espresso: 'Double shot',
        cappuccino: 'Espresso, steamed milk, foam',
        coldBrew: 'Steeped for 24 hours',
        freshOrangeJuice: 'Squeezed to order'
      }
    },
    order: {
      title: 'Order Online',
      subtitle: 'Fresh pastry and artisanal bread available for pickup, delivery, or dine-in.',
      yourOrder: 'Your Order',
      emptyCart: 'Your cart is empty',
      delivery: 'Delivery',
      pickup: 'Pickup',
      dineIn: 'Dine-in',
      phone: 'Phone Number',
      phonePlaceholder: 'Enter your phone number',
      address: 'Delivery Address',
      addressPlaceholder: 'Enter your address in Mogadishu',
      tableNumber: 'Table Number',
      tablePlaceholder: 'e.g. 12',
      timeSlot: 'Time Slot',
      selectTime: 'Select a time',
      asap: 'ASAP (30-45 mins)',
      specialInstructions: 'Special Instructions (Optional)',
      specialPlaceholder: 'Add any special requests, allergies, or delivery notes...',
      subtotal: 'Subtotal',
      deliveryFee: 'Delivery Fee',
      estTime: 'Est. Time',
      total: 'Total',
      placeOrder: 'Place your order',
      promoCode: 'Promo Code',
      apply: 'Apply',
      discount: 'Discount (20%)',
      invalidCode: 'Invalid promo code',
      codeApplied: 'Promo code applied!',
      customize: 'Customize',
      addToCart: 'Add to Cart',
      cancel: 'Cancel',
      required: 'Required',
      optional: 'Optional',
      customizations: {
        breadChoice: 'Choose Bread',
        sourdough: 'Sourdough',
        wholeWheat: 'Whole Wheat',
        baguette: 'Baguette',
        addons: 'Add-ons',
        extraCheese: 'Extra Cheese',
        noOnions: 'No Onions',
        mushrooms: 'Mushrooms',
        milkChoice: 'Milk Choice',
        wholeMilk: 'Whole Milk',
        oatMilk: 'Oat Milk',
        almondMilk: 'Almond Milk',
        sweetness: 'Sweetness',
        regular: 'Regular',
        lessSweet: 'Less Sweet',
        noSugar: 'No Sugar',
        extraRice: 'Extra Rice',
        spicySauce: 'Spicy Sauce'
      },
      alerts: {
        phoneAddress: 'Please enter your phone number and delivery address',
        table: 'Please enter your table number',
        time: 'Please select a time slot'
      }
    },
    orderConfirmation: {
      title: 'Order Confirmed!',
      subtitle: "Thank you for your order. We've received it and are preparing it now.",
      details: 'Order Details',
      summary: 'Order Summary',
      estimatedTime: 'Estimated Time',
      specialInstructions: 'Special Instructions',
      backToHome: 'Back to Home',
      table: 'Table'
    },
    about: {
      title: 'Our Story',
      p1: 'Founded in 2023, Umumarwan Restaurant began with a simple mission: to bring authentic, artisanal bread and fresh pastry to our local community. What started as a small neighborhood bakery near you has grown into a beloved culinary destination.',
      p2: 'We believe that great baking requires patience, passion, and the finest ingredients. Our sourdough starters are nurtured daily, and our pastries are laminated by hand to achieve the perfect flaky texture.',
      p3: "Every morning, our bakers arrive before dawn to ensure that when you walk through our doors, you're greeted with the warm, comforting aroma of freshly baked goods. It's not just food; it's a craft we've dedicated our lives to perfecting.",
      year: 'Year Established',
      handcrafted: 'Handcrafted'
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We'd love to hear from you. Reach out for catering, special orders, or just to say hello.",
      location: 'Location',
      hours: 'Hours',
      hoursDesc: 'Mon-Sun: 8:00 AM - 10:00 PM\nFriday: 11:00 AM - 9:00 PM',
      phone: 'Phone',
      email: 'Email',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help?',
      send: 'Send Message'
    },
    footer: {
      desc: 'Artisanal bread and fresh pastry crafted with passion. Experience the finest bakery near you, serving authentic flavors since 2023.',
      quickLinks: 'Quick Links',
      visitUs: 'Visit Us',
      address: '28M7+485 Arbe Mall, W Taleex\nMogadishu, Somalia',
      rights: 'Umumarwan Restaurant. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      hours1: 'Mon-Sun: 8:00 AM - 10:00 PM',
      hours2: 'Friday: 11:00 AM - 9:00 PM'
    }
  },
  so: {
    nav: {
      home: 'Hoyga',
      menu: 'Liiska Cuntada',
      orderOnline: 'Dalbo Online',
      about: 'Ku Saabsan',
      contact: 'Nala Soo Xiriir',
      search: 'Raadi liiska...',
      noResults: 'Waxba lama helin',
    },
    home: {
      banner: 'Dalab Gaar ah: Hel 20% qiimo dhimis dalabkaaga ugu horreeya ee online-ka! Isticmaal koodhka: UMUMARWAN20',
      heroTitle: 'MACMAAN CUSUB & ROOTI',
      heroSubtitle: 'Khibrad u yeelo keegaga iyo rootiga ugu fiican, maalin kasta oo cusub lagu dubo jacayl iyo waxyaabaha ugu tayada sarreeya.',
      orderNow: 'Dalbo Hadda',
      viewMenu: 'Eeg Liiska',
      features: {
        fresh: 'Maalin Walba Waa Cusub',
        freshDesc: 'Subax kasta waa la dubaa ka hor inta aysan qorraxdu soo bixin.',
        local: 'Waxyaabaha Maxaliga ah',
        localDesc: 'Waxaan ka soo iibsanaa waxyaabaha ugu fiican beeralayda maxaliga ah.',
        expert: 'Dubiyeyaal Xirfad leh',
        expertDesc: 'Waxaa farsameeyay dubiyeyaal khibrad tobanaan sano ah leh.'
      },
      gallery: {
        title: 'Sawirada',
        subtitle: 'Kala soco safarkeena oo arag cuntooyinka macaan ee aan ku sameyno baraha bulshada.',
        behindScenes: 'Muuqaalada Daaha Dabadiisa',
        freshOut: 'Cusub oo Foorada Laga Soo Saaray',
        signature: 'Keegaga Aan Caan Ku Nahay'
      },
      specialties: {
        title: 'Cuntooyinka Aan Caan Ku Nahay',
        subtitle: 'Ogow sababta aan u nahay rooti-dubaha ugu qiimaynta sarreeya ee kuu dhow ee keegaga cusub iyo rootiga farsamada.',
        items: {
          croissant: {
            title: 'Croissant Caadi ah',
            desc: 'Qolof leh, subag leh, oo subax kasta cusub loo dubay.'
          },
          sourdough: {
            title: 'Rooti Sourdough',
            desc: 'Rootigayaga farsamada ee aan caanka ku nahay, oo la khamiiriyay 48 saacadood.'
          },
          tart: {
            title: 'Tart Miro leh',
            desc: 'Miro xilliyeed cusub oo ku jira qolof keeg oo qallafsan.'
          }
        }
      },
      testimonial: {
        quote: "Rootiga farsamada ee ugu fiican ee aan cunay 2023. Maqaayada Umumarwan waxay si dhab ah u fahmeysaa farsamada keegaga cusub. Waa rooti-dubaha aan aado ee ii dhow.",
        author: '— Sarah Jenkins, Naqdiye Cunto Maxalli ah'
      }
    },
    menu: {
      title: 'Liiska Cuntada',
      subtitle: 'Gacan lagu sameeyay jacayl, si fiican loo dubay.',
      categories: {
        breakfast: 'Quraac',
        lunch: 'Qado',
        pastry: 'Keegag Cusub',
        bread: 'Rooti Farsamo',
        coffee: 'Qaxwe & Cabbitaano'
      },
      items: {
        cheeseOmelet: 'Omelet Farmaajo leh',
        shakshuka: 'Shakshuka',
        frenchToast: 'Rooti Faransiis (French Toast)',
        vegetableOmelet: 'Omelet Khudaar leh',
        mandiMeat: 'Hilib Mandi',
        greenSalad: 'Salad Cagaaran',
        lentilSoup: 'Maraq Misir',
        butterCroissant: 'Croissant Subag leh',
        painAuChocolat: 'Rooti Shukulaato leh',
        almondCroissant: 'Croissant Yicib leh',
        fruitDanish: 'Danish Miro leh',
        sourdoughBoule: 'Rooti Sourdough',
        frenchBaguette: 'Rooti Faransiis ah',
        oliveHerbFougasse: 'Fougasse Saytuun & Geedo leh',
        wholeWheatLoaf: 'Rooti Qamadi ah',
        espresso: 'Espresso',
        cappuccino: 'Cappuccino',
        coldBrew: 'Qaxwe Qabow',
        freshOrangeJuice: 'Casiir Liin Macaan Cusub'
      },
      desc: {
        cheeseOmelet: 'Omelet jilicsan oo farmaajo dhalaalay leh',
        shakshuka: 'Ukun lagu dhex kariyay maraq yaanyo, basal iyo toon',
        frenchToast: 'Rooti faransiis macaan oo sharoobo leh',
        vegetableOmelet: 'Omelet caafimaad leh oo khudaar daray ah leh',
        mandiMeat: 'Hilib si tartiib ah loo kariyay oo bariis udgoon leh',
        greenSalad: 'Khudaar cagaaran oo daray ah',
        lentilSoup: 'Maraq misir oo diiran oo macaan',
        butterCroissant: 'Keeg qolof leh oo caadi ah',
        painAuChocolat: 'Shukulaato madow laga buuxiyay',
        almondCroissant: 'Yicib laga buuxiyay, yicib la jarjaray',
        fruitDanish: 'Miro xilliyeed, labeenta vaniljka',
        sourdoughBoule: '48-saac oo khamiir ah',
        frenchBaguette: 'Qolof qallafsan, gudaha oo furan',
        oliveHerbFougasse: 'Saytuun Kalamata, rosemary',
        wholeWheatLoaf: '100% qamadi dabiici ah',
        espresso: 'Laba jeer',
        cappuccino: 'Espresso, caano la karkariyay, xumbo',
        coldBrew: 'La qooyay 24 saac',
        freshOrangeJuice: 'Hadda la tuujiyay'
      }
    },
    order: {
      title: 'Dalbo Online',
      subtitle: 'Keegag cusub iyo rooti farsamo ayaa diyaar u ah in la doonto, la gaarsiiyo, ama goobta lagu cuno.',
      yourOrder: 'Dalabkaaga',
      emptyCart: 'Gaarigaagu waa eber',
      delivery: 'Gaarsiin',
      pickup: 'Doono',
      dineIn: 'Cunto Goobta',
      phone: 'Lambarka Taleefanka',
      phonePlaceholder: 'Geli lambarkaaga taleefanka',
      address: 'Cinwaanka Gaarsiinta',
      addressPlaceholder: 'Geli cinwaankaaga Muqdisho',
      tableNumber: 'Lambarka Miiska',
      tablePlaceholder: 'tusaale. 12',
      timeSlot: 'Waqtiga',
      selectTime: 'Dooro waqti',
      asap: 'Sida Ugu Dhaqsaha Badan (30-45 daqiiqo)',
      specialInstructions: 'Tilmaamo Gaar ah (Ikhtiyaar)',
      specialPlaceholder: 'Ku dar codsiyo gaar ah, xasaasiyad, ama qoraalo gaarsiin...',
      subtotal: 'Wadarta Guud',
      deliveryFee: 'Khidmadda Gaarsiinta',
      estTime: 'Waqtiga Qiyaasta',
      total: 'Isugeyn',
      placeOrder: 'Gudbi Dalabkaaga',
      promoCode: 'Koodhka Qiimo Dhimista',
      apply: 'Codso',
      discount: 'Qiimo Dhimis (20%)',
      invalidCode: 'Koodhku waa khalad',
      codeApplied: 'Koodhka waa la aqbalay!',
      customize: 'Hagaaji',
      addToCart: 'Kudar Gaariga',
      cancel: 'Jooji',
      required: 'Waa Qasab',
      optional: 'Ikhtiyaar',
      customizations: {
        breadChoice: 'Dooro Rooti',
        sourdough: 'Sourdough',
        wholeWheat: 'Qamadi',
        baguette: 'Baguette',
        addons: 'Ku Daro',
        extraCheese: 'Farmaajo Dheeraad ah',
        noOnions: 'Basal La\'aan',
        mushrooms: 'Mushrooms',
        milkChoice: 'Caanaha',
        wholeMilk: 'Caano Caadi ah',
        oatMilk: 'Caano Oat',
        almondMilk: 'Caano Yicib',
        sweetness: 'Macaanka',
        regular: 'Caadi',
        lessSweet: 'Maccaan Yar',
        noSugar: 'Sokor La\'aan',
        extraRice: 'Bariis Dheeraad ah',
        spicySauce: 'Suugo Basbaas leh'
      },
      alerts: {
        phoneAddress: 'Fadlan geli lambarkaaga taleefanka iyo cinwaanka gaarsiinta',
        table: 'Fadlan geli lambarka miiskaaga',
        time: 'Fadlan dooro waqti'
      }
    },
    orderConfirmation: {
      title: 'Dalabka Waa La Xaqiijiyay!',
      subtitle: 'Waad ku mahadsan tahay dalabkaaga. Waan helnay waxaanan hadda ku guda jirnaa diyaarintiisa.',
      details: 'Faahfaahinta Dalabka',
      summary: 'Soo Koobida Dalabka',
      estimatedTime: 'Waqtiga Qiyaasta',
      specialInstructions: 'Tilmaamo Gaar ah',
      backToHome: 'Ku Noqo Hoyga',
      table: 'Miiska'
    },
    about: {
      title: 'Sheekadeena',
      p1: 'La aasaasay 2023, Maqaayada Umumarwan waxay ku bilaabatay hadaf fudud: in bulshadeena maxaliga ah la gaarsiiyo rooti farsamo oo dhab ah iyo keegag cusub. Wixii ku bilowday rooti-dube yar oo xaafadeed ayaa isku bedelay goob cunto oo la jecel yahay.',
      p2: 'Waxaan aaminsanahay in dubista wanaagsani ay u baahan tahay samir, xamaasad, iyo waxyaabaha ugu tayada sarreeya. Khariiradahayaga dhanaan ayaa maalin kasta la xanaaneeyaa, keegagayadana gacanta ayaa lagu sameeyaa si loo helo qaabka ugu fiican.',
      p3: 'Subax kasta, dubiyeyaashayadu waxay yimaadaan ka hor waaberiga si ay u xaqiijiyaan in marka aad ka soo gasho albaabadeena, lagugu soo dhaweeyo carafta diiran ee raaxada leh ee alaabta cusub ee la dubay. Ma aha oo kaliya cunto; waa farsamo aan nolosheena u hurnay inaan dhamaystirno.',
      year: 'Sannadkii La Aasaasay',
      handcrafted: 'Gacan Lagu Sameeyay'
    },
    contact: {
      title: 'Nala Soo Xiriir',
      subtitle: 'Waan jeclaan lahayn inaan ku maqalno. Nala soo xiriir wixii ku saabsan cunto karinta, dalabaadka gaarka ah, ama kaliya inaad na salaanto.',
      location: 'Goobta',
      hours: 'Saacadaha',
      hoursDesc: 'Isniin-Axad: 8:00 Subaxnimo - 10:00 Habeennimo\nJimce: 11:00 Subaxnimo - 9:00 Habeennimo',
      phone: 'Taleefan',
      email: 'Iimayl',
      nameLabel: 'Magaca',
      namePlaceholder: 'Magacaaga',
      emailLabel: 'Iimayl',
      emailPlaceholder: 'iimaylkaaga@email.com',
      messageLabel: 'Fariinta',
      messagePlaceholder: 'Sideen ku caawin karnaa?',
      send: 'Dir Fariinta'
    },
    footer: {
      desc: 'Rooti farsamo iyo keegag cusub oo lagu sameeyay jacayl. Khibrad u yeelo rooti-dubaha kuugu dhow, oo bixiya dhadhan dhab ah ilaa 2023.',
      quickLinks: 'Xiriirinta Degdega ah',
      visitUs: 'Nagu Soo Booqo',
      address: '28M7+485 Arbe Mall, W Taleex\nMuqdisho, Soomaaliya',
      rights: 'Maqaayada Umumarwan. Dhammaan xuquuqaha way xifdisan yihiin.',
      privacy: 'Shuruucda Asturnaanta',
      terms: 'Shuruudaha Adeegga',
      hours1: 'Isniin-Axad: 8:00 Subaxnimo - 10:00 Habeennimo',
      hours2: 'Jimce: 11:00 Subaxnimo - 9:00 Habeennimo'
    }
  }
};
