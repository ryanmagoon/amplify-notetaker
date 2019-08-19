import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

const App: React.FC = () => {
  const [notes, setNotes] = useState([{ id: 1, note: 'Hello world' }])
  return (
    <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
      <h1 className="code f2-1">Amplify Notetaker</h1>
      {/* Note Form */}
      <form className="mb3">
        <input type="text" className="pa2 f4" placeholder="Write your note" />
        <button>Add Note</button>
      </form>
      {/* notes list */}
      <div>
        {notes.map(note => (
          <div key={note.id} className="flex items-center">
            <li className="list pa1 f3">
              <button className="bg-transparent bn f4">
                {note.note}
                <span> &times;</span>
              </button>
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withAuthenticator(App, { includeGreetings: true })
