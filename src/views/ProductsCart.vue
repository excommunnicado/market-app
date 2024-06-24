<template>
  <MainHeader />
  <div class="full-width-container">
    <div
      class="wrapper"
      data-aos="zoom-out-right"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <BreadCrumbs :items="breadcrumbsItems" />
      <h2>Моя корзина</h2>
      <div class="cart">
        <div v-if="cartProducts.length === 0" class="cart-empty">
          <p>Корзина пуста...</p>
          <router-link to="/" class="go-home-button">На главную</router-link>
        </div>
        <div v-else class="cart-items">
          <div class="checkbox-all-products cart-item">
            <div class="remove-all-checkbox">
              <input
                type="checkbox"
                id="select-all-checkbox"
                v-model="selectAll"
                @change="toggleSelectAll"
              />
              <label for="select-all-checkbox"><h4>Выбрать все</h4></label>
            </div>
            <button class="remove-all-button" @click="removeAllSelected">
              Удалить
            </button>
          </div>
          <div
            class="cart-item"
            v-for="product in cartProducts"
            :key="product.id"
          >
            <div class="product-description">
              <input
                type="checkbox"
                v-model="product.checked"
                @change="toggleChecked(product.id)"
              />
              <div class="product-image" @click="openModal(product.imageUrl)">
                <img
                  class="product-img"
                  :src="product.imageUrl"
                  alt="product-img"
                />
              </div>
              <div class="product-text">
                <router-link
                  :to="`/product/${product.id}`"
                  class="product-name-link"
                >
                  <h3 class="product-name">{{ product.name }}</h3>
                </router-link>
                <div :class="getStockClass(product.description)">
                  {{ getStockText(product.description) }}
                </div>
              </div>
            </div>
            <div class="product-price-and-buttons">
              <div class="product-prices">
                <div v-if="product.hasDiscount" class="product-old-price">
                  {{ product.oldPrice }} ₸
                </div>
                <div class="product-price">{{ product.price }} ₸</div>
              </div>
              <div class="product-buttons">
                <div class="favorite-remove-buttons">
                  <button class="button-icon">
                    <img
                      class="favorite-button"
                      :src="require('@/assets/img/favorite-button.png')"
                      alt="remove-button"
                    />
                  </button>
                  <button
                    class="button-icon"
                    @click="removeFromCart(product.id)"
                  >
                    <img
                      class="remove-button"
                      :src="require('@/assets/img/remove-button.png')"
                      alt="remove-button"
                    />
                  </button>
                </div>
                <div class="increment-decrement-buttons">
                  <button
                    class="button-icon decrement-button"
                    @click="decrement(product)"
                  >
                    <img
                      :src="require('@/assets/img/decrement-button.png')"
                      alt="decrement-button"
                    />
                  </button>
                  <span class="quantity">{{ product.quantity }}</span>
                  <button
                    class="button-icon increment-button"
                    @click="increment(product)"
                  >
                    <img
                      :src="require('@/assets/img/increment-button.png')"
                      alt="remove-button"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="cartProducts.length === 0"></div>
        <OrderDetails
          v-else
          :totalPrice="cartTotal"
          :products="cartProducts"
          class="order-details"
        />
        <ImagesModalWindow
          v-if="isModalOpen"
          :image-url="modalImageUrl"
          @close="isModalOpen = false"
        />
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { mapState, mapActions } from "vuex";
import OrderDetails from "@/components/OrderDetails.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ImagesModalWindow from "@/components/ImagesModalWindow.vue";

export default {
  components: {
    OrderDetails,
    MainHeader,
    MainFooter,
    BreadCrumbs,
    ImagesModalWindow,
  },
  data() {
    return {
      isModalOpen: false,
      modalImageUrl: "",
      selectAll: false,
    };
  },
  computed: {
    ...mapState({
      cartProducts: (state) => state.cart,
    }),
    breadcrumbsItems() {
      return [
        { text: "Главная", href: "/" },
        { text: "Корзина", href: "" },
      ];
    },
  },
  methods: {
    ...mapActions([
      "addToCart",
      "removeFromCart",
      "incrementQuantity",
      "decrementQuantity",
      "toggleProductChecked",
    ]),
    increment(product) {
      this.incrementQuantity(product.id);
    },

    decrement(product) {
      this.decrementQuantity(product.id);
    },

    toggleChecked(id) {
      this.toggleProductChecked(id);
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

    toggleSelectAll() {
      if (this.selectAll) {
        this.cartProducts.forEach((product) => {
          this.$store.dispatch("toggleProductChecked", {
            id: product.id,
            checked: true,
          });
        });
      } else {
        this.cartProducts.forEach((product) => {
          this.$store.dispatch("toggleProductChecked", {
            id: product.id,
            checked: false,
          });
        });
      }
    },

    removeAllSelected() {
      this.$store.dispatch("removeSelectedProducts");
      this.selectAll = false;
    },

    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },

    closeImagesModalWindow() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.full-width-container {
  @include full-width-container;

  .wrapper {
    @include wrapper;
  }

  .cart {
    display: flex;
    gap: 30px;

    .product-img {
      width: 120px;
      height: 120px;
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    .cart-items {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .cart-item {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 12px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: rgb(29, 28, 28);
        box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.12);

        &:hover {
          transform: scale(1.01);
        }

        .product-description {
          display: flex;
          gap: 20px;

          .product-name {
            font-size: 18px;
            margin: 0px;
            position: relative;
            display: inline-block;
            cursor: pointer;
            color: whitesmoke;
            transition: color 0.3s ease;
            @include linkStyle($white-color, $red-color);
          }

          .product-text {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
        }

        .product-price-and-buttons {
          display: flex;
          flex-direction: column;
          // justify-content: space-between;
          align-items: flex-end;
          gap: 30px;

          .product-prices {
            display: flex;
            gap: 20px;
          }

          .product-price {
            display: flex;
            justify-content: flex-end;
            font-weight: bold;
            font-size: 20px;
          }

          .product-old-price {
            text-decoration: line-through;
            text-align: right;
          }

          .product-buttons {
            display: flex;
            gap: 10px;
            height: 45px;

            .button-icon {
              background: none;
              border: none;
              cursor: pointer;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                width: 24px;
                height: 24px;
              }

              &:hover {
                opacity: 0.8;
              }
            }

            .favorite-remove-buttons {
              display: flex;
              gap: 15px;
            }

            .increment-decrement-buttons {
              display: flex;
              justify-content: space-around;
              padding: 0px 5px;
              background: #d7d7d9;
              border-radius: 8px;
              width: 100px;
              align-items: center;
              font-weight: bold;
            }

            .quantity {
              color: $in-stock-unavailable;
            }
          }
        }
      }
    }

    .checkbox-all-products {
      padding-left: 20px;
      align-items: center;

      .remove-all-checkbox {
        display: flex;
        gap: 20px;
      }

      .remove-all-button {
        background-color: #d7d7d9;
        color: #38383a;
        border: none;
        width: 86px;
        height: 36px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .cart-empty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .go-home-button {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        background-color: $red-color;
        color: white;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  .in-stock-available,
  .in-stock-unavailable {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 25px;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
  }

  .in-stock-available {
    background-color: #d7d7d9;
    color: black;
  }

  .in-stock-unavailable {
    background-color: $in-stock-unavailable;
    color: whitesmoke;
  }
}

@media (max-width: 1300px) {
  .full-width-container {
    background: none !important;
    padding: 0;
  }
}

@media (max-width: 768px) {
  h2 {
    padding: 0px 120px;
    font-size: 30px;
  }

  h3,
  h4 {
    font-size: 25px;
  }

  .cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cart-items {
      width: 80%;

      input {
        width: 20px;
      }

      .cart-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        display: flex;
        padding: 40px 20px !important;

        .product-img {
          width: 250px;
          height: auto;
        }

        .product-name {
          font-size: 25px !important;
          margin: 0;
        }

        .product-text {
          width: 60%;
          gap: 65px !important;
        }

        .favorite-button,
        .remove-button,
        .decrement-button,
        .increment-button {
          width: 40px !important;
          height: 40px !important;
        }

        .increment-decrement-buttons {
          width: 200px !important;
          font-size: 25px;
        }

        .product-price {
          font-size: 30px !important;
        }

        .product-old-price {
          font-size: 22px;
          text-align: right;
        }

        .in-stock-available,
        .in-stock-unavailable {
          font-size: 18px;
        }
      }
    }

    .remove-all-button {
      width: 130px !important;
      height: 60px !important;
      font-size: 18px;
    }

    .cart-empty {
      font-size: 20px;
    }

    .order-details {
      width: 80%;
      margin: 30px 0px 50px 0px;
    }
  }
  .cart-empty {
    font-size: 30px !important;
  }

  .go-home-button {
    width: 90%;
    font-size: 30px;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .full-width-container {
    @include full-width-container;

    .wrapper {
      @include wrapper;
    }
    h2 {
      font-size: 50px;
      padding: 0px 115px;
    }

    .cart-items {
      .cart-item:not(:first-child) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;

        .product-description {
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-bottom: 20px;

          .product-name {
            font-size: 50px !important;
          }

          .product-text {
            width: 80%;
            gap: 20px !important;
          }
        }
      }

      .remove-all-button {
        width: 30% !important;
        font-size: 30px;
      }

      .in-stock-available,
      .in-stock-unavailable {
        width: 30%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 30px !important;
        text-align: center;
      }

      .product-price-and-buttons {
        width: 80%;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      h4 {
        font-size: 40px;
      }
    }

    .full-width-container
      .wrapper
      .cart
      .cart-items
      .cart-item
      .product-price-and-buttons
      .product-price {
      font-size: 50px !important;
    }

    .full-width-container
      .wrapper
      .cart
      .cart-items
      .cart-item
      .product-price-and-buttons
      .product-old-price {
      font-size: 40px !important;
    }
  }

  .cart-empty {
    font-size: 40px !important;
  }

  .go-home-button {
    width: 90%;
    font-size: 40px;
    text-align: center;
  }
}
</style>
