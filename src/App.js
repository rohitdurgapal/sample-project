import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className="row mt-3">
          <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12">
            <div className='filter-block'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Filters <hr /></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Offered By</h6>
                  <div className='filters'>
                    <div className='mb-2'>
                      <input type="checkbox" /> <label> Centre of Aviation & Security Studies (7)</label>
                    </div>
                    <div className='mb-2'>
                      <input type="checkbox" /> <label> Edith Cowan University (2)</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-8 col-sm-12 col-xs-12">
            <div className='content-block'>
              <div className="card mb-3">
                <div className="card-body course-box">
                  <h6 className="card-title">All Cources (37)</h6>
                  <div className='sorting-block'>
                    <div>Sort by : </div>
                    <select className='form-control'>
                      <option value="">Featured</option>
                      <option value="">A</option>
                      <option value="">B</option>
                      <option value="">C</option>
                      <option value="">D</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='card mb-3'>
                <div className='main-section'>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Aviation Security</h6>
                            <h5 className="card-title">Aviation Cyber Security <hr /></h5>
                            <h6 className='course-overview'><span>Course Overview: </span> it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed...</h6>

                          </div>
                          <div className="card-body">
                            <div className='enquiry-block'>
                              <div><i className="fa fa-address-card" /><h6>Centre of Aviation & Security Studies (CADS)</h6></div>
                              <div><i className="fa fa-clock-o" /><h6>3 days</h6></div>
                              <div><i className="fa fa-id-card-o" /><h6>Classroom</h6></div>
                              <div><i className="fa fa-calendar" /><h6>20 February 2023</h6></div>
                              <div className='enquiry-class'><button>Enquiry Now</button></div>
                            </div>
                          </div>
                        </div>
                        <button className="accordion-button accordion-button-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Read More
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          read more data will be here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card mb-3'>
                <div className='main-section'>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Aviation Security</h6>
                            <h5 className="card-title">Aviation Cyber Security <hr /></h5>
                            <h6 className='course-overview'><span>Course Overview: </span> it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed...</h6>

                          </div>
                          <div className="card-body">
                            <div className='enquiry-block'>
                              <div><i className="fa fa-address-card" /><h6>Centre of Aviation & Security Studies (CADS)</h6></div>
                              <div><i className="fa fa-clock-o" /><h6>3 days</h6></div>
                              <div><i className="fa fa-id-card-o" /><h6>Classroom</h6></div>
                              <div><i className="fa fa-calendar" /><h6>20 February 2023</h6></div>
                              <div className='enquiry-class'><button>Enquiry Now</button></div>
                            </div>
                          </div>
                        </div>
                        <button className="accordion-button accordion-button-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          Read More
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          read more data will be here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
