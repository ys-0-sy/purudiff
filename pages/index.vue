<template>
  <v-container fluid>
    <v-layout justify-center row>
      <v-flex
        xs6
        order-lg2
      >
        <v-card
          style="padding :8px"
        >
          <v-textarea
            v-model="textBox1"
            name="textbox1"
            label="text1"
            rows="7"
            outline
            counter
          />
          <WordContainer :diff-text="diffText1" />
        </v-card>
      </v-flex>
      <v-flex
        xs6
        order-lg2
      >
        <v-card
          style="padding :8px"
        >
          <v-textarea
            v-model="textBox2"
            name="textbox2"
            label="text2"
            rows="7"
            outline
            counter
          />
          <WordContainer :diff-text="diffText2" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as Jsdiff from 'diff'
import WordContainer from '~/components/WordContainer'

export default {
  components: {
    WordContainer
  },
  data() {
    return {
      textBox1: 'aaa\n\nbbb\n\nccc\n\nddd',
      textBox2: 'aaa\n\nbbb\n\nccc\n\nddd'
    }
  },
  computed: {
    // eslint-disable-next-line prettier/prettier
    diffText1() {
      return Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.added
      })
    },
    diffText2() {
      return Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.removed
      })
    }
  }
}
</script>
