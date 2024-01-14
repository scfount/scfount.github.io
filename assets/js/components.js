class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top py-0">
          <div class="container-fluid py-2" style="background-color: #81D959;">
            <a class="" href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 640 512">
              <path
                d="M181.5 197.1l12.9 6.4c5.9 3 12.4 4.5 19.1 4.5c23.5 0 42.6-19.1 42.6-42.6V144c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v21.4c0 23.5 19.1 42.6 42.6 42.6c6.6 0 13.1-1.5 19.1-4.5l12.9-6.4 8.4-4.2L135.1 185c-4.5-3-7.1-8-7.1-13.3V168c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v3.7c0 5.3-2.7 10.3-7.1 13.3l-11.8 7.9 8.4 4.2zm-8.6 49.4L160 240l-12.9 6.4c-12.6 6.3-26.5 9.6-40.5 9.6c-3.6 0-7.1-.2-10.6-.6v.6c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V336 320c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6V240c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16v32 16 48c0 8.8 7.2 16 16 16s16-7.2 16-16V204.3c0-48.2-30.8-91-76.6-106.3l-8.5-2.8c-8-2.7-12.6-11.1-10.4-19.3s10.3-13.2 18.6-11.6l19.9 4C576 86.1 640 164.2 640 254.9l0 1.1h0c0 123.7-100.3 224-224 224h-1.1H256h-.6C132 480 32 380 32 256.6V256 216.8c-10.1-14.6-16-32.3-16-51.4V144l0-1.4C6.7 139.3 0 130.5 0 120c0-13.3 10.7-24 24-24h2.8C44.8 58.2 83.3 32 128 32h64c44.7 0 83.2 26.2 101.2 64H296c13.3 0 24 10.7 24 24c0 10.5-6.7 19.3-16 22.6l0 1.4v21.4c0 1.4 0 2.8-.1 4.3c12-6.2 25.7-9.6 40.1-9.6h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-13.3 0-24 10.7-24 24v8h56.4c-15.2 17-24.4 39.4-24.4 64H320c-42.3 0-78.2-27.4-91-65.3c-5.1 .9-10.3 1.3-15.6 1.3c-14.1 0-27.9-3.3-40.5-9.6zM96 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
            </svg>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Caribou Rentals</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link" href="inventory.html">Inventory</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="index.html#about" >About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="index.html#services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="index.html#contact">Contact</a>
                  </li>
              </div>
            </div>
          </div>
        </nav>
        `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
      <footer class="bg-light m-auto py-5 container-fluid">
        <div class="row text-center m-auto" style="width: 40%">
          <div class="col-md-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 640 512">
              <path
                d="M181.5 197.1l12.9 6.4c5.9 3 12.4 4.5 19.1 4.5c23.5 0 42.6-19.1 42.6-42.6V144c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v21.4c0 23.5 19.1 42.6 42.6 42.6c6.6 0 13.1-1.5 19.1-4.5l12.9-6.4 8.4-4.2L135.1 185c-4.5-3-7.1-8-7.1-13.3V168c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v3.7c0 5.3-2.7 10.3-7.1 13.3l-11.8 7.9 8.4 4.2zm-8.6 49.4L160 240l-12.9 6.4c-12.6 6.3-26.5 9.6-40.5 9.6c-3.6 0-7.1-.2-10.6-.6v.6c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V336 320c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6V240c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16v32 16 48c0 8.8 7.2 16 16 16s16-7.2 16-16V204.3c0-48.2-30.8-91-76.6-106.3l-8.5-2.8c-8-2.7-12.6-11.1-10.4-19.3s10.3-13.2 18.6-11.6l19.9 4C576 86.1 640 164.2 640 254.9l0 1.1h0c0 123.7-100.3 224-224 224h-1.1H256h-.6C132 480 32 380 32 256.6V256 216.8c-10.1-14.6-16-32.3-16-51.4V144l0-1.4C6.7 139.3 0 130.5 0 120c0-13.3 10.7-24 24-24h2.8C44.8 58.2 83.3 32 128 32h64c44.7 0 83.2 26.2 101.2 64H296c13.3 0 24 10.7 24 24c0 10.5-6.7 19.3-16 22.6l0 1.4v21.4c0 1.4 0 2.8-.1 4.3c12-6.2 25.7-9.6 40.1-9.6h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-13.3 0-24 10.7-24 24v8h56.4c-15.2 17-24.4 39.4-24.4 64H320c-42.3 0-78.2-27.4-91-65.3c-5.1 .9-10.3 1.3-15.6 1.3c-14.1 0-27.9-3.3-40.5-9.6zM96 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
            </svg>
            <!-- <h3 class=" py-4">Caribou Rentals & Leasing</h3> -->
          </div>
          <div class="col-md-6">
            <p class=""><i class="fa-solid fa-location-dot"></i> Spokane, WA</p>
            <p class=""><i class="fa-solid fa-phone"></i> 123-456-7890</p>
            <p class=""><i class="fa-solid fa-envelope"></i> test@caribourentals.com</p>
          </div>
        </div>
        <div class="row pt-5">
          <p class="text-center"><i class="fa-regular fa-copyright"></i> 2024 Caribou Rentals & Leasing</p>
        </div>
      </footer>   
      `;
  }
}

customElements.define('navbar-component', Navbar);
customElements.define('footer-component', Footer);
