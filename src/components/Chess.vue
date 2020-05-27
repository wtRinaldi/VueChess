<template>
  <div class="chessContainer">
    <div v-for="(row, rowIndex) in chessBoard" :key="rowIndex">
      <div v-for="(space, columnIndex) in row" :key="columnIndex" @click="movePiece(space, rowIndex, columnIndex)" class="gridSquare"
       :class="[isWhite(rowIndex, columnIndex) ? 'whiteBackground' : '', space.canMoveHere ? 'highlight' : '']">
        <div v-if="space.piece !== null"  @click="setMove(space.piece, rowIndex, columnIndex)" class="pieceContainer card" :class="[selectedPiece.rowIndex === rowIndex && selectedPiece.columnIndex === columnIndex ? 'selectedPiece' : '']" >
          <div class="iconContainer" >
            <font-awesome-icon :icon="space.piece.icon" class="icon" :class="[space.piece.team === 'white' ? 'white' : 'black']" />
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
      chessBoard: [],
      selectedPiece: { 
        rowIndex: null,
        columnIndex: null,
        piece: {} 
      }
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
    },
    isSelectedPiece (piece) {
      if (this.selectedPiece == piece) {
        return true
      } else {
        return false
      }
    },
    setMove(piece, rowIndex, columnIndex) {
      this.clearHighlight()
      debugger
      this.selectedPiece = { piece: piece, rowIndex: rowIndex, columnIndex: columnIndex }
   
      switch (piece.icon) {
        case 'chess-pawn':
          this.setPawnPossibleMoves (piece, rowIndex, columnIndex)
          break;
      }
    },
    movePiece(space, rowIndex, columnIndex) {
      if (space.canMoveHere) {
        this.chessBoard[rowIndex][columnIndex].piece = this.selectedPiece.piece
        this.chessBoard[this.selectedPiece.rowIndex][this.selectedPiece.columnIndex] = { 
          rowIndex: null,
          columnIndex: null,
          piece: null 
        }
        this.clearHighlight()
      }
    },
    setPawnPossibleMoves (piece, rowIndex, columnIndex) {
      let isFirstMove = this.isPawnFirstMove(piece, rowIndex) 
      if(piece.team === 'black') {
        if (this.chessBoard[rowIndex - 1][columnIndex].piece === null) {
          this.chessBoard[rowIndex - 1][columnIndex].canMoveHere = true
          if (isFirstMove) {
            if (this.chessBoard[rowIndex - 2][columnIndex].piece === null) {
              this.chessBoard[rowIndex - 2][columnIndex].canMoveHere = true
            } 
          }
        }
      } else {
        if (this.chessBoard[rowIndex + 1][columnIndex].piece === null) {
          this.chessBoard[rowIndex + 1][columnIndex].canMoveHere = true
          if (isFirstMove) {
            if (this.chessBoard[rowIndex + 2][columnIndex].piece === null) {
              this.chessBoard[rowIndex + 2][columnIndex].canMoveHere = true
            } 
          }
        }
      }
    },
    isPawnFirstMove (piece, rowIndex) {
      if (piece.team === 'black') {
        if (rowIndex === 6) {
          return true
        }
      } else {
        if (rowIndex === 1) {
          return true
        }
      }
      return false
    },
    clearHighlight () {
      this.chessBoard.forEach(row => {
        row.forEach(space => {
          space.canMoveHere = false
        })
      })
    }
  },
  created() {
    console.log('this is the chessboard')
    this.chessBoard = this.createChessPieces()
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
  background-color: steelblue;
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

.whiteBackground {
  background-color: white;
}

.white {
  color: white;
}

.black {
  color: black;
}

.greyBackgroud {
  background-color: grey;
}

.iconContainer {
  align-items: center;
}

.highlight {
  background-color: lawngreen;
  border-top: solid black 1px;
  opacity: 40%;
}

.selectedPiece {
  border: solid gold 5px;
  /* animation: pulse 1s ease 0s infinite alternate; */
}

.icon {
  font-size: 5vw;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  transition: 0.3s;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background-color: silver;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

</style>