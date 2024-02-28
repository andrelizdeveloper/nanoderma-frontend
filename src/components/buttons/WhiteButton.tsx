type Props = {
  onClick: () => void;
  label:string;
}

const buttonClass = `
  inline-flex justify-center items-center gap-x-3 text-center bg-white py-2 px-4 
  border border-transparent text-gray-800 text-sm font-medium rounded-full
  hover:bg-gray-200 transition duration-300 ease-in-out`;

export default function WhiteButton(props:Props) {
  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.label}
    </button>
  )
}


