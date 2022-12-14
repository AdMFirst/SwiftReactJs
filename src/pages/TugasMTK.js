import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom'
//import React from 'react';
import NavigationBar from "../components/NavigationBar";

function TugasMTK (){
    return (
      <div class="container">
        <NavigationBar />
        <p></p>
        <p><u>Pilihan Ganda</u></p>
        <p>1. 20 + 30 =</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
          <label class="form-check-label" for="flexRadioDefault1">
            A. 50
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            B. 20
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            C. 10
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            B. 40
          </label>
        </div>
        <p><u>Essay</u></p>
        <form>
          <div class="row mb-3">
            <label for="soal1" class="col-sm-2 col-form-label">1+1=</label>
            <div class="col-sm-10">
              <input class="form-control" id="soal1"></input>
            </div>
          </div>
          <div class="row mb-3">
            <label for="soal2" class="col-sm-2 col-form-label">5+5=</label>
            <div class="col-sm-10">
              <input class="form-control" id="soal2"></input>
            </div>
          </div>
          <div class="col-12">
            <a href="/PTugas" type="submit" class="btn btn-primary">Submit</a>
          </div>
        </form>
      </div>
      );
}
export default TugasMTK