export default class Canvas {
    constructor(element) {
        this.element = element;
        this.context = this.element.getContext("2d");

        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;

        this.element.width = this.width;
        this.element.height = this.height;
    }
    setStep(size) {
        this.stepX = this.width / size.width;
        this.stepY = this.height / size.height;
    }

    async display(element) {
       let result = await fetch(`/sprites/ground/grass.jpg`);
       let image = await createImageBitmap(await result.blob());
       this.context.drawImage(image,
           0,
           0,
           225,
           225,
           element.x * this.stepx,
           element.y * this.stepy,
           this.stepx,
           this.stepy)
       
       
           
    }

}