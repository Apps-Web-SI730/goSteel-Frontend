<script setup>
import DeveloperCard from './developer-card.component.vue';
</script>

<template>
  <h2 id="title-team" class="text-center">
    <span class="typing-animation">{{ $t('meet-our-team') }}</span>
  </h2>
  <div class="card-container flex-wrap flex gap-4 justify-content-center">
    <developer-card
      v-for="developer in developers"
      :key="developer.name"
      :name="developer.name"
      :role="developer.role"
      :image="developer.image"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    developers: [
      {
        name: 'Pietro Minaya',
        role: 'CTO',
        image:
          'https://placehold.co/240',
      },
      {
        name: 'Developer 2',
        role: 'CEO',
        image:
          'https://placehold.co/240',
      },
      {
        name: 'Developer 3',
        role: 'Technical Leader',
        image:
          'https://placehold.co/240',
      },
      {
        name: '',
        role: 'Frontend Developer',
        image:
          'https://placehold.co/240',
      },
      {
        name: '',
        role: 'Frontend Developer',
        image:
          'https://placehold.co/240',
      }
    ],
  }),
};
</script>

<style scoped>
.typing-animation {
  font-family: Monospace;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 40px;
  white-space: nowrap;
  overflow: hidden;
}

.typing-animation::after {
  content: '|';
  display: inline-block;
  vertical-align: bottom;
  animation: cursor-blink 0.7s infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes typing-loop {
  0%,
  50% {
    width: 100%;
  }
  50.1%,
  100% {
    width: 0;
  }
}

.typing-animation::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  animation: typing 3s steps(40), typing-loop 10s infinite;
}
</style>
