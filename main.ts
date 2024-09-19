controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 c . 
        f f 5 5 5 1 5 5 5 5 5 1 1 5 c c 
        f 5 5 5 1 1 1 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 1 1 5 5 5 5 c 
        f f 5 5 1 5 5 5 5 1 1 5 5 5 f f 
        . f f f 1 1 5 5 5 5 5 5 f f f . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 c . 
        f f 5 5 5 1 5 5 5 5 5 1 1 5 c c 
        f 5 5 5 1 1 1 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 1 1 5 5 5 5 c 
        f f 5 5 1 5 5 5 5 1 1 5 5 5 f f 
        . f f f 1 1 5 5 5 5 5 5 f f f . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . . . . f f f f f d d f f . . 
        . . . . . . . . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 c . 
        f f 5 5 5 1 5 5 5 5 5 1 1 5 c c 
        f 5 5 5 1 1 1 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 1 1 5 5 5 5 c 
        f f 5 5 1 5 5 5 5 1 1 5 5 5 f f 
        . f f f 1 1 5 5 5 5 5 5 f f f . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 c . 
        f f 5 5 5 1 5 5 5 5 5 1 1 5 c c 
        f 5 5 5 1 1 1 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 1 1 5 5 5 5 c 
        f f 5 5 1 5 5 5 5 1 1 5 5 5 f f 
        . f f f 1 1 5 5 5 5 5 5 f f f . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f d d f f f f f . . . . . 
        . . f d d d c . . . . . . . . . 
        `],
    150,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 c c c c c c 5 5 5 c . 
        f f 5 b b b b b b b b c c 5 c c 
        f 5 b b b d d d d d d b b c 5 c 
        f b b d d d c d d c d d b b c c 
        f b d d d d c d d c d d d b b c 
        f d d d d d d d d d d d d d b c 
        f f d d d d b b b b d d d d f f 
        . f f f d d d d d d d d f f f . 
        . . . f f f d d d d f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 5 5 5 5 b . . . 
        . c c b b 1 1 5 5 5 5 5 b b . . 
        c c b 5 1 1 5 5 5 5 5 1 1 b . . 
        c b 5 5 5 5 5 5 5 5 5 1 1 b . . 
        f b b c c c c b 5 5 5 5 5 c . . 
        f b c c c d d d b b 5 5 5 5 c . 
        f b c b d d d d d d b b 5 5 b c 
        . c b d c d d d d d d b c 5 5 c 
        . c d d c d d c d d d c c c 5 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 5 5 5 5 b . . . 
        . c c b b 1 1 5 5 5 5 5 b b . . 
        c c c 5 1 1 1 5 5 5 5 1 1 b . . 
        c b 5 5 5 5 5 5 5 5 5 1 1 b . . 
        f b b c c c c b b 5 5 1 1 c . . 
        f b c c b d d d d b b 5 5 c c . 
        f b c d d d d d d d b b 5 5 b c 
        . c d d c d d d d d d b b 5 5 c 
        . c d d c d d d c d d b c 5 5 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 5 5 5 5 b . . . 
        . c c b 1 1 5 5 5 5 5 5 b b . . 
        c c c 5 1 1 1 5 5 5 5 5 5 b . . 
        c b 5 5 5 5 5 5 5 5 5 1 1 b . . 
        f b b c c c c b 5 5 5 1 1 c . . 
        f b c c c d d d b b 5 5 5 c c . 
        f b c b d d d d d d b b 5 5 b c 
        . c b d d d d d d d d b c 5 5 c 
        . c d c c d d d d d d c c c 5 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 5 5 5 5 b . . . 
        . c c b b 1 1 5 5 5 5 5 b b . . 
        c c 5 5 1 1 5 5 5 5 5 1 1 b . . 
        c b 5 5 5 5 5 5 5 5 5 1 1 b . . 
        f b b c c c 5 5 5 5 5 5 5 c . . 
        f b c c c b b b b 5 5 5 5 5 c . 
        f b c c d d d d d b b 5 5 5 5 c 
        . c c d c d d d d d d b c 5 5 c 
        . c b d c d d d c d d c c c 5 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 5 5 5 5 b b b b . . . . 
        . . b b 5 5 5 5 5 1 1 b b c c . 
        . . b 1 1 5 5 5 5 5 1 1 5 5 c c 
        . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
        . . c 5 5 5 5 5 5 5 c c c b b f 
        . c 5 5 5 5 5 b b b b c c c b f 
        c 5 5 5 5 b b d d d d d c c b f 
        c 5 5 c b d d d d d d c d c c . 
        f 5 c c c d d d c d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 5 5 5 5 b . . . 
        . c c b b 1 1 5 5 5 5 5 b b . . 
        c c 5 5 1 1 5 5 5 5 5 1 1 b . . 
        c b 5 5 5 5 5 5 5 5 5 1 1 b . . 
        f b b c c c 5 5 5 5 5 5 5 c . . 
        f b c c c b b b b 5 5 5 5 5 c . 
        f b c c d d d d d b b 5 5 5 5 c 
        . c c d c d d d d d d b c 5 5 c 
        . c b d c d d c d d d c c c 5 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 5 5 5 5 b b b b . . . . 
        . . b b 5 5 5 5 5 1 1 b b c c . 
        . . b 1 1 5 5 5 5 5 1 1 5 b c c 
        . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
        . . c 5 5 5 5 5 b c c c c b b f 
        . c 5 5 5 5 b b d d d c c c b f 
        c b 5 5 b b d d d d d d b c b f 
        c 5 5 c b d d d d d d c d b c . 
        f 5 c c c d d d c d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 5 5 5 5 b b b b . . . . 
        . . b b 5 5 5 5 5 1 1 b b c c . 
        . . b 1 1 5 5 5 5 1 1 1 5 c c c 
        . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
        . . c 1 1 5 5 b b c c c c b b f 
        . c c 5 5 b b d d d d b c c b f 
        c b 5 5 b b d d d d d d d c b f 
        c 5 5 b b d d d d d d c d d c . 
        f 5 5 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 5 5 5 5 b b b b . . . . 
        . . b b 5 5 5 5 5 5 1 1 b c c . 
        . . b 5 5 5 5 5 5 1 1 1 5 c c c 
        . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
        . . c 1 1 5 5 5 b c c c c b b f 
        . c c 5 5 5 b b d d d c c c b f 
        c b 5 5 b b d d d d d d b c b f 
        c 5 5 c b d d d d d d d d b c . 
        f 5 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 5 5 5 5 b b b b . . . . 
        . . b b 5 5 5 5 5 1 1 b b c c . 
        . . b 1 1 5 5 5 5 5 1 1 5 5 c c 
        . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
        . . c 5 5 5 5 5 5 5 c c c b b f 
        . c 5 5 5 5 5 b b b b c c c b f 
        c 5 5 5 5 b b d d d d d c c b f 
        c 5 5 c b d d d d d d c d c c . 
        f 5 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    150,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 c . 
        f f 5 5 5 1 5 5 5 5 5 1 1 5 c c 
        f 5 5 5 1 1 1 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 
        f 5 5 5 5 5 5 5 5 1 1 5 5 5 5 c 
        f f 5 5 1 5 5 5 5 1 1 5 5 5 f f 
        . f f f 1 1 5 5 5 5 5 5 f f f . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 c c c c c c 5 5 5 c . 
        f f 5 b b b b b b b b c c 5 c c 
        f 5 b b b d d d d d d b b c 5 c 
        f b b d d d c d d c d d b b c c 
        f b d d d d c d d c d d d b b c 
        f d d d d d d d d d d d d d b c 
        f f d d d d b b b b d d d d f f 
        . f f f d d d d d d d d f f f . 
        . . . f f f d d d d f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 c c c c c c 5 5 5 c . 
        f f 5 b b b b b b b b c c 5 c c 
        f 5 b b b d d d d d d b b c 5 c 
        f b b d d d c d d c d d b b c c 
        f b d d d d c d d c d d d b b c 
        f d d d d d d d d d d d d d b c 
        f f d f f f f b b b d d d d f f 
        . f f f d d f d d d d d f f f . 
        . . f d d d f d d d f f f . . . 
        . . f f f f f f f f d d f f . . 
        . . . . . . . . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 c c c c c c 5 5 5 c . 
        f f 5 b b b b b b b b c c 5 c c 
        f 5 b b b d d d d d d b b c 5 c 
        f b b d d d c d d c d d b b c c 
        f b d d d d c d d c d d d b b c 
        f d d d d d d d d d d d d d b c 
        f f d d d d b b b b d d d d f f 
        . f f f d d d d d d d d f f f . 
        . . . f f f d d d d f f f . . . 
        . . f f d d f f f f d d f f . . 
        . . f d d d c . . f d d d f . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . f f 5 5 5 5 c c . . . . 
        . . . f f 5 5 5 5 5 5 c c . . . 
        . . f f 5 5 5 5 5 5 5 5 c c . . 
        . f f 5 5 5 5 5 5 5 5 5 5 c c . 
        . f 5 5 5 c c c c c c 5 5 5 c . 
        f f 5 b b b b b b b b c c 5 c c 
        f 5 b b b d d d d d d b b c 5 c 
        f b b d d d c d d c d d b b c c 
        f b d d d d c d d c d d d b b c 
        f d d d d d d d d d d d d d b c 
        f f d d d d b b b f f f f d f f 
        . f f f d d d d d f d d f f f . 
        . . . f f f d d d f d d d f . . 
        . . f f d d f f f f f f f f . . 
        . . f d d d f . . . . . . . . . 
        `],
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(11, 25), assets.tile`myTile30`)
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 1 1 b b c c . 
    . . b 1 1 5 5 5 5 5 1 1 5 5 c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 5 5 5 5 5 5 5 c c c b b f 
    . c 5 5 5 5 5 b b b b c c c b f 
    c 5 5 5 5 b b d d d d d c c b f 
    c 5 5 c b d d d d d d c d c c . 
    f 5 c c c d d d c d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
