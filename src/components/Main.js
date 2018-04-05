import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="philosophy" className={`${this.props.article === 'philosophy' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Philosophy</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>I am a champion for the voice of an individual. In my classroom, I maintain a spirit of freedom in an environment that is inviting and welcoming to learners of dance of all ages, from all backgrounds, with all levels of life and dance experience, all with uniquely designed futures ahead.</p>
          <p>I strive to maintain a dance room that is free of judgement. My learners are welcome to come as they are, and leave whatever they wish behind. My goal is to inspire creativity, individual thinking, and a mindset to never stop discovering and growing.</p>
          <p>To the best of my ability, I will deliver the highest standard of technical training in various styles. My passion is training my body as an instrument to communicate any message to the world through movement. I draw on emotion and experience, as well as personal training and work experience, to drive this same goal to my students from a young age. I have an extensive training and performance background in the areas of musical theatre, jazz, and ballet, and will bring elements of all these trainings and work experiences into my classroom. As a continuing learner and enthusiast of these styles, I maintain a high level of respect for artistry and performance, as well as technique. Each class will contain a warm-up, either at the barre or in the center, an across the floor sequence, and will culminate in a phrase which acts as a summary of the class.
            Some people are born to inspire others with movement in front of crowds of thousands. Some people are born to inspire classrooms of twenty. Some people are lucky enough to have experienced both. I will strive to allow my students to realize their personal goals on and off the stage, in and out of the classroom. Each student will set an intention, either aloud or in a journal, and set an overall goal for the month. We will revisit these goals monthly and evaluate where we need to focus our time, energy, and attention as a team. We will lean on one another, and reach our goals both as a classroom unit and as individuals.</p>
          <p>I value preparedness: I will arrive to class ready to teach my students, ready to learn from my students, and ready to create with my students. Any opportunity to share the floor will be held with the upmost respect. While using a preexisting syllabus and lesson plan, I will remain flexible and present in the moment, and allow the class to proceed at a natural pace. In my opinion, part of making a perfect plan of action is allowing that plan to unfold differently than anticipated.</p>
          <p>I value being present: In my life, my dance teacher was far more than a dance teacher. She was a mentor. She was a mom. She was a friend. She was a doctor. She was an expert. She was a therapist. I am so honored to be able to carry that tradition to my students. I will be there for them, open and ready to learn and share.</p>
          <p>It is my goal to inspire students to become better dancers, better sons and daughters, better friends, better parents,  better cohabitants of the earth, and better people, who continue to grow every single day.</p>
          <p>By the way, check out my <a href="#work">awesome work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main