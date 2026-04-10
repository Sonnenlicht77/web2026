<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vitepress';

import { techList } from "../../data/list";

const router = useRouter();

const getTechIcon = (tech: { title: string; icon: string }): string => {
  return tech.icon || "📚";
};

const handleClick = (tech:any, event: MouseEvent) => {
  createRipple(event);
  if (tech.link) {
    router.go(tech.link);
  }
};





const createRipple = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  const ripple = document.createElement("span");
  const rect = target.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add("ripple");

  target.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

const cursorX = ref(0);
const cursorY = ref(0);
const isHovering = ref(false);

const handleMouseMove = (event: MouseEvent) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
});
</script>
<template>
    <div class="LayoutHome" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="cursor-follower" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
        <div class="tech-grid">
            <div class="tech-item" v-for="(tech, index) in techList" :key="index">
                <div class="tech-card" @click="(event) => handleClick(tech, event)">
                    <div class="tech-icon">{{ getTechIcon(tech) }}</div>
                    <div class="tech-name">{{ tech.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">

.LayoutHome {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  .cursor-follower {
    position: fixed;
    width: 15px;
    height: 15px;
    background: rgba(238, 156, 167, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

    &::before {
      content: "🔥";
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      opacity: 0;
      z-index: 1;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  }

  .tech-item {
    .tech-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2rem 1.5rem;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      border: 1px solid transparent;

      &:hover {
        border-color: #fff;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.2);
      }

      &:active {
        transform: translateY(-2px);
      }

      .tech-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;

        .tech-card:hover .tech-icon {
          transform: scale(1.1);
        }
      }

      .tech-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        transition: color 0.3s ease;

        .tech-card:hover .tech-name {
          color: #ee9ca7;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(238, 156, 167, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    }
  }
}
</style>
