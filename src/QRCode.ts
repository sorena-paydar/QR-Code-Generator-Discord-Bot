export default class QRCode {
  data: string;
  width: string;
  height: string;
  color: string;

  constructor(data: string, width: string, height: string, color: string) {
    this.data = data;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getQRCode(): string {
    return `https://chart.googleapis.com/chart?cht=qr&chl=${this.data}&chs=${this.width}x${this.height}&chco=${this.color}`;
  }
}
