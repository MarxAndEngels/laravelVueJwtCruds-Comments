<template lang="">
    <div>
         <div class='loader'></div>
    </div>
</template>
<script>
export default {
    name: 'Loader'
}
</script>
<style scoped>
    .loader {
 position: fixed;
 width: 50px;
 height: 50px;
   top: 50%;
     left:50%;
     margin-left: -25px;
 border:6px solid rgba(13, 71, 161, 0.6);
 border-radius: 50%;
 border-left-color:#0D47A1;
 animation: loader 1.3s linear infinite;
}
@keyframes loader {
 100% {
  transform: rotate(360deg);
 }
}
</style>