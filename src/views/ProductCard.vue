<template>
  <MainHeader />
  <div class="full-width-container">
    <div class="wrapper">
      <BreadCrumbs :items="breadcrumbsItems" />
      <div
        data-aos="zoom-out-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <div class="product-card-container">
          <div class="product-image-container">
            <img
              :src="selectedVariant.imageUrl"
              alt="product.name"
              class="product-image"
              @click="openModal(selectedVariant.imageUrl)"
            />
          </div>
          <div class="product-details-container">
            <h2 class="product-name">{{ product.name }}</h2>
            <!-- <p class="product-description">{{ product.description }}</p> -->
            <div class="in-stock">
              <div :class="getStockClass(product.description)">
                {{ getStockText(product.description) }}
              </div>
            </div>
            <div class="product-prices">
              <div class="product-price">{{ product.price }} ₸</div>
              <div v-if="product.hasDiscount" class="product-old-price">
                {{ product.oldPrice }} ₸
              </div>
            </div>
            <div class="product-variants">
              <div
                v-for="variant in product.variants"
                :key="variant.platform"
                class="product-variant"
                :class="{
                  'active-variant':
                    selectedVariantIndex === product.variants.indexOf(variant),
                }"
                @click="selectVariant(variant)"
              >
                {{ variant.platform }}
              </div>
            </div>
            <button
              class="add-to-cart-btn"
              :class="{ 'in-cart': isInCart }"
              @click="toggleProductInCart"
            >
              {{ isInCart ? "Удалить из корзины" : "Добавить в корзину" }}
            </button>
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
  <MainFooter />
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ImagesModalWindow from "@/components/ImagesModalWindow.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
    BreadCrumbs,
    ImagesModalWindow,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedVariantIndex: 0,
      isModalOpen: false,
      modalImageUrl: "",
    };
  },
  computed: {
    ...mapGetters(["productById"]),
    ...mapState(["cart"]),
    product() {
      return this.productById(this.id);
    },
    breadcrumbsItems() {
      return [
        { text: "Главная", href: "/" },
        {
          text: this.product.sectionTitle,
          href: `/section/${this.product.sectionId}`,
        },
        { text: this.product.name, href: "" },
      ];
    },
    selectedVariant() {
      if (this.selectedVariantIndex !== null) {
        return this.product.variants[this.selectedVariantIndex];
      }
      return null;
    },
    displayImage() {
      if (
        this.selectedVariantIndex !== null &&
        this.product.variants &&
        this.product.variants.length > 0
      ) {
        return this.product.variants[this.selectedVariantIndex].imageUrl;
      }
      return this.product.imageUrl;
    },
    isInCart() {
      return this.cart.some((item) => item.id === this.product.id);
    },
  },

  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    selectVariant(variant) {
      this.selectedVariantIndex = this.product.variants.indexOf(variant);
      this.displayImage = variant.imageUrl;
    },
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    toggleProductInCart() {
      if (this.isInCart) {
        this.removeFromCart(this.product.id);
      } else {
        const productToAdd = {
          ...this.product,
          name: `${this.product.name} (${this.selectedVariant.platform})`,
        };
        this.addToCart(productToAdd);
      }
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
  },
};
</script>

<style lang="scss" scoped>
.full-width-container {
  @include full-width-container;

  .wrapper {
    @include wrapper;
  }

  .product-card-container {
    display: flex;
    margin: 40px 0px 20px 0px;
    gap: 39px;
    padding: 30px;
    border-radius: 8px;
    background: rgb(29, 28, 28);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.15);

    .product-image-container {
      max-width: 300px;

      .product-image {
        width: 300px;
        height: 300px;
        border-radius: 8px;
        transition: transform 0.3s ease;
        object-fit: cover;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .product-details-container {
      display: flex;
      flex-direction: column;
      gap: 28px;

      .product-name {
        font-size: 35px;
        margin: 0 !important;
      }

      .in-stock {
        display: flex;
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

      .product-prices {
        display: flex;
        gap: 20px;
      }

      .product-price {
        font-weight: bold;
        justify-content: flex-start;
      }

      .product-old-price {
        text-decoration: line-through;
        display: flex;
        color: $dark-grey-color;
      }

      .product-description {
        color: $dark-grey-color;
        margin: 0;
        padding: 0;
      }

      .product-price {
        font-size: 20px;
        color: whitesmoke;
        font-size: 30px;
      }

      .add-to-cart-btn {
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

        &.in-cart {
          background-color: $green-color;
          &:hover {
            background-color: darken($green-color, 10%);
          }
        }
      }

      .product-variants {
        display: flex;
        gap: 5px;

        .product-variant {
          padding: 5px 10px;
          margin: 2px;
          border: 1px solid $dark-grey-color;
          cursor: pointer;
          border-radius: 8px;
          font-size: 14px;
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
    }
  }
}

@media (max-width: 1300px) {
  .full-width-container {
    background: none !important;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .product-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;

    .product-card-container {
      width: 80%;
      text-align: left;
      justify-content: space-around;
      padding: 15px 0px;
      font-size: 40px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
      padding: 70px 0px;
      border-radius: 20px;
      margin: 15px 0px;

      .product-name {
        margin: 0;
        font-size: 35px;
      }

      .product-description {
        font-size: 20px;
      }

      .product-price {
        font-size: 30px !important;
      }

      .product-old-price {
        font-size: 24px;
      }

      .add-to-cart-btn {
        width: 260px;
        height: 60px;
        font-size: 20px !important;
      }

      .product-details-container {
        width: 50%;
        padding: 0;
        gap: 15px;
      }

      .product-image {
        max-width: 300px !important;
        height: auto !important;
      }

      .product-variants {
        gap: 20px !important;
        .product-variant {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .wrapper {
    @include wrapper;
  }

  .product-card-content {
    .product-card-container {
      flex-direction: column;
      align-items: center;
      width: 90%;
      text-align: center;

      .product-image-container {
        width: 100%;
        .product-image {
          width: 100%;
          max-width: 300px;
          height: auto;
        }
      }

      .product-details-container {
        width: 80%;
        padding: 20px;
        gap: 30px;

        .product-name {
          font-size: 65px;
        }

        .product-description {
          font-size: 50px;
        }

        .product-price {
          font-size: 60px !important;
        }

        .product-old-price {
          font-size: 40px;
        }

        .add-to-cart-btn {
          width: 100%;
          height: 120px;
          font-size: 40px !important;
          margin-top: 30px;
          border-radius: 20px;
        }

        .product-variants {
          display: flex;
          justify-content: center;
          gap: 40px;
          .product-variant {
            width: 70px !important;
            height: 70px !important;
          }
        }
      }
    }
  }
}
</style>
