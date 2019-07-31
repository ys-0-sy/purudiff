<template>
  <v-container>
    <span
      v-for="(item, idx) in diffText"
      :key="idx"
      class="word-container"
      :class="{
        'red lighten-2 shake shake-constant': item.removed,
        'green lighten-2 shake shake-constant': item.added,
      }"
    >
      <span v-html="replacer(item)" />
    </span>
  </v-container>
</template>

<script>
export default {
  props: {
    diffText: {
      type: Array,
      required: true
    }
  },
  methods: {
    replacer(item) {
      const text = item.value
      const isBlank = text.replace(/\n/g, '').length === 0
      return text.replace(/\n/g, isBlank && item.removed ? '[←]<br>' : '<br>')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'csshake';
.word-container {
  display: inline;
}
</style>
