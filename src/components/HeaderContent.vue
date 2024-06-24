<template>
  <div class="wrapper">
    <div
      class="header-content"
      data-aos="zoom-out"
      data-aos-delay="100"
      data-aos-duration="2000"
    >
      <div class="text-description">
        <h1 class="main-page-title">Федеральное Бюро Видеоигр</h1>
        <p>Загляни в мир цифровых развлечений!</p>
        <div class="header-content-btns">
          <button class="to-products-btn" @click="scrollToProducts">
            К каталогу
          </button>
          <button class="about-project-btn" @click="goToAbout">
            Поддержка
          </button>
        </div>
      </div>
      <img
        class="main-pic"
        src="../assets/header-content/header-content-main-pic.png"
        alt="main-pic"
      />
      <!-- <img
        class="heart-pic"
        src="../assets/header-content/heart-pic.png"
        alt="heart-pic"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToProducts() {
      const element = document.getElementById("product-catalog-title");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper;
}

.header-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;

  .main-page-title {
    margin: 50px 0px 40px 0px;
  }

  .heart-pic {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -40px;
    right: -25px;
    height: auto;
    z-index: 10;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      transform: scale(1.4);
    }
  }

  .main-pic {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .text-description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 64px;
    }

    .header-content-btns {
      display: flex;
      gap: 10px;
      margin: 20px 0;
      gap: 20px;

      button {
        border: none;
        border-radius: 8px;
        width: 143px;
        height: 56px;
        font-weight: bold;
        font-size: 17px;
        cursor: pointer;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.15);
        }

        &.to-products-btn {
          background: $red-color;
          color: $white-color;
        }

        &.about-project-btn {
          background: none;
          color: $dark-grey-color;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    .text-description {
      font-size: 40px;
      text-align: center;

      .header-content-btns {
        flex-direction: column;
        align-items: center;

        button {
          width: 90%;
          height: 80px;
          margin: 10px 0;
          font-size: 25px;
        }
      }
    }

    .main-pic {
      width: 80%;
      max-width: none;
    }

    .heart-pic {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .header-content {
    .text-description {
      h1 {
        font-size: 115px;
      }

      p {
        font-size: 45px;
      }

      .header-content-btns {
        button {
          width: 90%;
          height: 112px;
          font-size: 40px;
          margin: 20px 0;
        }
      }
    }

    .main-pic,
    .heart-pic {
      width: 100%;
    }
  }
}
</style>
