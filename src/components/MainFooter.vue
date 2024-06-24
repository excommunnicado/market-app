<template>
  <div class="wrapper">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-nav-links">
          <ul class="footer-links">
            <li class="footer-nav-link">
              <a href="#partners">Обратная связь</a>
            </li>
            <li class="footer-nav-link"><a href="#delivery">Контакты</a></li>
            <li class="footer-nav-link"><a href="#about">О проекте</a></li>
          </ul>
          <ul class="footer-links">
            <li class="footer-nav-link">
              <a href="#partners">Обратная связь</a>
            </li>
            <li class="footer-nav-link">
              <a href="#delivery">Контакты</a>
            </li>
            <li class="footer-nav-link"><a href="#about">О проекте</a></li>
          </ul>
          <ul class="footer-links">
            <li class="footer-nav-link">
              <a href="#partners">Обратная связь</a>
            </li>
            <li class="footer-nav-link">
              <a href="#delivery">Контакты</a>
            </li>
            <li class="footer-nav-link"><a href="#about">О проекте</a></li>
          </ul>
        </div>
        <div class="footer-logo-links">
          <div class="footer-logos">
            <ul class="footer-logo">
              <li>
                <img
                  class="footer-logo-img"
                  src="../assets/footer/footer-logo.png"
                  alt="footer-logo-img"
                />
              </li>
              <li><h3 class="footer-logo-title">RedCircle</h3></li>
            </ul>
            <ul class="footer-socials">
              <li>
                <a href="#facebook"
                  ><img
                    class="social-link-img"
                    src="../assets/footer/facebook-logo.png"
                    alt="facebook-logo"
                /></a>
              </li>
              <li>
                <a href="#youtube"
                  ><img
                    class="social-link-img"
                    src="../assets/footer/youtube-logo.png"
                    alt="facebook-logo"
                /></a>
              </li>
              <li>
                <a href="#instagram"
                  ><img
                    class="social-link-img"
                    src="../assets/footer/instagram-logo.png"
                    alt="facebook-logo"
                /></a>
              </li>
              <li>
                <a href="#twitter"
                  ><img
                    class="social-link-img"
                    src="../assets/footer/twitter-logo.png"
                    alt="facebook-logo"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @include wrapper;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
      gap: 50px;

      .footer-nav-links,
      .footer-logo-links {
        display: flex;
        gap: 50px;
      }

      .footer-logo {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;

        .footer-logo-img {
          width: 60px;
          height: 60px;
        }
      }

      .footer-logos {
        flex-direction: column;
      }

      .footer-socials {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 5px 0px 0px 10px;
      }

      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;
      }

      a {
        font-size: 14px;
        color: #e0e0e0;
        text-decoration: none;
        @include linkStyle($white-color, $red-color);
      }

      img.social-link-img {
        width: 25px;
        height: 25px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      @include wrapper;
      .footer {
        flex-direction: column;
        text-align: center;

        .footer-content {
          flex-direction: row;
          justify-content: center;
          gap: 100px;
          justify-content: space-around;
        }

        .footer-nav-links,
        .footer-logo-links {
          flex-direction: column;
          align-items: center;
        }

        .footer-nav-links {
          gap: 15px !important;
        }

        .footer-logo {
          .footer-logo-img {
            width: 40px;
            height: 40px;
          }

          .footer-logo-title {
            font-size: 30px;
          }
        }

        .footer-nav-links {
          .footer-links {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 25px;

            .footer-nav-link {
              a {
                font-size: 16px;
              }
            }
          }
        }

        .footer-socials {
          justify-content: center;
          margin-top: 20px;
          margin: 0;

          .social-link-img {
            width: 40px !important;
            height: 40px !important;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .footer {
      margin-top: 50px;
      flex-direction: column;
      text-align: center;

      .footer-content {
        flex-direction: column;
        align-items: center;
        gap: 30px;

        .footer-nav-links,
        .footer-logo-links {
          flex-direction: column;
          align-items: center;
        }

        .footer-links {
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-logo,
        .footer-socials {
          flex-direction: row;
        }

        a,
        .footer-logo-title {
          font-size: 30px;
        }

        .social-link-img {
          width: 70px !important;
          height: 70px !important;
        }
      }
    }
  }
}
</style>
