const Card = ({userData}) => {
   return (
      <div>
         <h3>Hola: {userData.name}</h3>
         <h3>Sabemos que tu libro favorito es:</h3>
         <h4>{userData.book}</h4>
      </div>
   )
};

export default Card