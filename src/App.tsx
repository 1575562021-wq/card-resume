import { useMemo, useState } from 'react'
import { productQrs, profile, sections, siteName, type PlatformBlock } from './data'
import { LinkIcon, PhoneIcon, WeChatIcon, ZhihuIcon } from './icons'
import { QrCode } from './QrCode'
import './App.css'

function PlatformGlyph({ kind }: { kind: PlatformBlock['platformKind'] }) {
  if (kind === 'zhihu') return <ZhihuIcon className="platform-icon zhihu" />
  if (kind === 'wechat') return <WeChatIcon className="platform-icon wechat" />
  return <LinkIcon className="platform-icon web" />
}

export default function App() {
  const [opened, setOpened] = useState(false)

  const contactQrValue = useMemo(
    () => `MECARD:N:${profile.nameZh},${profile.nameEn};TEL:${profile.phone};NOTE:${profile.roles.join(' / ')};`,
    [],
  )

  const scanQrs = useMemo(() => {
    const fromBlocks = sections.flatMap((section) =>
      section.blocks
        .filter((block) => block.qrHref && block.qrLabel)
        .map((block) => ({ label: block.qrLabel!, href: block.qrHref! })),
    )
    return [...fromBlocks, ...productQrs]
  }, [])

  return (
    <div className={`stage ${opened ? 'is-open' : 'is-closed'}`}>
      <div className="atmosphere" aria-hidden="true" />

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
          <p className="seal-sub">明信片手卡 · 点击开启</p>
          <button type="button" className="open-btn" onClick={() => setOpened(true)}>
            展开手卡
          </button>
        </section>
      ) : (
        <article className="resume-card" aria-label={`${profile.nameZh} 简历手卡`}>
          <header className="card-header">
            <div className="photo-frame">
              <img src={profile.photo} alt={`${profile.nameZh} 简历照`} />
            </div>

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

            <div className="contact-qr">
              <QrCode value={contactQrValue} label="联系我" size={72} />
            </div>
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
                  <QrCode value={item.href} label={item.label} size={52} />
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
    </div>
  )
}
