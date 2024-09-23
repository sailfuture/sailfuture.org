import { clsx } from 'clsx'

export function PlusGrid({ className = '', children }) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({ className = '', children }) {
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div className="absolute inset-x-0 top-0"></div>
        <div className="absolute inset-x-0"></div>
        <div className="absolute inset-x-0 bottom-0 hidden group-last/row:block"></div>
        <div className="absolute inset-x-0 hidden group-last/row:block"></div>
      </div>
      {children}
    </div>
  )
}

export function PlusGridItem({ className = '', children }) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      <PlusGridIcon
        placement="top left"
        className="hidden group-first/item:block"
      />
      <PlusGridIcon placement="top right" />
      <PlusGridIcon
        placement="bottom left"
        className="hidden group-last/row:group-first/item:block"
      />
      <PlusGridIcon
        placement="bottom right"
        className="hidden group-last/row:block"
      />
      {children}
    </div>
  )
}

export function PlusGridIcon({ className = '', placement }) {
  let [yAxis, xAxis] = placement.split(' ')

  let yClass = yAxis === 'top' ? '-top-2' : '-bottom-2'
  let xClass = xAxis === 'left' ? '-left-2' : '-right-2'

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        'absolute size-[15px] fill-black/10',
        yClass,
        xClass,
      )}
    >
    </svg>
  )
}
