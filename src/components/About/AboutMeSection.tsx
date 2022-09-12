import "./AboutPageStyles.css"

export const AboutMeSection = () => {
  return <div className={"about-me-section"}>
    <h1>About Me</h1>
    <p>My name is Richard. I am a problem solver and creative thinker. My interest in software development was sparked by gaming when I decided to learn more about Minecraft modding.</p>
    <p>Recently I finished my bachelor in mathematics during which I had the opportunity to work as a working student at Software AG for the past 3 years.
      I gathered a lot of experience in frontend development, design and accessibility over the past years.</p>
    <p>Here are some technologies I recently worked with:</p>
    <ul className={"about-list"}>
      <li>TypeScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Java</li>
      <li>PHP</li>
      <li>Drupal</li>
    </ul>
  </div>
}