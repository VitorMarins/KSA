import './cTitle.css'
  
export default function curso({title, paragrafo}) {
  
    return(
        <section className='title'>
            <h1>{title}</h1>
                <p>{paragrafo}</p>
                    </section>

    )
  
    
  };