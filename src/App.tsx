import { useState } from 'react'
import { profile, sections, siteName, type PlatformBlock } from './data'
import { LinkIcon, PhoneIcon, WeChatIcon, ZhihuIcon } from './icons'
import './App.css'

function PlatformGlyph({ kind }: { kind: PlatformBlock['platformKind'] }) {
  if (kind === 'zhihu') return <ZhihuIcon className="platform-icon zhihu" />
  if (kind === 'wechat') return <WeChatIcon className="platform-icon wechat" />
  return <LinkIcon className="platform-icon web" />
}

export default function App() {
  const [opened, setOpened] = useState(false)

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
          <p className="seal-sub">纸质简历卡 · 点击开启</p>
          <button type="button" className="open-btn" onClick={() => setOpened(true)}>
            展开简历
          </button>
        </section>
      ) : (
        <article className="resume-card" aria-label={`${profile.nameZh} 简历卡`}>
          <header className="card-header">
            <div className="photo-frame">
              <img src={profile.photo} alt={`${profile.nameZh} 简历照`} />
            </div>
            <div className="identity">
              <p className="site-chip">{siteName}</p>
              <h1>
                {profile.nameZh}
                <span className="en"> / {profile.nameEn}</span>
              </h1>
              <p className="role-line">{profile.roles.join(' · ')}</p>
              <a className="phone" href={`tel:${profile.phone}`}>
                <PhoneIcon className="phone-icon" />
                {profile.phone}
              </a>
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
                            <a href={link.href} target="_blank" rel="noreferrer">
                              <span className="link-title">{link.title}</span>
                              <span className="link-arrow" aria-hidden="true">
                                ↗
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>

                      {block.skills.length > 0 ? (
                        <div className="skills">
                          <span className="skills-label">技能</span>
                          <ul>
                            {block.skills.map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="card-footer">
            <button type="button" className="fold-btn" onClick={() => setOpened(false)}>
              收起卡片
            </button>
          </footer>
        </article>
      )}
    </div>
  )
}
