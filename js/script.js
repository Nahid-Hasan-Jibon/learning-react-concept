 function  getSomething(){
    return [23,34]
 }
  const[one,two]=getSomething()
  console.log(two) 


  function useState(num){
    function updateNum(value){
        num= value
    }
    return [num , updateNum]
  }
  const [count, setCount]=useState(5)
  console.log(count,setCount)
