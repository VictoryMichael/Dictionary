
import React from "react"
import "./DefinitionBody.css"




const DefinitionBody = ({word,meanings,category}) => {
  return (
    <div className="meaning"   style={{ justifyContent:"center", alignItems:'center', width:"100%" }}   >

   
        {word === "" ? (
          <span className="sub-title"> Start by typing a word in search</span>
        ) : (
            meanings.map((mean) => 
              mean.meanings.map((item) =>  
               item.definitions.map((def) => (
                  <div className="singlemean"
                   style={{backgroundColor: "white", color:"black", width:"100%"   }}

                  >
                       <b>{def.definition}</b>
                        <hr style={{background:"black", width:"100%"  }}/> 

                          {
                             def.example && (
                                <span>
                                    <b>Example: </b> {def.example}
                                </span>

                         )}
                         
                         {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
                  </div>


               ))

              )
            )
        )}
    </div>
  )
}

export default DefinitionBody








