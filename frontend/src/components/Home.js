import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

{/* <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <title>Our Features</title>

</head> */}

<body>
  <div class="container">
    <h1>Our Features</h1>
    <p>Build and Showcase your digital Portfolios</p>
    <div class="features">
      <div class="feature">
        <i class="fas fa-chalkboard-teacher"></i> 
        <h3>Interactive portfolio templates</h3>
        <p>Select from a range of customizable portfolio templates</p>
      </div>
      {/* <div class="feature">
        <i class="fas fa-brain"></i> 
        <h3>Video Generate AI</h3>
        <p>ShareLook allows you to do Live Broadcasting, Live Assessment, Live</p>
      </div> */}
      <div class="feature">
        <i class="fas fa-broadcast-tower"></i> 
        <h3>Code integration</h3>
        <p>Embed GitHub repositories or live code demos within the portfolio</p>
      </div>
      <div class="feature">
        <i class="fas fa-video"></i> 
        <h3>Multimedia support</h3>
        <p>Include videos, images, and presentations alongside project descriptions</p>
      </div>
      <div class="feature">
        <i class="fas fa-poll"></i> 
        <h3>Skill showcase</h3>
        <p>Highlight key skills, certifications, and accomplishments, with links to proof</p>
      </div>
      {/* <div class="feature">
        <i class="fas fa-cubes"></i>
        <h3>Build Scenario</h3>
        <p>ShareLook allows you to do Live Broadcasting, Live Assessment, Live</p>
      </div> */}
      <div class="feature">
        <i class="fas fa-podcast"></i>
        <h3>Portfolio sharing</h3>
        <p>Easily share portfolios via unique links with potential employers or peers</p>
      </div>
      <div class="feature">
        <i class="fas fa-add"></i> 
        <h3>More</h3>
        <p>More features upcoming ...</p>
      </div>
    </div>
    <div class="cta-button">
      <Link to="/create">Create Your Portfolio</Link>
    </div>
  </div>
</body>
    </div>
  )
}

export default Home
