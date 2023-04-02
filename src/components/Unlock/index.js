import {useState} from 'react'
import {MainContainer, Image, Text, Button, Container} from './styledComponents'

const Unlock = () => {
  const [isLocked, changeStatus] = useState(true)

  const changeButtonStatus = () => {
    changeStatus(prev => !prev)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <>
          <Container>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
              alt="lock"
            />
            <Text>Your Device is Locked</Text>
          </Container>

          <Button onClick={changeButtonStatus}>Unlock</Button>
        </>
      ) : (
        <>
          <Container>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
              alt="unlock"
            />
            <Text>Your Device is Unlocked</Text>
          </Container>

          <Button onClick={changeButtonStatus}>Lock</Button>
        </>
      )}
    </MainContainer>
  )
}

export default Unlock
