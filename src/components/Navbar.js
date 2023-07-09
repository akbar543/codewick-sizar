import React from 'react'
import styled from 'styled-components'

function Navbar(){
  return (
    <Container>
      <h1>hello</h1>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
*{
    padding: 0;
    margin: 0;
}
h1{
    background-color: red;
}
`