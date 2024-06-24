<template>
  <div class="order-details">
    <h2>Детали заказа</h2>
    <div class="order-item">
      <span>Покупки:</span>
      <span>{{ cartTotal }} ₸</span>
    </div>
    <div class="order-item">
      <span>Скидка:</span>
      <span>{{ totalDiscount }} ₸</span>
    </div>
    <div class="order-item">
      <span>Доставка:</span>
      <span>{{ shipping }} ₸</span>
    </div>
    <div class="order-item total">
      <span class="total-text">Всего:</span>
      <span class="total-price">{{ finalTotal }} ₸</span>
    </div>
    <button class="place-order-button" @click="placeOrder">
      Оформить заказ
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    products: Array,
  },
  computed: {
    ...mapGetters(["cartTotal", "totalDiscount"]),

    totalPrice() {
      return this.products.reduce((total, product) => {
        return total + (product.checked ? product.price * product.quantity : 0);
      }, 0);
    },

    finalTotal() {
      return this.cartTotal + this.shipping;
    },

    shipping() {
      return 1500;
    },
  },

  methods: {
    placeOrder() {
      alert("Заказ оформлен");
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.order-details {
  background: white;
  flex-grow: 0.5;
  padding: 0px 24px 24px;
  border-radius: 12px;
  max-height: 270px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgb(29, 28, 28);
  box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.12);

  .order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .order-description {
    display: flex;
    flex-direction: column;
    color: $dark-grey-color;
    gap: 12px;
  }

  .total {
    font-weight: bold;
    color: $black-color;
    font-size: 20px;
  }

  .total-text,
  .total-price {
    color: whitesmoke;
  }

  .place-order-button {
    margin-top: 22px;
    background-color: $red-color;
    color: $white-color;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    min-width: 100%;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 25px;
    }

    .order-item {
      font-size: 24px;
    }

    .place-order-button {
      height: 60px;
      font-size: 25px;
    }
  }
}

@media (max-width: 500px) {
  .order-details {
    padding: 0px 0px 100px 0px;
    h2 {
      font-size: 40px !important;
    }

    .order-item {
      font-size: 40px !important;
    }

    .place-order-button {
      height: 80px;
      font-size: 30px;
    }
  }
}
</style>
