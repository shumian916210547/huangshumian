<template>
  <div class="wrpper" ref="wrpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrpper, {
      click: true,
      probeType: this.probeType,
    });
  },
  methods: {},
};
</script>

<style scoped></style>
