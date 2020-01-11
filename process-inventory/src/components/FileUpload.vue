<template>
  <div class="form-wrapper">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="input-group">
        <label>File Upload</label>
        <input 
          type="file" 
          ref="file" 
          @change="onSelect" 
        />
      </div>
      <div class="input-group">
        <button>Upload File Now</button>
      </div>
      <div class="form-message">
        <h5>{{message}}</h5>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FileUpload',
  data() {
    return {
      file: '',
      message: ''
    }
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0]
      this.file = file
    },
    async onSubmit() {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        await axios.post('/upload', formData)
        this.message = 'File Has Been Uploaded, please hold while it is processed'
      }
      catch(err) {
        this.message = `There was an error: ${JSON.stringify(err)}`
      }
    }
  },
}
</script>