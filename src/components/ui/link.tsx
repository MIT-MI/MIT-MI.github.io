import * as React from 'react'
import { cn } from '@/lib/utils'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  external?: boolean
  underline?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, external, underline, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(
          'inline-block transition-colors duration-300 ease-in-out',
          underline &&
            'underline decoration-muted-foreground underline-offset-[3px] hover:decoration-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )
  },
)
Link.displayName = 'Link'

export { Link }

