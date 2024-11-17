import './cButton.css'
export default function Botão({title, onClick, disabled, id}) {
    return(
      <div className='button-container' id=''>
        <button className='button-cadastro' id={id} onClick={onClick} disabled={disabled}>
          {title}
          </button>
      </div>
    )
  };
  