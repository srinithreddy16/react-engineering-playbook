function carousel() {
    return <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1777547719699_parsecdesktop.jpeg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776848823073_et00474690web.jpeg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778063570967_fantasyifeweb.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}

export default carousel;
