<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6 order-lg2>
        <v-textarea
          v-model="textbox1"
          name="textbox1"
          label="text1"
          auto-grow
          @input="diffText"
        />
      </v-flex>
      <v-flex xs6 order-lg2>
        <v-textarea
          v-model="textbox2"
          name="textbox2"
          label="text2"
          auto-grow
          @input="diffText"
        />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-container>
        <span
          v-for="item in difftext1"
          :key="item.value"
          :class="{
            'red lighten-2': item.removed
          }"
        >
          {{ item.value }}
        </span>
      </v-container>
      <v-container>
        <span
          v-for="item in difftext2"
          :key="item.value"
          :class="[
            {
              'green lighten-2': item.added
            },
            buruburu
          ]"
        >
          {{ item.value }}
        </span>
        <span class="shake">test</span>
      </v-container>
    </v-layout>
    <v-layout row>
      <v-container>
        <v-flex xs6 order-lg2>
          <span>{{ difftext1 }}</span>
        </v-flex>
      </v-container>
      <v-container>
        <span>{{ difftext2 }}</span>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import * as Jsdiff from 'diff'
import 'csshake'

export default {
  data() {
    return {
      textbox1: 'sample text1',
      textbox2: 'sample text2',
      difftext1: '',
      difftext2: ''
    }
  },
  methods: {
    diffText() {
      return this.parseTexts(Jsdiff.diffChars(this.textbox1, this.textbox2))
    },
    parseTexts(difftext) {
      this.difftext1 = difftext.filter((words) => {
        return !words.added
      })
      this.difftext2 = difftext.filter((words) => {
        return !words.removed
      })
    }
  }
}
</script>

<style module>
@import 'csshake';

.buruburu {
  display: inline-block;
  animation: hurueru 0.1s infinite;
}

@keyframes hurueru {
  0% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotateZ(1deg);
  }
  50% {
    transform: translate(0px, 2px) rotateZ(0deg);
  }
  75% {
    transform: translate(2px, 0px) rotateZ(-1deg);
  }
  100% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
}
</style>
