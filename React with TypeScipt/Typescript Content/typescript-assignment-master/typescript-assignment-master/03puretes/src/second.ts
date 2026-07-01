interface TakePhoto {
    cameraMode: string,
    filter: String,
    burst: number
}
interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: String,
        public burst: number
    ) {

    }
}
class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: String,
        public burst: number,
        public short: String
    ) {

    }

    createStory():void{
        console.log("Story");
        
    }
} 