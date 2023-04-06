import './App.css';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <body>
      <div class="navbar_box box-shadow">
          <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Company name</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Enterprise</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Support</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <a class="btn btn-outline-primary" href="#">Sign up</a>
              </div>
          </nav>
      </div>

      <div class="main">
          <div class="title">
              <h1 class="display-4">Pricing</h1>
              <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. 
                  It's built with default Bootstrap components and utilities with little customization.</p>
          </div>

          <div class="main_card">
              <div class="card-deck mb-3 text-center card_css">
                  <Card name="Free" price="0" detail1="10" detail2="2 GB of storage" 
                  detail3="Email support" detail4="Help center access" 
                  class="btn btn-lg btn-block btn-outline-primary" button="Sign up for free"/>

                  <Card name="Pro" price="15" detail1="20" detail2="10 GB of storage" 
                  detail3="Priority email support" detail4="Help center access" 
                  class="btn btn-lg btn-block btn-primary" button="Get started"/>

                  <Card name="Enterprise" price="29" detail1="30" detail2="15 GB of storage" 
                  detail3="Phone and email support" detail4="Help center access" 
                  class="btn btn-lg btn-block btn-primary" button="Contact us"/>

              </div>
          </div>

      </div>

      <footer class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-12 col-md">
              <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"></img>
              <small class="d-block mb-3 text-muted ide">© 2017-2018</small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted ide" href="#">Cool stuff</a></li>
                <li><a class="text-muted ide" href="#">Random feature</a></li>
                <li><a class="text-muted ide" href="#">Team feature</a></li>
                <li><a class="text-muted ide" href="#">Stuff for developers</a></li>
                <li><a class="text-muted ide" href="#">Another one</a></li>
                <li><a class="text-muted ide" href="#">Last time</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted ide" href="#">Resource</a></li>
                <li><a class="text-muted ide" href="#">Resource name</a></li>
                <li><a class="text-muted ide" href="#">Another resource</a></li>
                <li><a class="text-muted ide" href="#">Final resource</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted ide" href="#">Team</a></li>
                <li><a class="text-muted ide" href="#">Locations</a></li>
                <li><a class="text-muted ide" href="#">Privacy</a></li>
                <li><a class="text-muted ide" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
      </footer>   
  </body>
  );
}

export default App;
