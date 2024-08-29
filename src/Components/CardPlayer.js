import Card from 'react-bootstrap/Card';
const CardPlayer=({el})=>{
  
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.url} style={{width :"286px",height :"367px"}}/>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            Age : {el.age}            
          </Card.Text>    
          <Card.Text>
            Nationality : {el.nationality}
          </Card.Text>    
          <Card.Text>
            Jersey number :{el.jerseyNumber}
          </Card.Text>   
          <Card.Text>
            Team : {el.team}
          </Card.Text>  
        </Card.Body>
      </Card>
    )
}

CardPlayer.defaultProps ={
    el : {
        "name" : "Nizar Smichi",
        "team" : "ASM",
        "nationality" : "Tunisian",
        "jerseyNumber" : 10,
        "age" : 24,
        "url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1V-VHphx9F_ulWx7IBvfPDV7VPcK-_xdOQ&s"
    }
}
export default CardPlayer