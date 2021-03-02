import { useEffect, useState } from "react"

const useTermsAndConditions = () => {

  const [accepted, setAccepted] = useState<Boolean>()

  const cookies = localStorage.getItem('cookies')

  useEffect(() => {
    if(cookies !== null){
      setAccepted(true)
    } else {
      setAccepted(false)
    }
  }, [cookies])

  return accepted
}

export default useTermsAndConditions