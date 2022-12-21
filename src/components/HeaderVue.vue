<script>
import { store } from "../store.js"
export default {
  data() {
    return {
      store,

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

        </div>

      </div>


    </div>


  </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.headerContacts {
  height: 50px;
  width: 100%;
  background-color: #21333e;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-contHeader {
    width: 60%;
    height: 100%;
    background-color: aquamarine;
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
      width: 400px;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .flex {
        display: flex;
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
