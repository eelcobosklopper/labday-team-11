export class AudioPlayer {
    constructor() {
        this._initialized = false;
    }

    init() {
        if (this._initialized) { return; }

        this._buffers = new Map();
        this._context = new AudioContext();

        this._fxSource = this._context.createBufferSource();
        this._fxSource.connect(this._context.destination);

        this._initialized = true;
    }

    async load(key = Symbol('fx:key'), url) {
        if (!this._initialized) { throw new Error('AudioPlayer not initialized.'); };
        
        return new Promise((resolve) => {
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'arraybuffer';

            request.onload = () => {
                this._context.decodeAudioData(
                    request.response, 
                    (buffer) => {
                        this._buffers.set(key, buffer);
                        console.log(`Loaded audio buffer on "${key}".`, buffer);
                        resolve(key);
                    });
            };
            request.send();
        });
    }

    async play(key) {
        if (!this._initialized) { throw new Error('AudioPlayer not initialized!'); };

        if (this._buffers.has(key)) {
            this._fxSource.buffer = this._buffers.get(key);
            this._fxSource.start(0);
        } else {
            console.warn(`No audio buffer loaded with key "${key}".`);
        }
    }
}