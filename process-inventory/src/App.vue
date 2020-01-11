<template>
  <div id="app">
    <h1>Upload your CSV</h1>
    <file-upload />
    
  </div>
</template>

<script>
import FileUpload from './components/FileUpload.vue'

export default {
  name: 'app',
  components: {
    FileUpload
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
