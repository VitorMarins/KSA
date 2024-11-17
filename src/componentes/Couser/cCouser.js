export default function curso({image, image2, paragrafo, title, topics}) {
  
    return(
      <div className="Dev">
      <img src={image} alt="" />
      <div class="box"><img src={image2} alt=""/></div>
      <div>
        <h4>{title}</h4>
        <p>{paragrafo}</p>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
    )
  
    
  };
  