<template>
  <section class="relative [#349c54]/20 dark:from-gray-900 dark:to-[#245ca4]/20 overflow-hidden isolate">
    <!-- Geometric Background Elements -->
    <div class="absolute inset-0 z-0 opacity-20">
      <div class="absolute top-1 right-0 w-64 h-64 bg-[#349c54]/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1 right-0 w-64 h-64 bg-[#349c54]/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto py-28 px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content Column -->
        <div class="space-y-8 relative">
          <!-- EYEA Badge -->
          <div class="inline-flex items-center gap-3 text-[#349c54] dark:text-[#3c8c80] font-semibold">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15.93V21c-3.17-.78-5.6-3.65-6-7H6c.4 3.29 2.97 6 6 6.93zM18 11c-.4 3.29-2.83 6.12-6 7v-2.93c3.03-.93 5.6-3.61 6-6.07h-6v-2h6V6l-6 2.25V4.26L18 6v5z"/>
            </svg>
            <span>Ethiopian Youth Entrepreneurs Association</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Empowering 
            <span class="relative inline-block bg-gradient-to-r from-[#349c54] to-[#245ca4] bg-clip-text text-transparent">
              Ethiopia's Future
              <div class="absolute bottom-2 inset-x-0 h-3 bg-[#fcb41c]/30 -rotate-1"></div>
            </span>
            Business Leaders
          </h1>

          <!-- Mission Statement -->
          <div class="pl-6 border-l-4 border-[#fcb41c]">
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Fostering sustainable economic growth through youth entrepreneurship development, 
              innovative capacity building, and strategic ecosystem partnerships.
            </p>
          </div>

          <!-- Key Initiatives -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 bg-[#e71d37]/10 rounded-xl">
              <div class="text-[#e71d37] font-semibold mb-2">Kena</div>
              <p class="text-sm text-gray-600 dark:text-gray-300">Capacity-building service product of the EYEA, with an objective to provide training, mentorship, access to finance, and market exposure to youth-founded or run businesses.  It also aims to encourage youth entrepreneurship through hosting innovation competitions.</p>
            </div>
            <div class="p-4 bg-[#4b1796]/10 rounded-xl">
              <div class="text-[#4b1796] font-semibold mb-2">Zelela</div>
              <p class="text-sm text-gray-600 dark:text-gray-300">Designed to sound inputs of policy advocacy activities that enables every stakeholder and concerned bodies in innovation driven entrepreneurial ecosystem to address the challenges facing young Ethiopians in their entrepreneurial vision, essentially in the areas of skills, access to finance, policy advocacy, access to networking and information, and bureaucratic bottlenecks. </p>
            </div>
          </div>

          <!-- CTA -->
          <NuxtLink 
            to="/membership" 
            class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#349c54] to-[#245ca4] hover:from-[#3c8c80] hover:to-[#405c90] text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Join Our Network
            <svg class="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Image Column -->
        <div class="relative group">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:rotate-1">
            <img 
              src="@/assets/images/temp/WhatsApp%20Image%202025-02-17%20at%2017.38.21_69609b91.jpg"
              alt="EYEA Members Collaborating" 
              class="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#349c54]/40 to-transparent"></div>
            
            <!-- Impact Stats -->
            <div class="absolute bottom-8 left-8 text-white">
              <div class="flex gap-8">
                <div class="pr-8 border-r border-white/20">
                  <div class="text-2xl font-bold">487+</div>
                  <div class="text-sm">Fully registered Entrepreneurs</div>
                </div>
                <div>
                  <div class="text-2xl font-bold"></div>
                  <div class="text-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Accent Element -->
          <div class="absolute -top-8 -right-8 w-24 h-24 bg-[#fcb41c]/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes bounce-horizontal {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

.animate-bounce-horizontal {
  animation: bounce-horizontal 1.5s ease-in-out infinite;
}

/* Dark Mode Adaptations */
@media (prefers-color-scheme: dark) {
  section {
    background: linear-gradient(to bottom right, #1a1a1a, #245ca4/10);
  }
  
  .border-l-4 {
    border-color: #fcb41c;
  }
  
  .bg-\[\#349c54\]\/10 {
    background-color: rgba(20, 25, 21, 0.15);
  }
}
</style>