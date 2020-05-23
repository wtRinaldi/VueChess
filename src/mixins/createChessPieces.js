export const createChessPieces = {
    data() {
        return {
            pawn: function (team) {
                return {
                    name: 'pawn',
                    team: team,
                    color: team,
                    icon: 'chess-pawn',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            },
            rook: function (team) {
                return {
                    name: 'rook',
                    team: team,
                    color: team,
                    icon: 'chess-rook',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            },
            knight: function (team) {
                return {
                    name: 'knight',
                    team: team,
                    color: team,
                    icon: 'chess-knight',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            },
            bishop: function (team) {
                return {
                    name: 'bishop',
                    team: team,
                    color: team,
                    icon: 'chess-bishop',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            },
            queen: function (team) {
                return {
                    name: 'queen',
                    team: team,
                    color: team,
                    icon: 'chess-queen',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            },
            king: function (team) {
                return {
                    name: 'king',
                    team: team,
                    color: team,
                    icon: 'chess-king',
                    move: function ( ) {
                        console.log('moved')
                    }
                }
            }

        }
    },
    methods: {
        createChessPieces() {
            return [
                [this.rook('white'), this.knight('white'), this.bishop('white'), this.queen('white'), this.king('white'), this.bishop('white'), this.knight('white'), this.rook('white')],
                [this.pawn('white'), this.pawn('white'), this.pawn('white'), this.pawn('white'), this.pawn('white'), this.pawn('white'), this.pawn('white'), this.pawn('white') ],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [this.pawn('black'), this.pawn('black'), this.pawn('black'), this.pawn('black'), this.pawn('black'), this.pawn('black'), this.pawn('white'), this.pawn('black') ],
                [this.rook('black'), this.knight('black'), this.bishop('black'), this.queen('black'), this.king('black'), this.bishop('black'), this.knight('black'), this.rook('black')],
            ]
        }
    }
}