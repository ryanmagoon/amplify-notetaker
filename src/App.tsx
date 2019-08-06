import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

const App: React.FC = () => {
  return <div>App</div>
}

export default withAuthenticator(App, { includeGreetings: true })
