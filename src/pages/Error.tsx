import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function errText(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.log(error)
    return 'unkown error'
  }
}

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errText(error)}</i>
      </p>
    </div>
  )
}
