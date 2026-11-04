export type WorkLink = {
  title: string
  href: string
}

export type PlatformBlock = {
  platform: string
  platformKind: 'zhihu' | 'wechat' | 'web'
  typeLabel: string
  links: WorkLink[]
  skills: string[]
}

export type RoleSection = {
  role: string
  blocks: PlatformBlock[]
}

export const siteName = 'Zoey Resume26.11'

export const profile = {
  nameZh: '邹敏婷',
  nameEn: 'Zoey',
  phone: '15319267816',
  photo: './zoey.jpg',
  roles: ['AI内容运营', '产品经理'] as const,
}

export const sections: RoleSection[] = [
  {
    role: 'AI内容运营',
    blocks: [
      {
        platform: '知乎',
        platformKind: 'zhihu',
        typeLabel: '内容推文',
        links: [
          {
            title: '为什么有了AI人们反而比之前更累啦？',
            href: 'https://www.zhihu.com/question/2052645599644858155/answer/2065110110435909639',
          },
        ],
        skills: ['视频', '脚本', '分镜'],
      },
      {
        platform: '微信公众号',
        platformKind: 'wechat',
        typeLabel: '公众号',
        links: [
          {
            title: '逐浪双月湾 · 聚力向新 | 赴一场山海之约，藏尽团队滚烫初心',
            href: 'https://mp.weixin.qq.com/s/1HDCprHQ1W0nAzhDnAE8Lw',
          },
          {
            title: '2026 AI 算力产业大会暨展览会丨灵犀以创新之力与客户共赴未来',
            href: 'https://mp.weixin.qq.com/s/-fFhmyYM8gQ7sf_G9TTQ4Q',
          },
        ],
        skills: ['拍摄', '设计', '剪辑'],
      },
    ],
  },
  {
    role: '产品经理',
    blocks: [
      {
        platform: '产品站点',
        platformKind: 'web',
        typeLabel: '产品经理',
        links: [
          {
            title: '鹏程信达',
            href: 'https://aigc.szpcxd.com/',
          },
          {
            title: 'originlinks',
            href: 'https://www.originlinks.com/',
          },
        ],
        skills: [],
      },
    ],
  },
]
