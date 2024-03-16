export default class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    // Use a fallback for older browsers or unsupported environments
    this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Set canvas dimensions based on calculated width and height
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
//   setWidthHeight() {
//     this.width = 600 - 1;
//     this.height = window.innerHeight - 1;
//   }
 }
