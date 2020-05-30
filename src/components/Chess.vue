<template>
  <div class="chessContainer">
    <div v-for="(row, rowIndex) in chessBoard" :key="rowIndex">
      <div v-for="(space, columnIndex) in row" :key="columnIndex" @click="setMove(space, rowIndex, columnIndex)" class="gridSquare"
       :class="[isWhite(rowIndex, columnIndex) ? 'whiteBackground' : '', space.canMoveHere ? 'highlight' : '']">
        <div v-if="space.piece !== null" class="pieceContainer card" :class="[selectedPiece.rowIndex === rowIndex && selectedPiece.columnIndex === columnIndex ? 'selectedPiece' : '']" >
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
        team: '',
        icon: ''
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
    setMove(space, rowIndex, columnIndex) {
      if (this.selectedPiece.icon === '' && space.piece.icon === '') {
        return
      } else if (space.piece !== null) {
        if (this.selectedPiece.team !== '' && space.piece.team === this.selectedPiece.team) {
          this.clearHighlight()
        } 
        this.selectedPiece = { rowIndex: rowIndex, columnIndex: columnIndex, team: space.piece.team, icon: space.piece.icon }
        switch (space.piece.icon) {
        case 'chess-pawn':
          this.setPawnPossibleMoves (space.piece, rowIndex, columnIndex)
          break;
        }
      }

      if (space.canMoveHere) {
        this.movePiece(space, rowIndex, columnIndex)
      }
    },
    movePiece(space, rowIndex, columnIndex) {
      this.chessBoard[rowIndex][columnIndex].piece = { team: this.selectedPiece.team, icon: this.selectedPiece.icon }
      this.chessBoard[this.selectedPiece.rowIndex][this.selectedPiece.columnIndex] = { canMoveHere: false, piece: null }
      this.selectedPiece = { 
        rowIndex: null,
        columnIndex: null,
        team: '',
        icon: ''
      }
      this.clearHighlight()
    },
    setPawnPossibleMoves (piece, rowIndex, columnIndex) {
      let moveModifier = piece.team === 'white' ? 1 : -1,
      isFirstMove = this.isPawnFirstMove(piece, rowIndex),
      leftAttackSpace = this.chessBoard[rowIndex + moveModifier][columnIndex - 1],
      rightAttackSpace = this.chessBoard[rowIndex + moveModifier][columnIndex + 1]

      if (this.chessBoard[rowIndex + moveModifier][columnIndex].piece === null) {
        this.chessBoard[rowIndex + moveModifier][columnIndex].canMoveHere = true
        if (isFirstMove) {
          if (this.chessBoard[rowIndex + (2 * moveModifier)][columnIndex].piece === null) {
            this.chessBoard[rowIndex + (2 * moveModifier)][columnIndex].canMoveHere = true
          } 
        }
      }
      if (leftAttackSpace) {
        if (leftAttackSpace.piece !== null && leftAttackSpace.piece.team !== piece.team) {
          leftAttackSpace.canMoveHere = true
        }
      }

      if (rightAttackSpace) {
        if (rightAttackSpace.piece !== null && rightAttackSpace.piece.team !== piece.team) {
          rightAttackSpace.canMoveHere = true
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
// @click="setMove(space.piece, rowIndex, columnIndex)"
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