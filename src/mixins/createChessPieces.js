export const createChessPieces = {
    data() {
        return {
            space: function (piece) {
                return {
                    canMoveHere: false,
                    piece: piece
                }
            },
            piece: function (team, icon) {
                return {
                    team: team,
                    icon: icon,
                }
            }
        }
    },
    methods: {
        createChessPieces() {
            return [
                [this.space(this.piece('white', 'chess-rook')),
                 this.space(this.piece('white', 'chess-knight')),
                 this.space(this.piece('white', 'chess-bishop')), 
                 this.space(this.piece('white', 'chess-queen')), 
                 this.space(this.piece('white', 'chess-king')), 
                 this.space(this.piece('white', 'chess-bishop')), 
                 this.space(this.piece('white', 'chess-knight')), 
                 this.space(this.piece('white', 'chess-rook'))],
                [this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn')),
                 this.space(this.piece('white', 'chess-pawn'))],
                [this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null)],
                [this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null)],
                [this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null)],
                [this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null), this.space(null)],
                [this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn')),
                 this.space(this.piece('black', 'chess-pawn'))],
                [this.space(this.piece('black', 'chess-rook')),
                 this.space(this.piece('black', 'chess-knight')),
                 this.space(this.piece('black', 'chess-bishop')),
                 this.space(this.piece('black', 'chess-queen')),
                 this.space(this.piece('black', 'chess-king')),
                 this.space(this.piece('black', 'chess-bishop')),
                 this.space(this.piece('black', 'chess-knight')),
                 this.space(this.piece('black', 'chess-rook'))],
            ]
        }
    }
}