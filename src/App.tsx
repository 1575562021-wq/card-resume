import { useEffect, useMemo, useState } from 'react'
import { productQrs, profile, sections, siteName, type PlatformBlock } from './data'
import { LinkIcon, PhoneIcon, WeChatIcon, ZhihuIcon } from './icons'
import { QrCode } from './QrCode'
import './App.css'

function PlatformGlyph({ kind }: { kind: PlatformBlock['platformKind'] }) {
  if (kind === 'zhihu') return <ZhihuIcon className="platform-icon" />
  if (kind === 'wechat') return <WeChatIcon className="platform-icon" />
  return <LinkIcon className="platform-icon" />
}

function ProtectedPhoto({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      onContextMenu={(event) => event.preventDefault()}
    />
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const [photoOpen, setPhotoOpen] = useState(false)

  const scanQrs = useMemo(() => {
    const fromBlocks = sections.flatMap((section) =>
      section.blocks
        .filter((block) => block.qrHref && block.qrLabel)
        .map((block) => ({ label: block.qrLabel!, href: block.qrHref! })),
    )
    return [...fromBlocks, ...productQrs]
  }, [])

  useEffect(() => {
    if (!photoOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPhotoOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [photoOpen])

  return (
    <div className={`stage ${opened ? 'is-open' : 'is-closed'}`}>
      {!opened ? (
        <section className="seal-card" aria-label="开启简历">
          <p className="seal-site">{siteName}</p>
          <div className="seal-mark" aria-hidden="true">
            <span>Z</span>
          </div>
          <h1 className="seal-title">
            {profile.nameZh}
            <span>{profile.nameEn}</span>
          </h1>
          <p className="seal-sub">纸质简历卡，点击展开</p>
          <button type="button" className="open-btn" onClick={() => setOpened(true)}>
            展开手卡
          </button>
        </section>
      ) : (
        <article className="resume-card" aria-label={`${profile.nameZh} 简历手卡`}>
          <header className="card-header">
            <button
              type="button"
              className="photo-frame"
              aria-label="查看大图"
              onClick={() => setPhotoOpen(true)}
            >
              <ProtectedPhoto src={profile.photo} alt={`${profile.nameZh} 简历照`} />
              <span className="photo-hint">放大</span>
            </button>

            <div className="identity">
              <p className="site-chip">{siteName}</p>
              <h1>
                {profile.nameZh}
                <span className="en">{profile.nameEn}</span>
              </h1>
              <p className="role-line">{profile.roles.join(' · ')}</p>
              <a className="phone" href={`tel:${profile.phone}`}>
                <PhoneIcon className="phone-icon" />
                {profile.phone}
              </a>
            </div>

            <figure className="contact-qr">
              <img
                src={profile.wechatQr}
                alt="微信二维码"
                width={80}
                height={80}
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
              />
              <figcaption>联系她</figcaption>
            </figure>
          </header>

          <div className="card-body">
            {sections.map((section) => (
              <section key={section.role} className="role-section">
                <h2>
                  <span className="role-label">职能</span>
                  {section.role}
                </h2>

                <div className="blocks">
                  {section.blocks.map((block) => (
                    <div key={`${section.role}-${block.platform}`} className="block">
                      <div className="block-meta">
                        <span className="platform">
                          <PlatformGlyph kind={block.platformKind} />
                          {block.platform}
                        </span>
                        <span className="type">{block.typeLabel}</span>
                      </div>

                      <ul className="links">
                        {block.links.map((link) => (
                          <li key={link.href}>
                            <a href={link.href} target="_blank" rel="noreferrer" title={link.title}>
                              <span className="link-title">{link.shortTitle ?? link.title}</span>
                              <span className="link-arrow" aria-hidden="true">
                                ↗
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>

                      {block.skills.length > 0 ? (
                        <ul className="skills">
                          {block.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="qr-strip" aria-label="作品扫码">
            <p className="qr-strip-title">扫码看作品</p>
            <div className="qr-row">
              {scanQrs.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="qr-link">
                  <QrCode value={item.href} label={item.label} size={56} />
                </a>
              ))}
            </div>
          </section>

          <footer className="card-footer">
            <button type="button" className="fold-btn" onClick={() => setOpened(false)}>
              收起
            </button>
          </footer>
        </article>
      )}

      {photoOpen ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="简历照大图"
          onClick={() => setPhotoOpen(false)}
        >
          <div className="photo-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="photo-lightbox-stage">
              <ProtectedPhoto src={profile.photo} alt={`${profile.nameZh} 简历照大图`} />
              <div className="photo-guard" aria-hidden="true" />
            </div>
            <p className="photo-lightbox-tip">仅预览，不可保存</p>
            <button type="button" className="photo-close" onClick={() => setPhotoOpen(false)}>
              关闭
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
