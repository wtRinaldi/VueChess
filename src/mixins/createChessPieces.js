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
            // return [
            //     [this.piece('white', 'chess-rook'), this.piece('white', 'chess-knight'), this.piece('white', 'chess-bishop'), this.piece('white', 'chess-queen'), this.piece('white', 'chess-king'), this.piece('white', 'chess-bishop'), this.piece('white', 'chess-knight'), this.piece('white', 'chess-rook')],
            //     [this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), this.piece('white', 'chess-pawn'), ],
            //     [null, null, null, null, null, null, null, null],
            //     [null, null, null, null, null, null, null, null],
            //     [null, null, null, null, null, null, null, null],
            //     [null, null, null, null, null, null, null, null],
            //     [this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn'), this.piece('black', 'chess-pawn')],
            //     [this.piece('black', 'chess-rook'), this.piece('black', 'chess-knight'), this.piece('black', 'chess-bishop'), this.piece('black', 'chess-king'), this.piece('black', 'chess-queen'), this.piece('black', 'chess-bishop'), this.piece('black', 'chess-knight'), this.piece('black', 'chess-rook')],
            // ]
        }
    }
}