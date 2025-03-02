<template>
  <section class="org-structure">
    <!-- Title -->
    <h2 class="title">EYEA Organizational Structure</h2>

    <!-- Infographic Summary -->
    <div class="infographic">
      <div class="info-card">
        <i class="fas fa-users-cog"></i>
        <div class="info-content">
          <h3>4</h3>
          <p>Operational Units</p>
        </div>
      </div>
      <div class="info-card">
        <i class="fas fa-sitemap"></i>
        <div class="info-content">
          <h3>7</h3>
          <p>Org Levels</p>
        </div>
      </div>
      <div class="info-card">
        <i class="fas fa-user-tie"></i>
        <div class="info-content">
          <h3>3</h3>
          <p>Leadership Positions</p>
        </div>
      </div>
      <div class="info-card">
        <i class="fas fa-hands-helping"></i>
        <div class="info-content">
          <h3>4</h3>
          <p>Support Services</p>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="legend">
      <div v-for="(item, index) in legendItems" :key="index" class="legend-item">
        <span class="color-box" :style="{ backgroundColor: item.color }"></span>
        {{ item.label }}
      </div>
    </div>

    <!-- Chart Container -->
    <div class="chart-container">
      <!-- Connector Lines (Desktop Only) -->
      <svg class="connectors" viewBox="0 5 1200 1400" preserveAspectRatio="none">
        <!-- Main Vertical Lines -->
        <path class="main-line" d="M600 100 L600 850" />
        <path class="main-line" d="M600 100 L600 1200" />
        <path class="main-line" d="M600 500 L600 600" />

        <!-- External Auditor Line -->
        <path class="main-line" d="M800 200 L600 200" />

        <!-- Level 3 Horizontal Lines -->
        <path class="main-line" d="M200 350 L1000 350" />

        <!-- Level 4 & 5 Lines -->
        <path class="dashed-line" d="M200 850 L1000 850" />

        <!-- Level 5 Horizontal Line -->
        <path class="main-line" d="M800 700 L600 700" />

        <!-- Level 6 to Level 7 Line -->
        <path class="main-line" d="M800 500 L600 500" />
        <!-- Operations Manager Vertical Line -->
        <line x1="600" y1="500" x2="600" y2="600" class="main-line"/>
        
        <!-- Level 7 Connectors -->
        <path d="M600 600 L600 650" class="main-line" fill="none"/>
      </svg>

      <!-- Level 1 - General Assembly -->
      <div class="node level-1">
        <div class="node-content governance">
          <i class="fas fa-users"></i>
          <h3>General Assembly</h3>
          <p>Governance Body</p>
          <status-indicator status="active" />
        </div>
      </div>

      <!-- Level 2 - External Auditor -->
      <div class="node level-2">
        <div class="node-content advisory">
          <i class="fas fa-balance-scale"></i>
          <h3>External Auditor</h3>
          <p>Independent Oversight</p>
        </div>
      </div>

      <!-- Level 3 - Leadership -->
      <div class="level-3-container">
        <div class="node" v-for="(leader, index) in leadership" :key="index">
          <div class="node-content" :class="leader.type">
            <i :class="leader.icon"></i>
            <h3>{{ leader.title }}</h3>
            <p>{{ leader.subtitle }}</p>
            <status-indicator v-if="leader.status" :status="leader.status" />
          </div>
        </div>
      </div>

      <!-- Level 4 - Monitoring Units -->
      <div class="level-4-container">
        <div class="node">
          <div class="node-content support">
            <i class="fas fa-chart-line"></i>
            <h3>Monitoring & Evaluation</h3>
            <p>Assesses organizational performance and effectiveness</p>
          </div>
        </div>

        <div class="node">
          <div class="node-content support">
            <i class="fas fa-search"></i>
            <h3>Internal Auditor</h3>
            <p>Ensures compliance and effectiveness of internal controls</p>
          </div>
        </div>
      </div>

      <!-- Level 5 - Support Services -->
      <div class="level-5-container">
        <div class="node">
          <div class="node-content support">
            <i class="fas fa-laptop-code"></i>
            <h3>IT and Communication Service</h3>
            <p>Provides technical support and manages communication tools</p>
          </div>
        </div>
        <div class="node">
          <div class="node-content support">
            <i class="fas fa-file-invoice-dollar"></i>
            <h3>Administration and Finance Service</h3>
            <p>Manages resources and financial activities</p>
          </div>
        </div>
      </div>

      <!-- Level 6 - Operations Manager -->
      <div class="node level-6">
        <div class="node-content operations">
          <i class="fas fa-tasks"></i>
          <h3>Operations Manager</h3>
          <p>Oversees day-to-day operations of the organization</p>
          <status-indicator status="active" />
        </div>
      </div>

      <!-- Level 7 - Operational Units -->
      <div class="level-7-container">
        <div class="node" v-for="(unit, index) in operationalUnits" :key="index">
          <div class="node-content operations">
            <i :class="unit.icon"></i>
            <h3>{{ unit.title }}</h3>
            <p>{{ unit.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile List View -->
    <div class="mobile-list-view">
      <div class="section-group">
        <h3 class="section-title governance-title">Governance</h3>
        <div class="list-item">
          <i class="fas fa-users"></i>
          <div>
            <h4>General Assembly</h4>
            <p>Governance Body</p>
          </div>
        </div>
      </div>

      <div class="section-group">
        <h3 class="section-title advisory-title">Advisory</h3>
        <div class="list-item">
          <i class="fas fa-balance-scale"></i>
          <div>
            <h4>External Auditor</h4>
            <p>Independent Oversight</p>
          </div>
        </div>
        <div class="list-item">
          <i class="fas fa-child"></i>
          <div>
            <h4>Youth Advisory Board</h4>
            <p>Youth Representation</p>
          </div>
        </div>
        <div class="list-item">
          <i class="fas fa-chess-queen"></i>
          <div>
            <h4>Strategic Advisory Board</h4>
            <p>Strategy Development</p>
          </div>
        </div>
      </div>

      <div class="section-group">
        <h3 class="section-title executive-title">Executive</h3>
        <div class="list-item">
          <i class="fas fa-star"></i>
          <div>
            <h4>President</h4>
            <p>Executive Leadership</p>
          </div>
        </div>
      </div>

      <div class="section-group">
        <h3 class="section-title support-title">Support Services</h3>
        <div v-for="unit in monitoringUnits" :key="unit.title" class="list-item">
          <i :class="unit.icon"></i>
          <div>
            <h4>{{ unit.title }}</h4>
            <p>{{ unit.subtitle }}</p>
          </div>
        </div>
        <div v-for="service in supportServices" :key="service.title" class="list-item">
          <i :class="service.icon"></i>
          <div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="section-group">
        <h3 class="section-title operations-title">Operations</h3>
        <div class="list-item">
          <i class="fas fa-tasks"></i>
          <div>
            <h4>Operations Manager</h4>
            <p>Oversees day-to-day operations of the organization</p>
          </div>
        </div>
        <div v-for="unit in operationalUnits" :key="unit.title" class="list-item">
          <i :class="unit.icon"></i>
          <div>
            <h4>{{ unit.title }}</h4>
            <p>{{ unit.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrganizationalChart',
  data() {
    return {
      legendItems: [
        { color: '#245ca8', label: 'Governance' },
        { color: '#fcb41c', label: 'Advisory' },
        { color: '#349c54', label: 'Operations' },
        { color: '#3c8c80', label: 'Support' }
      ],
      leadership: [
        {
          icon: 'fas fa-child',
          title: 'Youth Advisory Board',
          subtitle: 'Youth Representation',
          type: 'advisory'
        },
        {
          icon: 'fas fa-star',
          title: 'President',
          subtitle: 'Executive Leadership',
          type: 'executive',
          status: 'active'
        },
        {
          icon: 'fas fa-chess-queen',
          title: 'Strategic Advisory Board',
          subtitle: 'Strategy Development',
          type: 'advisory'
        }
      ],
      monitoringUnits: [
        {
          icon: 'fas fa-chart-line',
          title: 'Monitoring & Evaluation',
          subtitle: 'Assesses organizational performance and effectiveness'
        },
        {
          icon: 'fas fa-search',
          title: 'Internal Auditor',
          subtitle: 'Ensures compliance and effectiveness of internal controls'
        }
      ],
      supportServices: [
        {
          icon: 'fas fa-laptop-code',
          title: 'IT and Communication Service',
          subtitle: 'Provides technical support and manages communication tools'
        },
        {
          icon: 'fas fa-file-invoice-dollar',
          title: 'Administration and Finance Service',
          subtitle: 'Manages resources and financial activities'
        }
      ],
      operationalUnits: [
        {
          icon: 'fas fa-user-friends',
          title: 'Membership Development and Engagement Unit',
          subtitle: 'Focuses on member relations and engagement strategies'
        },
        {
          icon: 'fas fa-bullhorn',
          title: 'Policy Advocacy Unit',
          subtitle: 'Promotes relevant policies and engages in advocacy'
        },
        {
          icon: 'fas fa-project-diagram',
          title: 'Project Management Unit',
          subtitle: 'Responsible for executing projects and initiatives'
        },
        {
          icon: 'fas fa-handshake',
          title: 'Partnership and Resource Mobilization Unit',
          subtitle: 'Builds alliances and mobilizes resources for the organization'
        }
      ]
    };
  },
  components: {
    StatusIndicator: {
      props: ['status'],
      template: `
        <div class="status-indicator" :class="status">
          <div class="status-dot"></div>
          <span>{{ status }}</span>
        </div>
      `
    }
  }
};
</script>

<style scoped>
.org-structure {
  @apply bg-white dark:bg-gray-900 p-4 md:p-8 min-h-screen;
}

.title {
  font-size: 1.5rem; /* text-2xl */
  @media (min-width: 768px) {
    font-size: 1.875rem; /* md:text-3xl */
  }
  font-weight: 700; /* font-bold */
  text-align: center; /* text-center */
  margin-bottom: 1.5rem; /* mb-6 */
  color: #14be7a; /* text-gray-800 */
}
.dark .title {
  color: #ffffff; /* dark:text-white */
}

/* Infographic Styles */
.infographic {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
}

@media (min-width: 768px) {
  .infographic {
    grid-template-columns: repeat(4, 1fr);
  }
}

.info-card {
  background-color: white;
  background-color: var(--color-dark-bg-gray-800);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s;
}
.info-card:hover {
  transform: scale(1.05);
}

.info-card i {
  font-size: 1.5rem; /* text-2xl */
  color: #165fd5; /* text-blue-500 */
}
.dark .info-card i {
  color: #60a5fa; /* dark:text-blue-400 */
}

.info-content h3 {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  color: #1f2937; /* text-gray-800 */
}
.dark .info-content h3 {
  color: #ffffff; /* dark:text-white */
}

.info-content p {
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-gray-600 */
}
.dark .info-content p {
  color: #9ca3af; /* dark:text-gray-400 */
}

.legend {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .legend {
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem; /* text-xs */
  color: #4b5563; /* text-gray-600 */
}

@media (min-width: 768px) {
  .legend-item {
    font-size: 0.875rem; /* md:text-sm */
  }
}

.dark .legend-item {
  color: #d1d5db; /* dark:text-gray-300 */
}

.color-box {
  @apply w-3 h-3 md:w-4 md:h-4 rounded-sm;
}

.chart-container {
  @apply relative mx-auto max-w-7xl hidden md:block;
  min-height: 1200px;
}

.node {
  @apply relative z-0 transition-transform duration-300 hover:scale-125;
}

.node-content {
  @apply bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg border-2 w-full md:w-64 lg:w-72 text-center;
}

.node-content h3 {
  @apply text-base md:text-lg font-semibold mb-1 md:mb-2 dark:text-white;
}

.node-content p {
  @apply text-xs md:text-sm text-gray-500 dark:text-gray-400;
}

.node-content i {
  @apply text-xl md:text-2xl mb-2 md:mb-3;
}

/* Level Containers */
.level-1 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.level-2 {
  @apply absolute top-32 right-1/4;
}

.level-3-container {
  @apply absolute top-64 left-0 right-0 flex justify-between px-4 md:px-24;
}

.level-4-container {
  @apply absolute top-96 right-1/4 flex flex-col items-center gap-8;
}

.level-5-container {
  @apply absolute top-[43rem] left-1/2 -translate-x-1/2 flex justify-between w-full md:w-3/4;
}

.level-6 {
  @apply absolute top-[53rem] left-1/2 -translate-x-1/2;
}

.level-7-container {
  @apply absolute top-[62rem] left-0 right-0 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-12;
}

/* Node Types */
.governance {
  @apply border-blue-500;
}

.executive {
  @apply border-green-300;
}

.advisory {
  @apply border-yellow-500;
}

.operations {
  @apply border-green-600;
}

.support {
  @apply border-teal-600;
}

/* Connectors */
.connectors {
  @apply absolute inset-0 w-full h-full pointer-events-none;
}

.main-line,
.dashed-line {
  @apply stroke-2;
  stroke-dasharray: 1000; /* Set a large dash length to cover the entire path */
  stroke-dashoffset: 1000; /* Initially hide the line */
}

.main-line {
  @apply stroke-blue-400;
  animation: drawLine 3s forwards, heartbeat 1.5s infinite ease-in-out alternate;
}

.dashed-line {
  @apply stroke-gray-400;
  stroke-dasharray: 5 5; /* Maintain dashed style */
  animation: drawLine 1s forwards 1s; /* Start 1s later, no heartbeat */
}

/* Stagger animations for specific paths */
.connectors path[d="M200 350 L1000 350"] {
  animation-delay: 0s; /* Level 3 horizontal line (President to advisory) starts immediately */
}

.connectors path[d="M600 100 L600 850"] {
  animation-delay: 0.5s; /* Main vertical line to Level 5 starts slightly later */
}

.connectors path[d="M600 100 L600 1200"] {
  animation-delay: 0.7s; /* Extended vertical line to Level 7 */
}

.connectors path[d="M800 200 L600 200"] {
  animation-delay: 0.3s; /* External Auditor line */
}

.connectors path[d="M200 850 L1000 850"] {
  animation-delay: 1s; /* Level 4 & 5 dashed line */
}

.connectors path[d="M800 700 L600 700"] {
  animation-delay: 0.9s; /* Level 5 horizontal */
}

.connectors line[x1="600"][y1="500"] {
  animation-delay: 0.8s; /* Operations Manager vertical line */
}

.connectors path[d="M600 600 L600 650"] {
  animation-delay: 1.2s; /* Level 7 vertical */
}

/* Animation Keyframes */
@keyframes drawLine {
  0% {
    stroke-dashoffset: 1000; /* Line starts hidden */
  }
  100% {
    stroke-dashoffset: 0; /* Line fully drawn */
  }
}

@keyframes heartbeat {
  0%, 100% {
    stroke-width: 2; /* Normal thickness */
    opacity: 0.8;
  }
  50% {
    stroke-width: 4; /* Thicker during pulse */
    opacity: 1;
  }
}

/* Pulse effect for President node */
.level-3-container .node.executive .node-content {
  animation: pulse 0.5s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(52, 156, 84, 0.7); /* Green shadow matching executive border */
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(52, 156, 84, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(52, 156, 84, 0);
  }
}

.main-line {
  @apply stroke-blue-700 stroke-2;
}

.dashed-line {
  @apply stroke-gray-800 stroke-2;
  stroke-dasharray: 5 5;
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
}

.status-indicator.active .status-dot {
  background-color: #10b981; /* Tailwind's green-500 */
}

/* Mobile List View */
.mobile-list-view {
  @apply space-y-6 mt-6 block md:hidden;
}

.section-group {
  @apply border-l-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-md overflow-hidden;
}

.section-title {
  @apply text-lg font-bold p-3 text-white;
}

.governance-title {
  @apply bg-blue-600 border-l-4 border-blue-800;
}

.advisory-title {
  @apply bg-yellow-500 border-l-4 border-yellow-600;
}

.executive-title {
  @apply bg-green-600 border-l-4 border-green-800;
}

.operations-title {
  @apply bg-green-600 border-l-4 border-green-800;
}

.support-title {
  @apply bg-teal-600 border-l-4 border-teal-800;
}

.list-item {
  @apply p-4 border-b border-gray-200 dark:border-gray-700 flex items-start gap-3;
}

.list-item i {
  @apply text-xl text-gray-500 dark:text-gray-400 mt-1;
}

.list-item h4 {
  @apply font-semibold text-gray-800 dark:text-white;
}

.list-item p {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

/* Responsive Adjustments */
@media (max-width: 767px) {
  .chart-container {
    display: none;
  }

  .mobile-list-view {
    display: block;
  }

  .section-group {
    width: 100%;
  }

  .list-item {
    flex-direction: row;
    align-items: flex-start;
  }
}

@media (min-width: 768px) {
  .mobile-list-view {
    display: none;
  }
}

/* Ensure chart fits on smaller desktop screens */
@media (min-width: 768px) and (max-width: 1280px) {
  .node-content {
    @apply w-56 p-4;
  }
  
  .node-content h3 {
    @apply text-base;
  }
  
  .node-content p {
    @apply text-xs;
  }
  
  .level-3-container {
    @apply px-1;
  }
  
  .level-7-container {
    @apply grid-cols-2 px-1 gap-4;
  }
}
</style>