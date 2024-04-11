<template>
  <div class="container">
    <div class="usernameDiv">
      <h3>
        <a :href="'/user/' + props.username">@{{ props.username }}</a>
      </h3>
    </div>
    <div class="divider"></div>
    <div>
      <h4>{{ props.content }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.container {
  width: fit-content;
  height: fit-content;
  background: linear-gradient(to right, #d5ddff, #ffd5f4);
  border-radius: 40px;
  border: 3px inset #ffdcff;
  overflow: hidden;
}

.container div {
  padding-left: 15px;
  padding-right: 15px;
}

.container div h3 {
  text-shadow: 1px 1px 5px #ffffff;
}
.container div h4 {
  text-shadow: 1px 1px 5px #ffffff;
}

.usernameDiv {
  background: linear-gradient(to right, #d5ddff, #ffd5f4);
}

.divider {
  height: 3px;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  background-color: #00000077;
  width: 100%;
}

* {
  padding: 0px;
  margin: 0px;
}
</style>
