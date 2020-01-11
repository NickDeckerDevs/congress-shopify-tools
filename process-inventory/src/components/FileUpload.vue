<template>
  <div class="file">
    <form enctype="multipart/form-data">
      <div class="input-group">
        <label>File Upload</label>
        <input type="file" />
      </div>
      <div class="input-group">
        <button>Upload File</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FileUpload'
}
</script>