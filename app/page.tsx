"use client"

import { useState, useRef } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("https://www.workwithsatya.co.in")
  const [qrCode, setQRCode] = useState("https://www.workwithsatya.co.in")
  const [color, setColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [size, setSize] = useState(200)
  const [errorCorrection, setErrorCorrection] = useState<ErrorCorrectionLevel>("M")

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault()
    setQRCode(url)
  }
  const qrCodeRef = useRef<HTMLDivElement>(null);
 const downloadQRCode = () => {
    if (!qrCodeRef.current) return;
    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (qrCode) {
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
       
      <Card className="w-full max-w-2xl">
        
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <div className="flex flex-row flex-wrap justify-end"><ModeToggle /></div>
            QR Code Generator
            </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateQRCode} className="space-y-4">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="Enter a URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="color">QR Code Color</Label>
                <Input
                  id="color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
              <div>
                <Label htmlFor="backgroundColor">Background Color</Label>
                <Input
                  id="backgroundColor"
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="size">
                Size: {size}x{size}
              </Label>
              <Slider
                id="size"
                min={100}
                max={400}
                step={10}
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="errorCorrection">Error Correction Level</Label>
              <Select value={errorCorrection} onValueChange={(value: string) => setErrorCorrection(value as ErrorCorrectionLevel)}>
                <SelectTrigger id="errorCorrection">
                  <SelectValue placeholder="Select error correction level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Generate QR Code
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center" ref={qrCodeRef}>
          {qrCode && (
            <div className="mt-4" ref={qrCodeRef}>
              <QRCodeSVG
                value={qrCode}
                size={size}
                fgColor={color}
                bgColor={backgroundColor}
                level={errorCorrection}
                includeMargin={true}
              />
            </div>
          )}

        </CardFooter>
                  <div  className="flex justify-center pb-5"><button type="submit" onClick={downloadQRCode}>Download QR Code</button></div>
      </Card>
    </div>
  )
}
