export default class MusicPlayer{
        private _volume:number = 0;
        private _oldVolume:number = 50;
    constructor(){
        
    }
    public get volume() : number {
        return this._volume;
    }
    
    public set volume(volume : number) {
        this._volume = volume;
        this._oldVolume = volume;
    }
    
    turnMusicOn(){
        this._volume = this._oldVolume; 
    }
    turnMusicOff(){
        this._volume = 0;
    }
    
    
}