<template>
  <v-flex style="padding :8px">
    <div>
      <span
        v-for="(item, idx) in diffText"
        :key="idx"
        class="word-container"
        :class="{
          'text-indenter': item.hasSpace,
          'red lighten-2 shake shake-constant': item.removed,
          'green lighten-2 shake shake-constant': item.added,
        }"
      >
        {{ replacer(item) }}
      </span>
    </div>
  </v-flex>
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
      return text.replace(/\n/g, isBlank && (item.removed || item.added) ? '[←]' : '')
    },
    isBlank(item) {
      return item.value.replace(/\n/g, '').length === 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'csshake';
.word-container {
  display: inline-block;
}
.text-indenter{
  text-indent: 0.5em;
}
</style>
