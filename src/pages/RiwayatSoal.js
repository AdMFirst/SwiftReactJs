import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavigationBar from "../components/NavigationBar";
import { useState } from 'react';

export default function RiwayatSoal() {
  const [DataTab, setDataTab] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched){
  fetch(process.env.REACT_APP_BACKEND_URi+'/historyTugas/dataHistory', {
      method: 'GET',
      //body: JSON.stringify({id: tugas}),
      headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.getItem('jwt')
      }
  }).then(response => {
      if (response.ok) {
          return response.json();
      }
      throw new Error(response.statusText);
  }).then(json => {
    console.log(json)
      setDataTab(json)
      setDataFetched(true);
  }).catch(error => {
      alert(error.message);
  });
}
    return (
        <div class="container-fluid" style={{ backgroundColor: "#fbeeeb", minHeight:"100vh"}}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <NavigationBar />

      {DataTab.map(({nama, tipe, icon}) => {
      return(
        <a href="/tugas">
        <div class="tombol">
        <button
          type="button"
          className="btn btn-light btn-lg btn-block rounded text-left"
          style={{ width: "100%", textAlign: "Left" , marginTop: "10px"}}
        >
          <div className="h5" style={{display:"flex", flexDirection:"row"}}>
            <i className={icon} aria-hidden="true" />
            <div>
            <p style={{marginLeft:"10px", marginBottom:0}}>{nama}</p>
            <p className="h6" style={{marginLeft:"10px", marginBottom:0  }}>
              {tipe}
            </p>
            </div>
          </div>
        </button>
        </div>
        </a>
      )
    })}
      
    </div>

    )
}