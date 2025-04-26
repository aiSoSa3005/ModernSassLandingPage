
interface ButtonProps {
  text: string;
  backgroundColor:string;
}
const Button = ({text,backgroundColor}:ButtonProps) => {
  
  return (
   <>
   <button className={`bg-${backgroundColor}-700 p-3 rounded-xl mx-3 my-4 text-white`}>{text}</button>
   
   </>
  )
}

export default Button
