<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6 order-lg2>
        <v-textarea name="textbox1" label="text1" :value="textbox1" />
      </v-flex>
      <v-flex xs6 order-lg2>
        <v-textarea name="textbox2" label="text2" :value="textbox2" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn large @click="diffText()">
        Diff
      </v-btn>
    </v-layout>
    <v-layout row>
      <v-container>
        <v-flex xs6 order-lg2>
          <span
            v-for="item in difftext1"
            :key="item.value"
            :class="{ red: item.removed, blue: item.added }"
          >
            {{ item.value }}
          </span>
        </v-flex>
        <v-flex xs6 order-lg2>
          <span>{{ difftext1 }}</span>
          <span>{{ difftext2 }}</span>
        </v-flex>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import * as Jsdiff from 'diff'

export default {
  data() {
    return {
      textbox1: 'sample text1',
      textbox2: 'sample text2',
      difftext1: '',
      difftext2: 'text2'
    }
  },
  methods: {
    diffText() {
      this.difftext1 = Jsdiff.diffWords(this.textbox1, this.textbox2)
    }
  }
}
</script>

<style module>
.bold {
  font-weight: bold;
}

.red {
  color: red lighten-2;
}

.bule {
  color: blue lighten-2;
}
</style>
