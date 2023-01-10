import NavigationBar from "../components/NavigationBar"
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { useState } from "react";




export default function AddTugas(){
    let { id } = useParams()
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 2])

    const NumberList = (props) => {
        const numbers = props.numbers;
        const listItems = numbers.map((number) => 
                <li class="list-group-item" key={number}>               
                    <div class="input-group mb-3">
                        <span class="input-group-text" id={"labelSoal"+number}>No {number}</span>
                        <input type="text" class="form-control" id={"inputSoal"+number} />
                        <span class="input-group-text" id={"hapusSoal"+number}>
                            <button type="button" class="btn btn-danger">Hapus</button>
                        </span>
                    </div>
                </li>
        )
        return (
            <ul class="list-group list-group-flush">{listItems}</ul>
        );
    }



    return(
        <div className="container-fluid px-0">
            <NavigationBar />
            <div className="row py-2">
                <div className="col text-center">
                    <h3>Menambah tugas untuk materi dengan id=<b>{id}</b></h3>
                </div>
            </div>
            <div className="row py-2 px-3">
                <div className="col text-center">
                    <button type="button" class="btn btn-primary w-100">Simpan</button>
                </div>
                <div className="col text-center">
                    <button type="button" class="btn btn-danger w-100">Batal</button>
                </div>
            </div>
            <div className="row py-2 px-3">
                <div className="col text-center">
                    <div className="card mx-5">
                        <form>
                            <NumberList numbers={numbers} />
                        </form>
                        <button type="button" class="btn btn-outline-secondary">Tambah Soal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}