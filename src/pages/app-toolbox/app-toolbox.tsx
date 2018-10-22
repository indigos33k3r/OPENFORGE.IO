import { Component } from '@stencil/core';

@Component({
  tag: 'app-toolbox',
  styleUrl: 'app-toolbox.scss',
})
export class AppToolbox {
  scrollToForm() {
    const form = document.getElementById('second-content');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="toolbox">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>Here are some of the tools we use</h2>
                <p>
                  We believe that your success is our success. We're here to
                  challenge your assumptions and help you discover your web or
                  mobile applications full potential.
                </p>
                <button
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
                  Scroll to Learn More
                </button>
              </div>
            </div>
          </div>
        </header>
        <div id="second-content" class="design container">
          <h1>UI/UX Design</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-design-toolbox-first.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Abstract</h2>
              <p>
                Abstract allows our team to track our projects across versions
                and collaborate among team members. Having full transparency on
                projects ensures that we maintain the consistency and integrity
                of our designs.
              </p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Marvel</h2>
              <p>
                Marvel allows our design team to produce a working prototype of
                a product before it reaches the marketplace. This prototype is
                then updated in conjunction with each new version and allows for
                our team to maintain the highest standard of quality assurance.
              </p>
            </div>
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-design-toolbox-second.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-design-toolbox-third.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Sketch</h2>
              <p>
                Sketch is a powerful tool that allows our designers to
                seamlessly turn wireframes into beautifully designed products.
                Specifically created for user interface and user experience
                design, it is optimized for efficiency and consistency across
                projects large and small.
              </p>
            </div>
          </section>
        </div>
        <div class="development container">
          <h1>App Development</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-development-toolbox-second.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Ionic Framework</h2>
              <p>
                Ionic Framework gives our team of developers an array of
                reliable tools and proven UI components. Hybrid Progressive Web
                Apps come together with reliability and performance using Ionic
                Framework.
              </p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Angular</h2>
              <p>
                Angular lays the foundations for our developer team to produce
                and deploy cross platform mobile and web apps.
              </p>
            </div>
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-development-toolbox-first.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-development-toolbox-third.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Github</h2>
              <p>
                Github is an industry standard for hosting code, managing
                projects, and collaboration between developers. Github gives our
                development team a channel to effectively produce, manage and
                refine code.
              </p>
            </div>
          </section>
        </div>
        <div class="consulting container">
          <h1>Consulting</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-consulting-toolbox-second.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Marvel</h2>
              <p>
                Marvel puts our team and your team on the same page with a
                prototype that can be easily navigated and refined.
                Collaboration between our team and yours is seamless with direct
                commenting and requests within prototypes.
              </p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Bit Bucket</h2>
              <p>
                Bitbucket shows a detailed breakdown of developer productivity
                by visualizing commit history and the efficiency in which work
                is performed. Bitbucket gives us the tools to analyze your Git
                repository and improve your bottom line.
              </p>
            </div>
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-consulting-toolbox-third.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-md-inline"
              src="/assets/services-consulting-toolbox-first.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Team Work</h2>
              <p>
                Teamwork Projects is a powerful project management software that
                incorporates communication, file storage, progress tracking and
                time management that is proven for not only our team but yours
                as well.
              </p>
            </div>
          </section>
        </div>
        <app-footer />
      </div>
    );
  }
}
