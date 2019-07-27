<template>
  <v-container fluid>
    <v-layout row>
      <v-flex
        xs6
        order-lg2
      >
        <v-textarea
          v-model="textBox1"
          name="textbox1"
          label="text1"
          auto-grow
        />
      </v-flex>
      <v-flex
        xs6
        order-lg2
      >
        <v-textarea
          v-model="textBox2"
          name="textbox2"
          label="text2"
          auto-grow
        />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-container>
        <span
          v-for="item in diffText1"
          :key="item.value"
          :class="{
            'red lighten-2 shake shake-constant': item.removed
          }"
        >
          {{ item.value }}
        </span>
      </v-container>
      <v-container>
        <span
          v-for="item in diffText2"
          :key="item.value"
          :class="[
            {
              'green lighten-2 shake shake-constant': item.added
            }
          ]"
        >
          {{ item.value }}
        </span>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import * as Jsdiff from 'diff'

export default {
  data() {
    return {
      textBox1: 'sample text1',
      textBox2: 'sample text2'
    }
  },
  computed: {
    // eslint-disable-next-line prettier/prettier
    diffText1: function () {
      return Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.added
      })
    },
    diffText2: function () {
      return Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.removed
      })
    }
  }
}
</script>

<style lang="scss">
@import 'csshake';
</style>
