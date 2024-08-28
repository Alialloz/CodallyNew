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
                    :placeholder="$t('Prenom')" aria-label="First name" />
                </div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="mb-1">{{ $t('Nom') }}<span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="lastName" v-model="form.lastName" required
                    :placeholder="$t('Nom')" aria-label="Last name" />
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
                  pattern="(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})|(\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2})" 
                  title="Please enter a valid phone number. Canadian numbers should be in the format (123) 456-7890 or 123-456-7890. French numbers should be in the format 01 23 45 67 89 or 01.23.45.67.89."
                />
              </div>
            </div>
              <div class="col-sm-6">
                <label for="email" class="mb-1">
                  {{ $t('mail') }}<span class="text-danger">*</span>
                </label>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" id="email" v-model="form.email" required
                  :placeholder="$t('mailPlaceholder')" aria-label="Email" />
                </div>
              </div>
              <div class="col-12">
                <label for="yourMessage" class="mb-1">{{ $t('msg') }} <span class="text-danger">*</span></label>
                <div class="input-group mb-3">
                  <textarea class="form-control" id="yourMessage" v-model="form.message" required
                    :placeholder="$t('msgPlaceholder')" style="height: 140px; resize: none; overflow: auto;"></textarea>
                </div>
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
      const serviceID = 'service_7nd7bnr';
      const templateID = 'template_7539y5f';
      const userID = 'IhUWxeGkSKWTZAumH';

      emailjs.send(serviceID, templateID, this.form, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isPopupVisible = true; // Show popup on success
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again later.');
        });
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
