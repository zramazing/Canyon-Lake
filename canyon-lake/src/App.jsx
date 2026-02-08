import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-c">C</div>
        </div>
        <div className="header-text">
          <h1 className="company-name">Canyon Lake</h1>
          <p className="company-subtitle">Communication Strategies</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-content">
          <div className="story-text-box">
            <h2 className="section-heading">Our Story</h2>
            <p className="story-text">
              Founded in 2024, Canyon Lake Communication Strategies aims to change the conservation movement through decolonial methods. Our work is inspired by the serene beauty and ecological importance of Canyon Lake, which serves as a constant reminder of what we're working to protect and restore.
            </p>
          </div>
        </div>
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" alt="Canyon Lake landscape" />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2 className="section-heading centered">Our Values</h2>
        <div className="values-content">
          <div className="values-text">
            <div className="value-item">
              <h3 className="value-title">Reciprocity between people and planet</h3>
              <p className="value-description">
                We believe in the deep connection between humans and nature, and we practice reciprocity in all our relationships with the land and its communities.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Restoring Relationships to Land</h3>
              <p className="value-description">
                Our work focuses on the physical and spiritual healing of lands, incorporating Traditional Ecological Knowledge and honoring indigenous practices.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Decolonized Mapping Methods</h3>
              <p className="value-description">
                We address the history of indigenous knowledge theft in mapping and promote methods that prioritize consent, data sovereignty, and land back initiatives.
              </p>
            </div>
          </div>
          <div className="values-image">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop" alt="Person on beach at sunset" />
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="current-projects">
        <h2 className="section-heading">Current Projects</h2>
        <div className="projects-placeholder">
          <p>Projects coming soon...</p>
        </div>
      </section>

      {/* Meet Lake Section */}
      <section className="meet-lake">
        <h2 className="section-heading right-aligned">Meet Lake</h2>
        <div className="lake-profile">
          <div className="profile-buttons top-left">
            <button className="profile-btn">About Me</button>
          </div>
          <div className="profile-buttons top-right">
            <button className="profile-btn">Resume</button>
          </div>
          <div className="profile-picture">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" alt="Lake profile" />
          </div>
          <div className="profile-buttons bottom-left">
            <button className="profile-btn">Aerials</button>
          </div>
          <div className="profile-buttons bottom-right">
            <button className="profile-btn">Photography</button>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="projects-gallery">
        <div className="gallery-grid">
          <div className="project-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop" alt="Food items" />
            </div>
            <div className="card-content">
              <h3 className="card-title">GIS Tutorial</h3>
              <p className="card-description">
                A comprehensive tutorial for students at CREAR, a sustainable agriculture high school, covering GIS fundamentals and applications.
              </p>
              <a href="#" className="card-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop" alt="People on sofa" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Hongo Ethnographic Report</h3>
              <p className="card-description">
                An in-depth ethnographic report on mushrooms and their cultural significance on the island, exploring traditional knowledge and modern applications.
              </p>
              <a href="#" className="card-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop" alt="Wellness treatment" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Rio Limpio Food Mapping Essay</h3>
              <p className="card-description">
                An essay exploring food mapping practices in Rio Limpio, Dominican Republic, examining local food systems and community relationships.
              </p>
              <a href="#" className="card-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop" alt="Products on surface" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Chicago Wilderness Alliance Congress 2024</h3>
              <p className="card-description">
                Planning and execution of the 2024 Chicago Wilderness Alliance Congress, bringing together conservation leaders and practitioners.
              </p>
              <a href="#" className="card-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Image */}
      <section className="mid-page-image">
        <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop" alt="Lake with log and bird" />
      </section>

      {/* Get in Touch Section */}
      <footer className="get-in-touch">
        <h2 className="section-heading">Get in touch</h2>
        <div className="contact-info">
          <p className="contact-item">
            <strong>Address:</strong> 624 S 33rd St Lincoln, NE / 1378 Fieldbrook Rd McKinleyville, CA
          </p>
          <p className="contact-item">
            <strong>Phone:</strong> <a href="tel:+14023265339">+1 402-326-5339</a>
          </p>
          <p className="contact-item">
            <strong>Email:</strong> <a href="mailto:lakeschulke@canyonlakecs.com">lakeschulke@canyonlakecs.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
