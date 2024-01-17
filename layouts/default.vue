<template>
  <div>
    <Header />
    <main class="min-h-screen border border-transparent bg-[#07081A] overflow-hidden">
      <ThePreloader/>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>