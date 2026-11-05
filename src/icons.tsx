type IconProps = {
  className?: string
  title?: string
}

export function ZhihuIcon({ className, title = '知乎' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="500"
        fontFamily="serif"
        fill="currentColor"
      >
        知
      </text>
    </svg>
  )
}

export function WeChatIcon({ className, title = '微信' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden={title ? undefined : true} role="img">
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M9.1 4.2c-3.7 0-6.7 2.5-6.7 5.6 0 1.8 1 3.3 2.6 4.3l-.6 2.2 2.4-1.3c.7.2 1.4.3 2.1.3.2 0 .4 0 .6-.1-.1-.4-.2-.8-.2-1.2 0-3.1 2.8-5.6 6.3-5.6.2 0 .5 0 .7.1C15.5 5.9 12.6 4.2 9.1 4.2zm-2.1 3.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm4.1 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
      />
      <path
        fill="currentColor"
        d="M20.1 11.4c-3.1 0-5.6 2.1-5.6 4.7 0 1.5.9 2.8 2.2 3.6l-.5 1.8 2-.9c.6.2 1.2.3 1.9.3 3.1 0 5.6-2.1 5.6-4.8 0-2.6-2.5-4.7-5.6-4.7zm-2.1 3.1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm3.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
      />
    </svg>
  )
}

export function LinkIcon({ className, title = '链接' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} role="img">
      {title ? <title>{title}</title> : null}
      <path
        d="M10 13a5 5 0 0 0 7.07.07l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07-.07L5.52 12.34a5 5 0 0 0 7.07 7.07L14 18.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function PhoneIcon({ className, title = '电话' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} role="img">
      {title ? <title>{title}</title> : null}
      <path
        d="M7.2 3.8h2.3l1.1 3.2-1.5 1.1a12.4 12.4 0 0 0 5.3 5.3l1.1-1.5 3.2 1.1v2.3c0 .7-.5 1.3-1.2 1.4A14.6 14.6 0 0 1 3.8 7c.1-.7.7-1.2 1.4-1.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
