import { useEffect, useState, createContext } from "react"
import app from "./components/FirebaseApp"
import firebase from "firebase/app"
import Loader from "react-loader-spinner"

export const AuthContext = createContext<firebase.User | any>(null)

export function AuthProvider({
  children,
}: {
  children?: JSX.Element | JSX.Element[]
}) {
  const [currentUser, setCurrentUser] = useState<firebase.User | any>(null)
  const [requestPending, setRequestPending] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setRequestPending(false)
    })
  }, [])

  if (requestPending) {
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="#8DC9B4" height={100} width={100} />
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
