<template>
  <div class="full-width-container">
    <div class="wrapper">
      <div
        v-for="(section, index) in sections"
        :key="index"
        data-aos="zoom-out-up"
        data-aos-delay="500"
        data-aos-duration="2000"
        data-aos-offset="200"
      >
        <h2 id="product-catalog-title">{{ section.title }}</h2>
        <div id="product-catalog">
          <div
            class="product"
            v-for="product in section.products"
            :key="product.id"
          >
            <div class="img-container">
              <img
                class="product-image"
                :src="product.imageUrl"
                :alt="product.name"
                @click="openModal(product.imageUrl)"
              />
            </div>
            <div class="product-info">
              <router-link
                :to="`/product/${product.id}`"
                class="product-name-link"
              >
                <h3 class="product-name">{{ product.name }}</h3>
              </router-link>
              <div class="in-stock">
                <div :class="getStockClass(product.description)">
                  {{ getStockText(product.description) }}
                </div>
              </div>
              <div class="product-variants">
                <div
                  v-for="variant in product.variants"
                  :key="variant.platform"
                  class="product-variant"
                  :class="{
                    'active-variant':
                      selectedVariants[product.id] === variant.platform,
                  }"
                  @click="selectVariant(product, variant)"
                >
                  {{ variant.platform }}
                </div>
              </div>

              <div class="product-pricing">
                <div class="price-container">
                  <div v-if="product.hasDiscount" class="product-old-price">
                    {{ product.oldPrice }}
                  </div>
                  <div
                    class="product-price"
                    :class="{ 'discount-price': product.hasDiscount }"
                  >
                    {{ product.price }} ₸
                  </div>
                </div>
                <button
                  class="product-add-btn"
                  :class="{ 'in-cart': isInCart(product.id) }"
                  @click="toggleProductInCart(product)"
                >
                  <span v-if="!isInCart(product.id)"
                    ><img src="/src/assets/header/cart-icon.png" alt="" />
                    Добавить в корзину</span
                  >
                  <span v-else>Удалить из корзины</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ImagesModalWindow
    v-if="isModalOpen"
    :image-url="modalImageUrl"
    @close="isModalOpen = false"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import ImagesModalWindow from "@/components/ImagesModalWindow.vue";

export default {
  components: {
    ImagesModalWindow,
  },

  computed: {
    ...mapState(["sections", "cart"]),
  },

  data() {
    return {
      isModalOpen: false,
      modalImageUrl: "",
      selectedVariants: {},
    };
  },

  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    toggleProductInCart(product) {
      if (this.isInCart(product.id)) {
        this.removeFromCart(product.id);
      } else {
        const selectedPlatform = this.selectedVariants[product.id];
        if (!selectedPlatform) {
          alert("Пожалуйста, выберите платформу перед добавлением в корзину.");
          return;
        }
        const productToAdd = {
          ...product,
          name: `${product.name} (${selectedPlatform})`,
        };
        this.addToCart(productToAdd);
      }
    },
    isInCart(productId) {
      return this.cart.some((product) => product.id === productId);
    },
    getStockClass(description) {
      if (description.includes("Под заказ")) {
        return "in-stock-unavailable";
      }
      return "in-stock-available";
    },

    getStockText(description) {
      return description.includes("Под заказ") ? "Под заказ" : description;
    },
    selectVariant(product, variant) {
      this.selectedVariants[product.id] = variant.platform;
      this.$store.commit("SET_PRODUCT_IMAGE", {
        productId: product.id,
        imageUrl: variant.imageUrl,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $black-color;
}
.full-width-container {
  @include full-width-container;
  width: 100%;
  box-sizing: border-box;

  .wrapper {
    @include wrapper;

    h2 {
      text-align: center;
      font-size: 40px;
    }

    #product-catalog {
      padding: 15px 0;
      display: flex;
      gap: 30px;

      .product {
        overflow: hidden;
        text-align: center;
        border-radius: 8px;
        padding: 30px 20px;
        background: rgb(29, 28, 28);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.15);
        }

        .img-container {
          overflow: hidden;
          border-radius: 8px;
          // margin: -30px -20px;
        }

        .product-image {
          border-radius: 8px;
          width: 100%;
          height: auto;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.3, 1.01) 0s;

          &:hover {
            transform: scale(1.1);
            border-radius: 8px;
          }
        }

        .product-info {
          padding-top: 5px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .product-variants {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          margin: 0px 15px;

          .product-variant {
            padding: 5px 10px;
            margin: 2px;
            border: 1px solid $dark-grey-color;
            cursor: pointer;
            border-radius: 8px;
            font-size: 13px;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: $dark-grey-color;
            }
          }

          .active-variant {
            background-color: $dark-grey-color;
            color: white;
          }
        }

        .product-name {
          margin-bottom: 5px;
          position: relative;
          display: inline-block;
          color: $white-color;
          @include linkStyle($white-color, $red-color);
        }

        .product-description {
          font-size: 15px;
          color: $dark-grey-color;
          margin-bottom: 10px;
        }

        .in-stock {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .in-stock-available,
        .in-stock-unavailable {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 15px;
          padding: 5px;
          border-radius: 4px;
          font-size: 12px;
          text-align: center;
        }

        .in-stock-available {
          background-color: $in-stock-available;
          color: black;
        }

        .in-stock-unavailable {
          background-color: $in-stock-unavailable;
          color: whitesmoke;
        }

        .product-pricing {
          display: flex;
          flex-direction: column;
          align-items: center;
          // justify-content: space-between;
          gap: 30px;

          .price-container {
            display: flex;
            flex-direction: row-reverse;
            // justify-content: space-between;
            gap: 20px;

            .product-old-price {
              text-decoration: line-through;
              color: $dark-grey-color;
              font-weight: normal;
              margin-bottom: 5px;
              font-size: 16px;
            }

            .product-price {
              font-weight: bold;
              color: $white-color;
              font-size: 20px;
            }

            .discount-price {
              color: $red-color;
            }
          }

          .product-add-btn {
            background-color: $red-color;
            color: $white-color;
            border: none;
            border-radius: 4px;
            padding: 5px 10px;
            transition: background-color 0.3s ease, transform 0.3s ease;
            width: 90%;
            height: 40px;
            font-weight: bold;
            font-size: 13px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease,
              transform 0.3s ease;

            &:hover {
              background-color: $red-color;
              transform: scale(1.05);
              background-color: #f5f5f5;
              color: #222;
              box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.05);
            }
          }

          .in-cart {
            background-color: $green-color;
            color: white;

            &:hover {
              background-color: darken($green-color, 10%);
              transform: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .full-width-container {
    background: none !important;
  }
}

@media (max-width: 768px) {
  .full-width-container {
    .wrapper {
      #product-catalog {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .product-add-btn {
          background-color: $red-color !important;
          color: $white-color;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px !important;
          cursor: url("/src/assets/img/cursor-pic.png"), auto;
          transition: background-color 0.3s ease, transform 0.3s ease;
          width: 350px;
          height: 60px;
          font-size: 30px;

          &:hover {
            transform: scale(1.03);
          }

          &.in-cart {
            background-color: $green-color !important;
            &:hover {
              background-color: darken($green-color, 10%);
            }
          }
        }

        .product {
          width: 70%;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 15px 0px;
          font-size: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
          padding: 70px 0px;
          border-radius: 20px;
          margin: 15px 0px;

          .product-name {
            font-size: 25px;
          }

          .product-image {
            max-width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
          }

          .product-info,
          .product-pricing {
            align-items: center;
            gap: 20px;
          }

          .product-pricing {
            flex-direction: column;
            align-items: center;

            .product-old-price {
              font-size: 30px !important;
            }
          }
        }
      }

      h2 {
        text-align: center;
        font-size: 40px;
      }
    }
  }
}

@media (max-width: 500px) {
  .full-width-container {
    .wrapper {
      h2 {
        font-size: 65px;
      }
      #product-catalog {
        .product {
          width: 90%;
          font-size: 20px;
          padding: 100px 0px;

          .product-name {
            font-size: 55px;
          }

          .product-description {
            font-size: 45px;
          }

          .product-image {
            border-radius: 24px;
          }

          .product-pricing {
            .product-price {
              font-size: 60px;
            }

            .product-old-price {
              font-size: 40px !important;
            }

            .product-add-btn {
              width: 250%;
              height: 120px;
              font-size: 60px;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
