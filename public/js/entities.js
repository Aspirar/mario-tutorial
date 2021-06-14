import Entity from './entity.js';
import Velocity from './traits/velocity.js';
import Jump from './traits/jump.js';
import Go from './traits/go.js';
import { loadMarioSprite } from './sprites.js';

export async function createMario() {
    const sprite = await loadMarioSprite();

    const mario = new Entity();
    mario.size.set(16, 16);

    mario.addTrait(new Go());
    mario.addTrait(new Jump());
    // mario.addTrait(new Velocity());

    mario.draw = function (context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    };

    return mario;
}
