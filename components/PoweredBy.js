import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span></span>
      <a
        href='https://www.bing.com'
        className='underline justify-start'>
        必应一下，你就知道 
      </a>
      .
    </div>
  )
}
