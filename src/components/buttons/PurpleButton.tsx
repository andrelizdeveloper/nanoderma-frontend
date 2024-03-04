type Props = {
  children?: any;
  onClick?: () => void;
}

const buttonClass = `
  inline-flex justify-center items-center gap-x-3 text-center bg-purple-800 py-2 px-4 
  border border-transparent text-white text-sm font-medium rounded-full
  hover:bg-purple-900 transition duration-300 ease-in-out`;

export default function PurpleButton (props:Props) {
  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  )
}


