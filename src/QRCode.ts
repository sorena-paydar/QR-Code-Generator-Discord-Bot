class QRCode {
  data: string;
  height: number;
  width: number;
  color: string;

  constructor(data: string, height: number, width: number, color: string) {
    this.data = data;
    this.height = height || 200;
    this.width = width || 200;
    this.color = color || "black";
  }

  getQRCode(): string {
    return `https://chart.googleapis.com/chart?cht=qr&chl=${this.data}&chs=${this.width}x${this.height}&chco=${this.color}`;
  }
}

module.exports = QRCode;
