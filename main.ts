input.onButtonPressed(Button.A, function () {
    if (PaddleA.get(LedSpriteProperty.X) > 0) {
        PaddleA.change(LedSpriteProperty.X, -1)
        PaddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PaddleA.get(LedSpriteProperty.X) < 3) {
        PaddleA.change(LedSpriteProperty.X, 1)
        PaddleB.change(LedSpriteProperty.X, 1)
    }
})
let PaddleB: game.LedSprite = null
let PaddleA: game.LedSprite = null
PaddleA = game.createSprite(2, 4)
PaddleB = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directionY = 1
let directionX = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    if (ball.isTouching(PaddleA) || ball.isTouching(PaddleB)) {
        ball.change(LedSpriteProperty.X, directionX - 1)
        ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) < 0) {
            directionY = 1
            directionX = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) > 4) {
            ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) < 0) {
            directionX = 1
        } else if (ball.get(LedSpriteProperty.X) > 4) {
            directionX = -1
        }
        basic.pause(200)
    }
})
