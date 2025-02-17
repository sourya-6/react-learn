
import './App.css'
import Card from './components/image'
function App() {
  //we can import the components from other files so we can reuse them just like we imported it from the image component
  //here we can pass the parameters into the card component like object and array
  // let obj={//remember that it needs to pass only via {} only same we can pass array to
  //   name:"sourya",
  //   age:20
  // }

  return (
    <>
      <h1 className='bg-green-500 p-4 m-4 rounded-xl '>Tailwind Test</h1>
      <div className='display flex flex-wrap'>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="Hey" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      <Card username="sourya" className=' m-4 p-10' bio="sourya is a good boy studying third year"/>
      
      <Card username="subodh" buttonText="Visit me" className=' m-40 p-10' bio="subodh is studying first year"/>
      </div>
      
      
    </>
  )
}

export default App
