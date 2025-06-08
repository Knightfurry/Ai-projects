# QR Code Generator

A modern web application to generate customizable QR codes from URLs. Built with Next.js, React, and Tailwind CSS, this project allows users to create QR codes with adjustable colors, sizes, and error correction levels, and download them as images.

## Features

- Generate QR codes from any URL
- Customize QR code color, background, and size
- Select error correction level (L, M, Q, H)
- Download QR codes as PNG images
- Responsive and theme-aware UI (light/dark mode)

## Configuration

This project uses:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [qrcode.react](https://github.com/zpao/qrcode.react)
- [html-to-image](https://github.com/bubkoo/html-to-image)

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Usage

1. Enter the URL you want to encode.
2. Customize the QR code's color, background, size, and error correction level.
3. Click "Generate QR Code" to preview.
4. Click "Download QR Code" to save the image.

## License

This project is licensed under the [MIT License](LICENSE).
