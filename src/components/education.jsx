import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
					<h2>University of Chicago<span> Sep 2021 - Present (Expected Jun 2023)</span></h2>
											<p>M.A. in Computational Social Science (MACSS)
												<br></br>
												GPA: 3.83/4.00
												<br></br>
												Awarded with Maroon Scholar Research Award Scholarship of $30000 for 2021-2022
											</p>
					                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
											<h2>University of California, San Diego <span> Sep 2017 - Jun 2021</span></h2>
											<p>B.S. in Mathematics-Scientific Computation
												<br></br>
												B.S. in Political Science-Data Analytics (Highest Honor)
												<br></br>
												GPA: 3.78/4.00
												<br></br>
												Cum Laude

											</p>
					                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
