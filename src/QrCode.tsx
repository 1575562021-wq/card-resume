import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

type QrCodeProps = {
  value: string
  label: string
  size?: number
  className?: string
}

export function QrCode({ value, label, size = 64, className = '' }: QrCodeProps) {
  const [src, setSrc] = useState<string>('')

  useEffect(() => {
    let cancelled = false
    QRCode.toDataURL(value, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#1b2a41',
        light: '#00000000',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (!cancelled) setSrc(url)
      })
      .catch(() => {
        if (!cancelled) setSrc('')
      })
    return () => {
      cancelled = true
    }
  }, [value, size])

  return (
    <figure className={`qr-item ${className}`}>
      {src ? (
        <img src={src} alt={`${label} 二维码`} width={size} height={size} />
      ) : (
        <span className="qr-placeholder" style={{ width: size, height: size }} aria-hidden="true" />
      )}
      <figcaption>{label}</figcaption>
    </figure>
  )
}
