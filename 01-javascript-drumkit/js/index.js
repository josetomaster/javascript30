class DrumKey extends HTMLElement{

    #key;
    #sound;
    constructor(){
        super();

    }

    static get observedAttributes() {
        return ['key','sound'];
    }

    connectedCallback(){
        let pKey = document.createElement('p');
        pKey.classList.add('key');
        pKey.textContent = this.key;

        let pSound = document.createElement('p');
        pSound.classList.add('sound');
        pSound.textContent = this.sound;

        this.appendChild(pKey);
        
        this.appendChild(pSound);
    }

    attributeChangedCallback(attribute, oldValue, newValue){

        switch(attribute){
            case 'key':
                this.key = newValue;
                break;
            case 'sound':
                this.sound = newValue;
                break;
        }

    }

    get key(){
        return this.#key;
    }
    set key(value){
        if(value.length > 2 || value.length < 1){
            console.log(`${this.key} is not valid, use only one character`);
        } else if(value.match(/[a-zA-Z0-9]/).length != 1){
            console.log(`${this.key} is not a valid character, please use an alphanumeric character`);
        }
        else {
            this.#key = value;
        }
    }

    get sound(){

        return this.#sound;
    }
    set sound(value){
        this.#sound = value;
    }


}
customElements.define('drum-key',DrumKey);




document.body.addEventListener('keyup',(e) => {
    let keyPressed = e.key.toLowerCase();
    
    switch(keyPressed){
        case 'a': 
            
            new Audio('./sounds/clap.wav').play();
            animateDrumKey('a');
            break;
        case 's': 
            
            new Audio('./sounds/hihat.wav').play();
            animateDrumKey('s');
            break;
        case 'd': 
            
            new Audio('./sounds/kick.wav').play();
            animateDrumKey('d');
            break;
        case 'f': 
            
            new Audio('./sounds/openhat.wav').play();
            animateDrumKey('f');
            break;
        case 'g': 
            
            new Audio('./sounds/boom.wav').play();
            animateDrumKey('g');
            break;
        case 'h': 
            
            new Audio('./sounds/ride.wav').play();
            animateDrumKey('h');
            break;
        case 'j': 
            
            new Audio('./sounds/snare.wav').play();
            animateDrumKey('j');
            break;
        case 'k': 
            
            new Audio('./sounds/tom.wav').play();
            animateDrumKey('k');
            break;
        case 'l': 
            
            new Audio('./sounds/tink.wav').play();
            animateDrumKey('l');
            break;
    }
});

let animateDrumKey = (drumKey) => {
    let drumkeyItem = document.querySelector(`drum-key[key='${drumKey}']`);
    drumkeyItem.classList.add('scaleAnimation');
    setTimeout(() => {
        drumkeyItem.classList.remove('scaleAnimation');   
    },100);
}