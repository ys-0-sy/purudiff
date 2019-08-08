<template>
  <v-container
    fluid
    grid-list-md
    pa-2
  >
    <v-layout justify-center>
      <v-flex
        xs6
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
      textBox1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n",
      textBox2: "Lorem Ipsum is samply dammy text of the printing and typosetting industry.\n Lorem Ipsam has bean the industri's standard dummy txt evr sieuce tha 1700s, we hn an unknon printer took a galley of type and scrambled it to make a type specimen book."
    }
  },
  computed: {
    // eslint-disable-next-line prettier/prettier
    diffText1() {
      const wordsArray = Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.added
      })
      const newArray = []
      wordsArray.forEach(function (item, index, array) {
        const arr = item.value.match(/[\s\S]{1}/g) || []
        arr.forEach(function (item2, index, array) {
          const hasSpace = item2[0] === ' ' || String(arr[index - 1]).slice(-1) === ' '
          const newWords = { count: item2.length, value: item2, hasSpace, added: item.added, removed: item.removed }
          newArray.push(newWords)
          console.log(newWords)
        })
        console.log(arr)
      })
      console.log(newArray)
      return newArray
    },
    diffText2() {
      return Jsdiff.diffChars(this.textBox1, this.textBox2).filter((words) => {
        return !words.removed
      })
    }
  }
}
</script>
