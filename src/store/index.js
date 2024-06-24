import { createStore } from "vuex";

export default createStore({
  state: {
    sections: [
      {
        id: "best-of-the-best",
        title: "Лучшие игры последних лет",
        products: [
          {
            id: 1,
            name: "Witcher 3",
            description: "В наличии",
            oldPrice: null,
            price: 15000,
            sectionTitle: "Лучшие игры последних лет",
            hasDiscount: false,
            imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_4.png"),
              },
            ],
          },
          {
            id: 2,
            name: "Red Dead Redemption 2",
            description: "В наличии",
            oldPrice: null,
            price: 17000,
            hasDiscount: false,
            sectionTitle: "Лучшие игры последних лет",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/rdr-2/rdr-2_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/rdr-2/rdr-2_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/rdr-2/rdr-2_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/rdr-2/rdr-2_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/rdr-2/rdr-2_variant_4.png"),
              },
            ],
          },
          {
            id: 3,
            name: "Cyberpunk 2077",
            description: "В наличии",
            oldPrice: 20000,
            price: 12000,
            hasDiscount: true,
            sectionTitle: "Лучшие игры последних лет",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/cyberpunk-2077/cyberpunk-2077_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/cyberpunk-2077/cyberpunk-2077_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/cyberpunk-2077/cyberpunk-2077_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/cyberpunk-2077/cyberpunk-2077_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/cyberpunk-2077/cyberpunk-2077_variant_4.png"),
              },
            ],
          },
          {
            id: 4,
            name: "The Last of Us",
            description: "Под заказ",
            oldPrice: null,
            price: 8000,
            hasDiscount: false,
            sectionTitle: "Лучшие игры последних лет",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/the-last-of-us/the-last-of-us_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/the-last-of-us/the-last-of-us_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/the-last-of-us/the-last-of-us_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/the-last-of-us/the-last-of-us_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/the-last-of-us/the-last-of-us_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "best-of-action-rpg",
        title: "Лучшее в жанре Action RPG",
        products: [
          {
            id: 5,
            name: "Dark Souls",
            description: "Нет в наличии",
            oldPrice: 10000,
            price: 5000,
            hasDiscount: true,
            sectionTitle: "Лучшее в жанре Action RPG",
            imageUrl: require("@/assets/product-catalog/action-rpg/dark-souls/dark-souls_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/action-rpg/dark-souls/dark-souls_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/action-rpg/dark-souls/dark-souls_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/action-rpg/dark-souls/dark-souls_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/action-rpg/dark-souls/dark-souls_variant_4.png"),
              },
            ],
          },
          {
            id: 6,
            name: "Deus Ex: Mainkind Divided",
            description: "Под заказ",
            oldPrice: null,
            price: 6000,
            hasDiscount: false,
            sectionTitle: "Лучшее в жанре Action RPG",
            imageUrl: require("@/assets/product-catalog/action-rpg/deus-ex/deus-ex_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/action-rpg/deus-ex/deus-ex_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/action-rpg/deus-ex/deus-ex_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/action-rpg/deus-ex/deus-ex_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/action-rpg/deus-ex/deus-ex_variant_4.png"),
              },
            ],
          },
          {
            id: 7,
            name: "Elden Ring",
            description: "В наличии",
            oldPrice: null,
            price: 25000,
            hasDiscount: false,
            sectionTitle: "Лучшее в жанре Action RPG",
            imageUrl: require("@/assets/product-catalog/action-rpg/elden-ring/elden-ring_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/action-rpg/elden-ring/elden-ring_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/action-rpg/elden-ring/elden-ring_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/action-rpg/elden-ring/elden-ring_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/action-rpg/elden-ring/elden-ring_variant_4.png"),
              },
            ],
          },
          {
            id: 8,
            name: "Sekiro: Shadows die twice",
            description: "В наличии",
            oldPrice: null,
            price: "12000",
            hasDiscount: false,
            sectionTitle: "Лучшие товары minsiz.beyne",
            imageUrl: require("@/assets/product-catalog/action-rpg/sekiro/sekiro_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/action-rpg/sekiro/sekiro_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/action-rpg/sekiro/sekiro_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/action-rpg/sekiro/sekiro_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/action-rpg/sekiro/sekiro_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "best-of-multiplayer",
        title: "Лучшее сессионное/мультиплеерное",
        products: [
          {
            id: 9,
            name: "Mortal Kombat 11",
            description: "В наличии",
            oldPrice: null,
            price: 30000,
            hasDiscount: false,
            sectionTitle: "Лучшее сессионное/мультиплеерное",
            imageUrl: require("@/assets/product-catalog/best-of-multiplayer/mortal-kombat/mortal-kombat_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/mortal-kombat/mortal-kombat_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/mortal-kombat/mortal-kombat_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/mortal-kombat/mortal-kombat_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/mortal-kombat/mortal-kombat_variant_4.png"),
              },
            ],
          },
          {
            id: 10,
            name: "Tekken 8",
            description: "В наличии",
            oldPrice: null,
            price: 30000,
            hasDiscount: false,
            sectionTitle: "Лучшее сессионное/мультиплеерное",
            imageUrl: require("@/assets/product-catalog/best-of-multiplayer/tekken/tekken-variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/tekken/tekken-variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/tekken/tekken-variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/tekken/tekken-variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/tekken/tekken-variant_4.png"),
              },
            ],
          },
          {
            id: 11,
            name: "Grand Theft Auto V",
            description: "В наличии",
            oldPrice: 15000,
            price: 10000,
            hasDiscount: true,
            sectionTitle: "Лучшее сессионное/мультиплеерное",
            imageUrl: require("@/assets/product-catalog/best-of-multiplayer/gta-5/gta-5_variant_1.png"),
            variants: [
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/gta-5/gta-5_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/gta-5/gta-5_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/gta-5/gta-5_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/gta-5/gta-5_variant_4.png"),
              },
            ],
          },
          {
            id: 12,
            name: "Rainbow Six Siege",
            description: "Под заказ",
            oldPrice: 10000,
            price: 8000,
            hasDiscount: true,
            sectionTitle: "Лучшее сессионное/мультиплеерное",
            imageUrl: require("@/assets/product-catalog/best-of-multiplayer/r6/r6_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/r6/r6_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/r6/r6_variant_2.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/r6/r6_variant_3.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-multiplayer/r6/r6_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "for-examples",
        title: "Заглушка",
        products: [
          {
            id: 13,
            name: "Заглушка",
            description: "В наличии",
            oldPrice: null,
            price: 10000,
            hasDiscount: false,
            sectionTitle: "Заглушка",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
            ],
          },
          {
            id: 14,
            name: "Заглушка",
            description: "Под заказ",
            oldPrice: null,
            price: 10000,
            hasDiscount: false,
            sectionTitle: "Заглушка",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
            ],
          },
          {
            id: 15,
            name: "Заглушка",
            description: "В наличии",
            oldPrice: null,
            price: 10000,
            hasDiscount: false,
            sectionTitle: "Заглушка",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
            ],
          },
          {
            id: 16,
            name: "Заглушка",
            description: "Под заказ",
            oldPrice: 10000,
            price: 5000,
            hasDiscount: true,
            sectionTitle: "Заглушка",
            imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
            variants: [
              {
                platform: "PS5",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PS4",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "XSX",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
              {
                platform: "PC",
                imageUrl: require("@/assets/product-catalog/best-of-the-best/witcher-3/witcher-3_variant_1.png"),
              },
            ],
          },
        ],
      },
    ],

    cart: [],
  },
  getters: {
    productById: (state) => (id) => {
      const numericId = parseInt(id, 10);
      for (let section of state.sections) {
        const found = section.products.find(
          (product) => product.id === numericId
        );
        if (found) return found;
      }
      return null;
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, product) => {
        const actualPrice =
          product.hasDiscount && product.oldPrice
            ? product.price
            : product.price;
        return total + actualPrice * product.quantity;
      }, 0);
    },
    totalDiscount: (state) => {
      return state.cart.reduce((totalDiscount, product) => {
        if (product.hasDiscount && product.oldPrice) {
          const discountPerProduct =
            (product.oldPrice - product.price) * product.quantity;
          return totalDiscount + discountPerProduct;
        }
        return totalDiscount;
      }, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      const cartProduct = state.cart.find((p) => p.id === product.id);
      if (cartProduct) {
        cartProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1, checked: false });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex((p) => p.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    incrementQuantity(state, productId) {
      const cartProduct = state.cart.find((p) => p.id === productId);
      if (cartProduct) {
        cartProduct.quantity++;
      }
    },
    decrementQuantity(state, productId) {
      const cartProduct = state.cart.find((p) => p.id === productId);
      if (cartProduct && cartProduct.quantity > 1) {
        cartProduct.quantity--;
      }
    },
    toggleProductChecked(state, productId) {
      const product = state.cart.find((p) => p.id === productId);
      if (product) {
        product.checked = !product.checked;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    REMOVE_SELECTED_PRODUCTS(state, productIds) {
      state.cart = state.cart.filter(
        (product) => !productIds.includes(product.id)
      );
    },
    TOGGLE_PRODUCT_CHECKED(state, { id, checked }) {
      const product = state.cart.find((product) => product.id === id);
      if (product) {
        product.checked = checked;
      }
    },
    SET_PRODUCT_IMAGE(state, { productId, imageUrl }) {
      state.sections.forEach((section) => {
        const product = section.products.find(
          (product) => product.id === productId
        );
        if (product) {
          product.imageUrl = imageUrl;
        }
      });
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    incrementQuantity({ commit }, productId) {
      commit("incrementQuantity", productId);
    },
    decrementQuantity({ commit }, productId) {
      commit("decrementQuantity", productId);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    removeSelectedProducts({ commit, state }) {
      const selectedProductIds = state.cart
        .filter((product) => product.checked)
        .map((product) => product.id);
      commit("REMOVE_SELECTED_PRODUCTS", selectedProductIds);
    },
    toggleProductChecked({ commit }, { id, checked }) {
      commit("TOGGLE_PRODUCT_CHECKED", { id, checked });
    },
  },
  modules: {},
});
