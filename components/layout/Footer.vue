<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import anonymous_mutator from '@/composable/anonymous_mutator';
import insert_subscription from '@/API/mutation/subscription/insert.gql';
import useNotify from '@/use/notify';

const { notify } = useNotify();
const email = ref('');
const serviceLinks = ref([
  { name: 'Kena', link: 'https://kena.eyea.et' },
  { name: 'Zelela', link: 'https://zelela.eyea.et' },
  { name: 'Events', link: 'https://www.eyea.et/events' },
  { name: 'Privacy', link: 'https://www.eyea.et/privacy' },
]);
const engagementsLinks = ref([
  { name: 'News', link: 'https://www.eyea.et/news' },
  { name: 'Membership', link: 'https://www.eyea.et/membership' },
  { name: 'Partners', link: 'https://www.eyea.et/partners' },
  { name: 'Support', link: 'https://www.eyea.et/supports' },
]);

const { mutate, onDone, onError } = anonymous_mutator(insert_subscription);
const { handleSubmit } = useForm();

const submit = handleSubmit((_, { resetForm }) => {
  mutate({ email: email.value })
    .then(() => resetForm())
    .catch((error) => console.log('error', error));
});

onDone(() => {
  notify({
    title: 'Subscription',
    description: 'You have successfully subscribed to our newsletter',
    cardClass: 'bg-green-100',
  });
});

onError(() => {
  notify({
    title: 'Subscription',
    description: 'You have already subscribed to our newsletter',
    cardClass: 'bg-red-100',
  });
});
</script>

<template>
  <footer class="footer-container">
    <div class="footer-grid">
      <!-- Brand Section -->
      <div class="brand-section">
        <NuxtLink to="/" class="logo-link">
          <img 
            src="@/assets/images/logos/final_logo.svg" 
            alt="EYEA Logo"
            class="logo"
          >
        </NuxtLink>
        <p class="brand-description">
          Ethiopia's leading youth-led entrepreneurial community driving 
          innovation and economic transformation
        </p>
        <div class="social-icons">
          <a href="#"><Icon name="uil:facebook" /></a>
          <a href="#"><Icon name="uil:twitter" /></a>
          <a href="#"><Icon name="uil:instagram" /></a>
          <a href="#"><Icon name="uil:linkedin" /></a>
        </div>
      </div>

      <!-- Navigation Sections -->
      <div class="nav-columns">
        <!-- Service Links -->
        <div class="nav-column">
          <h3 class="section-title">Services</h3>
          <ul>
            <li v-for="link in serviceLinks" :key="link.link">
              <NuxtLink :to="link.link" class="nav-link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Engagement Links -->
        <div class="nav-column">
          <h3 class="section-title">Engage</h3>
          <ul>
            <li v-for="link in engagementsLinks" :key="link.link">
              <NuxtLink :to="link.link" class="nav-link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div class="nav-column">
          <h3 class="section-title">Stay Updated</h3>
          <form @submit.prevent="submit" class="newsletter-form">
            <div class="input-group">
              <InputsTextfield
                name="email"
                rules="required|email"
                v-model="email"
                placeholder="Enter your email"
                class="email-input"
                :disabled="loading"
              />
              <button type="submit" class="subscribe-btn">
                <span v-if="!loading">Subscribe</span>
                <Icon v-else name="eos-icons:bubble-loading" class="loading" />
              </button>
            </div>
            <p class="subscription-msg">
              Get monthly updates on events, opportunities and more
            </p>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bottom-bar">
        <p class="copyright">
          © {{ new Date().getFullYear() }} EYEA. All rights reserved.
        </p>
        <NuxtLink to="/terms" class="legal-link">Terms of Service</NuxtLink>
        <NuxtLink to="/privacy" class="legal-link">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #c88464 0%, #405c90 100%);
  padding: 4rem 0;
  color: #fff; /* Light text for visibility on dark gradient */
}

.footer-grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.brand-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 180px;
  height: auto;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: rotate(-5deg);
}

.brand-description {
  max-width: 300px;
  text-align: center;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #fff; /* White text for visibility */
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-icons a {
  color: #fff; /* White icons for visibility */
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #FFD700; /* Gold for hover effect */
}

.nav-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  color: #fff; /* White text for visibility */
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30%;
  height: 2px;
  background: #FFD700; /* Gold underline */
}

.nav-link {
  display: block;
  margin-bottom: 0.8rem;
  color: #fff; /* White text for visibility */
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #FFD700; /* Gold for hover effect */
}

.input-group {
  position: relative;
}

.email-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #FFD700; /* Gold border */
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.1); /* Transparent white for input */
  color: #fff; /* White text for input */
  transition: border-color 0.3s ease;
}

.email-input:focus {
  border-color: #FFA500; /* Orange for focus */
}

.email-input::placeholder {
  color: #fff; /* White placeholder text */
  opacity: 0.7;
}

.subscribe-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #FFA500; /* Orange button */
  color: #fff; /* White text for button */
  padding: 12px 24px;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #FFD700; /* Gold for hover */
}

.loading {
  animation: spin 1s linear infinite;
}

.subscription-msg {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: #fff; /* White text for visibility */
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid #FFD700; /* Gold border */
  background: rgba(0, 0, 0, 0.1); /* Semi-transparent dark background */
}

.copyright {
  font-size: 0.9rem;
  color: #fff; /* White text for visibility */
}

.legal-link {
  font-size: 0.9rem;
  color: #fff; /* White text for visibility */
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #FFD700; /* Gold for hover */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    padding: 0 0.5rem; /* Reduced padding for mobile */
  }
  
  .nav-columns {
    display: grid;
    grid-template-areas: 
      "services engage"
      "stay stay";
    gap: 1.5rem;
  }

  .nav-column:nth-child(1) {
    grid-area: services;
  }

  .nav-column:nth-child(2) {
    grid-area: engage;
  }

  .nav-column:nth-child(3) {
    grid-area: stay;
  }

  .brand-section {
    align-items: flex-start; /* Align left on mobile */
  }

  .brand-description {
    text-align: left; /* Left-align description on mobile */
    max-width: 100%; /* Full width on mobile */
  }

  .social-icons {
    margin-top: 1rem;
    justify-content: flex-start; /* Align left on mobile */
  }

  .section-title {
    font-size: 1rem; /* Slightly smaller title on mobile */
  }

  .nav-link {
    font-size: 0.9rem; /* Smaller links on mobile */
  }

  .input-group {
    margin-bottom: 0.5rem; /* Reduced margin for mobile */
  }

  .email-input {
    padding: 10px 14px; /* Slightly smaller padding on mobile */
  }

  .subscribe-btn {
    padding: 10px 20px; /* Slightly smaller padding on mobile */
  }

  .subscription-msg {
    font-size: 0.8rem; /* Smaller text on mobile */
  }

  .bottom-bar {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center; /* Center-align text on mobile */
  }

  .legal-link {
    font-size: 0.8rem; /* Smaller legal links on mobile */
  }
}
</style>