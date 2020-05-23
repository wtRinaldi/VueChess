<template>
  <div class="chessContainer">
    <div v-for="(row, rowIndex) in chessPieceLocation" :key="rowIndex">
      <div v-for="(piece, gridIndex) in row" :key="gridIndex" class="gridSquare" :class="[isWhite(rowIndex, gridIndex) ? 'whiteSquare' : 'greySquare']">
        <div class="pieceContainer">
          <div v-if="piece !== null">
            <font-awesome-icon :icon="piece.icon" style="font-size: 5vw;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createChessPieces } from '../mixins/createChessPieces'

export default {
  name: 'Chessboard',
  data () {
    return {
      chessPieceLocation: []
    }
  },
  methods: {
    isWhite (rowIndex, gridIndex) {
      if (rowIndex % 2 === 0) {
        if (gridIndex % 2 === 0) {
          return true
        }
      } else {
        if (gridIndex % 2 !== 0) {
          return true
        }
      }
    } 
  },
  created() {
    console.log('this is the chessboard')
    this.chessPieceLocation = this.createChessPieces()
  },
  mixins: [createChessPieces]
}

</script>

<style scoped>

.chessContainer {
  max-width: 100vw;
  max-height: 100vh;
  border: solid grey 1px;
}

.chessContainer div {
  display: flex;
  justify-content: center;  
}

.gridSquare {
  background-color: grey;
  padding: .5rem;
  flex: 1 0 .5rem;
  align-self: center;
}

.gridSquare::after {
  content: '';
  display: block;
  padding-bottom: 100%;
   
}

.pieceContainer {
  align-self: center;
}

.whiteSquare {
  background-color: white;
}

.greySquare {
  background-color: grey;
}
</style>
