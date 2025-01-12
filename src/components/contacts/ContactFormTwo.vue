<template>
  <section class="contact-us-form pt-60 pb-120">
    <div class="container">
      <div class="row justify-content-lg-between align-items-center">
        <div class="col-lg-6 col-md-8">
          <div class="section-heading">
            <h2>{{ $t('ContactTitre') }}</h2>
            <p>{{ $t('ContactDes') }}</p>
          </div>
          <form @submit.prevent="sendEmail" class="register-form">
            <div class="row">
              <div class="col-sm-6">
                <label for="firstName" class="mb-1">{{ $t('Prenom') }} <span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="firstName" v-model="form.firstName" required
                    :placeholder="$t('Prenom')" aria-label="First name" maxlength="20" />
                </div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="mb-1">{{ $t('Nom') }}<span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="lastName" v-model="form.lastName" required
                    :placeholder="$t('Nom')" aria-label="Last name" maxlength="20" />
                </div>
              </div>
              <div class="col-sm-6">
                <label for="phone" class="mb-1">{{ $t('Tel') }}<span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="phone" 
                    v-model="form.phone" 
                    required
                    :placeholder="$t('Tel')" 
                    aria-label="Phone"
                    maxlength="13"
                    @input="sanitizePhoneInput"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <label for="email" class="mb-1">
                  {{ $t('mail') }}<span class="text-danger">*</span>
                </label>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" id="email" v-model="form.email" required
                  :placeholder="$t('mailPlaceholder')" aria-label="Email" maxlength="30" />
                </div>
              </div>
              <div class="col-12">
                <label for="yourMessage" class="mb-1">{{ $t('msg') }} <span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <textarea class="form-control" id="yourMessage" v-model="form.message" required
                    :placeholder="$t('msgPlaceholder')" style="height: 140px; resize: none; overflow: auto;" maxlength="400"></textarea>
                </div>
                <small class="text-muted">{{ form.message.length }}/400 caractères</small>
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-4">
              {{ $t('EnvoyerFor') }}
            </button>
          </form>
        </div>
        <div class="col-lg-5 col-md-10">
          <div class="contact-us-img">
            <img src="@/assets/img/contact-us-img-2.svg" alt="contact us" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <Popup :visible="isPopupVisible" @close="isPopupVisible = false" />
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import Popup from '../../components/popup/Popup.vue';

export default {
  components: { Popup },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      },
      isPopupVisible: false
    };
  },
  methods: {
    sendEmail() {
      const serviceID = process.env.VUE_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
      const userID = process.env.VUE_APP_EMAILJS_USER_ID;

      emailjs.send(serviceID, templateID, this.form, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isPopupVisible = true;
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again later.');
        });
    },
    sanitizePhoneInput(event) {
      const input = event.target;
      const cleanedValue = input.value.replace(/\D/g, '');
      
      this.form.phone = cleanedValue;
      input.value = cleanedValue;
    }
  }
}
</script>

<style scoped>
.contact-us-form {
  background-image: url("../../assets/img/shape/contact-us-bg.svg");
  background-repeat: no-repeat;
  background-position: bottom left;
}
</style>