import { withAuthenticator } from '@aws-amplify/ui-react'
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css'
import { useEffect } from 'react'

const Page = ({ signOut, user }: any) => {
  useEffect(() => {
    console.log('hoge')
  }, [])

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(Page)
