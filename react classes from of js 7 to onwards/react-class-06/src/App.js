import { useState } from 'react'
import ShowDynamicData from './component/ShowDynamicData'
import Smbutton from './component/Smbutton'
function App() {
  //recieving data from child to parent
  const [rowclick, setRowclick] = useState([])
  const [click, onclick] = useState()
  //sending data from parent to child
  const arr = [
    {
      title: 'laptop',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      price: '301$',
    },
    {
      title: 'Keyboard',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      price: '21$',
    },
    {
      title: 'Mouse',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      price: '15$',
    },
    {
      title: 'Scanner',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      price: '2000$',
    },
    {
      title: 'Epson',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      price: '2000$',
    },
  ]
  return (
    <div>
      {/* {we passed our array to be randered into premade component called ShowDynamicData which recieves prop data } */}
      <ShowDynamicData setRowclick={(e) => console.log(e)} data={arr} />
      <Smbutton onClick={() => console.log('added !')} label="add" />
    </div>
  )
}

export default App
