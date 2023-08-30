export const AlertBox = ({
  title = 'title',
  message = 'message',
  type,
}) => {
  let colors = ``

  // 🤮
  switch (type) {
    case 'info':
      colors = 'border-blue-5 bg-blue-2 text-blue-9'
      break
    case 'warn':
      colors = 'border-orange-5 bg-orange-2 text-orange-9'
      break
    case 'error':
      colors = 'border-red-5 bg-red-2 text-red-9'
      break

    default:
      colors = 'border-blue-5 bg-blue-2 text-blue-9'
      break
  }

  return (
    <div
      className={`border-l-4 px-3 py-2 rounded-r ${colors} animate-fade-in animate-duration-150`}
      role="alert"
    >
      <h1 className="font-bold">{title}</h1>
      <p>{message}</p>
    </div>
  )
}
