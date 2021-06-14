import Timer from './timer.js';
import { loadLevel } from './loaders.js';
import { createMario } from './entities.js';
import { setupKeyboard } from './input.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

async function start() {
    const [mario, level] = await Promise.all([
        createMario(),
        loadLevel('1-1')
    ]);

    mario.pos.set(64, 64);
    level.entities.add(mario);

    const input = setupKeyboard(mario);
    input.listenTo(window);

    const timer = new Timer();
    timer.update = function update(deltaTime) {
        level.update(deltaTime);
        level.comp.draw(context);
    };

    timer.start();
}

start();
