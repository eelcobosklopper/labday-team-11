export class AudioPlayer {
    constructor() {
        this._initialized = false;
    }

    init() {
        if (this._initialized) { return; }

        this._buffers = new Map();
        this._context = new AudioContext();
        this._initialized = true;
    }

    async load(key, url) {
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
                        resolve(key);
                    });
            };
            request.send();
        });
    }

    async play(key) {
        if (!this._initialized) { throw new Error('AudioPlayer not initialized!'); };

        const source = this._context.createBufferSource();
        source.buffer = this._buffers.get(key);
        source.connect(this._context.destination);
        source.start(0);
    }
}