<template>
  <section class="kara-projects-section reveal">
    <h2 class="label">WORK</h2>

    <div class="project-grid">
      <!-- Placeholder card while we build GitHub integration -->
      <div class="project-card pulse">
        <h3>Coming Soon</h3>
        <p>
          Repository highlights, pinned projects, and open-source systems will
          appear here.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.kara-projects-section {
  padding: 0 2rem;
}

.label {
  text-align: center;
  text-transform: uppercase;
  color: #b0b0b0;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
}

.project-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 1.8rem;
  transition: 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 28px rgba(255, 255, 255, 0.06);
}

/* subtle, existential floating animation */
.pulse {
  animation: pulseAnim 6s ease-in-out infinite alternate;
}

@keyframes pulseAnim {
  0% {
    transform: translateY(0px);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-8px);
    opacity: 1;
  }
}
</style>
