<template>
    <div v-if="visible" class="popup-overlay">
      <div class="popup-content">
        <h3>{{$t('successTitle')}}</h3>
        <p>{{$t('successMessage')}}</p>
        <button @click="closePopup" class="btn btn-primary">OK</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .popup-content h3 {
    margin-bottom: 10px;
    color: #0044e3;
  }
  
  .popup-content p {
    margin-bottom: 20px;
  }
  
  .popup-content button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0044e3;
    color: #fff;
    cursor: pointer;
  }
  
  .popup-content button:hover {
    background-color: #0044e3;
  }
  </style>
  