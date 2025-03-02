<template>
  <section class="hero-section">
    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>

    <div class="container">
      <div class="hero-grid">
        <!-- Content Block -->
        <div class="hero-content">
          <span class="tagline">Engagement & Advocacy Platform</span>
          <h1 class="title">
            Shaping Futures Through
            <span class="highlighted-text">Strategic Events</span>
          </h1>
          <p class="description">
            Collaborative experiences designed to inspire innovation and drive meaningful change across industries.
          </p>

          <!-- Event List -->
          <ul class="event-list">
            <li
              v-for="(event, i) in heroEvents"
              :key="i"
              class="event-item"
            >
              <div class="event-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <span class="event-text">{{ event.title }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <NuxtLink
            to="/events#EYEA-events"
            class="cta-button"
          >
            <span class="button-text">Explore Our Calendar</span>
            <svg
              class="arrow-icon animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <!-- Image Gallery -->
        <div class="image-gallery">
          <!-- Column 1 -->
          <div class="gallery-column">
            <div class="gallery-item">
              <img
                src="@/assets/images/temp/event_cover1.png"
                class="gallery-image"
                alt="Conference event"
              />
              <div class="gradient-overlay-inner"></div>
            </div>
            <div class="gallery-item">
              <img
                src="@/assets/images/temp/event_cover2.png"
                class="gallery-image"
                alt="Networking event"
              />
              <div class="gradient-overlay-inner"></div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="gallery-column">
            <div class="gallery-item">
              <img
                src="@/assets/images/temp/event_cover3.png"
                class="gallery-image"
                alt="Workshop event"
              />
              <div class="gradient-overlay-inner"></div>
            </div>
            <div class="gallery-item">
              <img
                src="@/assets/images/temp/event_cover4.png"
                class="gallery-image"
                alt="Panel discussion"
              />
              <div class="gradient-overlay-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const heroEvents = ref([
  {
    id: 1,
    title: "Advocacy and Panel Discussions",
  },
  {
    id: 2,
    title: "Engagement and Networking Events",
  },
  {
    id: 3,
    title: "Workshops and Experience Sharing",
  },
]);
</script>

<style scoped>
/* General Styles */
.hero-section {
  position: relative;
  background-color: #ffffff; /* Light background */
  color: #222222; /* Default text color */
  overflow: hidden;
}

.dark-mode .hero-section {
  background-color: #1a1a1a; /* Dark background */
  color: #f5f5f5; /* Text color for dark mode */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Gradient Overlay */
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(66, 153, 225, 0.1), rgba(247, 129, 115, 0.1));
  border-radius: 2rem;
  transform: rotate(-3deg);
  z-index: 0;
  opacity: 0.5;
}

/* Hero Grid */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Hero Content */
.hero-content {
  z-index: 10;
  padding: 80px 0;
}

.tagline {
  font-size: 1.25rem;
  font-weight: 600;
  color: #4299e1; /* Primary color */
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: bold;
  margin-top: 10px;
}

.highlighted-text {
  color: #4299e1; /* Highlighted text color */
}

.description {
  font-size: 1.125rem;
  color: #6b7280; /* Grayish text color */
  margin-top: 20px;
  max-width: 480px;
}

/* Event List */
.event-list {
  margin-top: 40px;
}

.event-item {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.event-item:hover {
  transform: translateX(10px);
}

.event-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4299e1; /* Primary color */
  border-radius: 50%;
  margin-right: 16px;
  transition: all 0.3s ease;
}

.event-item:hover .event-icon {
  width: 40px;
  height: 40px;
}

.icon {
  width: 16px;
  height: 16px;
  fill: #ffffff; /* Icon color */
}

.event-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: #475569; /* Dark gray text color */
  transition: color 0.3s ease;
}

.event-item:hover .event-text {
  color: #4299e1; /* Highlighted text color */
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #4299e1; /* Primary color */
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-top: 24px;
}

.cta-button:hover {
  background-color: #3b82f6; /* Darker primary color */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.button-text {
  font-weight: 600;
}

.arrow-icon {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Image Gallery */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gradient-overlay-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .title {
    font-size: 2.25rem;
  }

  .image-gallery {
    grid-template-columns: 1fr;
  }
}
</style>