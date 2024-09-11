<script setup>
import {ref, defineEmits} from "vue";

const inputText = ref('');
const emits = defineEmits(['onSearchCity']);
</script>

<template>
  <div class="search-bar">
    <form @submit.prevent><!--폼이 초기화 되지 않음-->
      <div class="from-group">
        <input @input="inputText = $event.target.value" type="search" placeholder="지역을 선택하세요">
        <button @click="
        $store.commit('updateCity', inputText);
        $store.dispatch('getWeather');
">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']"/>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
 // padding: 8px 20px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0 20px;

  form {
    .from-group {
      display: flex;

      input {
        width: 100%;
        border: none;
        padding: 1rem 0;
        //font-size: 18px;
        outline: none;
        font-size: 14px;
      }

      button {
        background: transparent;
        border: none;

        &:hover {
          cursor: pointer
        }

        .icon {
          font-size: 24px
        }
      }
    }
  }
}
</style>