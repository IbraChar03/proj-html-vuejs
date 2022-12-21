<script>
import { store } from "../store.js"
export default {
  data() {
    return {
      store,
      list: [
        {
          name: "HOME",
          href: "#"
        },
        {
          name: "SERVICES",
          href: "#"
        },
        {
          name: "SKILLS",
          href: "#"
        },
        {
          name: "PARTNERS",
          href: "#"
        },
        {
          name: "BLOG",
          href: "#"
        },
      ]

    }
  }
}

</script>

<template>
  <div class="headerContacts">
    <div class="inner-contHeader">
      <div class="open-hours">

        <font-awesome-icon icon="fa-solid fa-clock" class="icon" />
        <p>Open Hours: Mon - Sat - 9:00 - 18:00</p>
      </div>
      <div class="contacts">
        <div class="phone flex">
          <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
          <p>{{ store.phoneNumber }}</p>
        </div>
        <div class="email flex">
          <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
          <p>{{ store.email }}</p>
        </div>
        <div class="socials">
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
          <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />

        </div>

      </div>


    </div>


  </div>
  <div class="jumbotron">
    <div class="cont-header">
      <div class="inner-header">
        <div class="nexgen">
          <span class="color">N E X </span>&nbsp <span> G E N</span>
        </div>

        <div class="list">
          <ul>
            <li v-for="item in list">
              <a :href=item.href>
                {{ item.name }}

              </a>
            </li>
            <li>
              <a href="" class="button">
                GET IN TOUCH
              </a>
            </li>
          </ul>

        </div>

      </div>


    </div>
    <div class="cont-text">
      <div class="cont-inner">
        <div class="logistics">
          <div class="textBig">
            <span>Logistics that goes Further.</span>
            <div class="back"></div>
          </div>

          <div class="text">
            For 20 years working with the most innovative in the field of transport
          </div>
          <div class="buttons">
            <div class="btn1">
              <a href="">
                <span>GET IN TOUCH</span>
              </a>
            </div>
            <div class="btn2">
              <a href="">
                <span>READ MORE</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>



  </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.headerContacts {
  // height: 50px;
  padding: 15px;
  width: 100%;
  background-color: #21333e;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-contHeader {
    max-width: 1400px;
    width: 60%;
    height: 100%;
    // background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .open-hours {
      // width: 250px;
      height: 100%;
      display: flex;
      align-items: center;

      .icon {
        color: $color-type;
        font-size: 14px;
        margin-right: 5px;
      }

    }

    .contacts {
      width: 500px;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .flex {
        display: flex;
      }

      .socials {
        width: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;


        .img-icon {
          height: 15px;
          width: 15px;
          filter: invert(85%) sepia(10%) saturate(223%) hue-rotate(192deg) brightness(90%) contrast(94%);
        }
      }
    }
  }
}

.jumbotron {
  // height: 700px;
  padding-bottom: 70px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/jumbo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .cont-header {
    height: 80px;
    width: 100%;
    // background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .inner-header {
      max-width: 1400px;
      height: 100%;
      width: 60%;
      // background-color: azure;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nexgen {
        display: flex;
        align-items: center;

        .color {
          color: $color-type-button;
          font-size: 25px;
          font-weight: bold;
          background-color: rgba(5, 130, 131, 0.1);
          border-radius: 15px;
          padding: 5px 0;
          padding-left: 25px;

        }

        span {
          color: white;
          font-size: 25px;
          font-weight: bold;
        }

        p {
          font-size: 17px;
          color: white;
        }
      }

      .list {
        width: 700px;
        height: 100%;
        display: flex;
        align-items: center;

        ul {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          li {
            list-style-type: none;

            a {
              color: white;
              font-size: 17px;
              text-decoration: none;
            }
          }

          .button {
            @include btn
          }

        }
      }
    }
  }

  .cont-text {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    .cont-inner {
      max-width: 1400px;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      // background-color: aqua;

      .logistics {
        width: 45%;
        height: 100%;

        // background-color: red;

        .textBig {

          position: relative;

          span {
            font-size: 80px;
            color: white;
            font-weight: bold;
            z-index: 50;
            position: relative;
          }

          .back {
            position: absolute;
            top: 20%;
            width: 80%;
            height: 30px;
            background-color: rgba(5, 130, 131, 0.3);
            z-index: 0;
          }

        }

        .text {
          font-size: 23px;
          color: $color-type;
        }

        .buttons {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;

          .btn1 {
            a {
              text-decoration: none;

              span {
                background-color: $color-type-button;
                padding: 11px 17px;
                text-align: center;
                margin-right: 15px;
                border-radius: 5px;
                color: white;
              }
            }

          }

          .btn2 {
            a {
              text-decoration: none;

              span {
                padding: 10px 17px;
                text-align: center;
                border: 1px solid $color-type-button;
                border-radius: 5px;
                color: white;
              }
            }

          }
        }
      }
    }
  }

}

p {
  color: $color-type;
  font-size: $font-type;
}

.icon {
  color: $color-type;
  font-size: 14px;
  margin-right: 5px;
}
</style>
