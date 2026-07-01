abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: String,

    ) { }

    abstract getSepia(): void
    getReelTime():number{
        return 8;
    }
}



class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: String,
        public burst: number
    ) { super(cameraMode, filter) }
    getSepia(): void {
        console.log("Sepia");

    }
}

const hitesh = new Instagram("test", "testF",6)
hitesh.getReelTime()
