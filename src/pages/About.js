function About() {
  return (
    <div className="about-page">
      <h1>About This App</h1>

      <p>
        Welcome to my To-Do List application!
      </p>

      <p>
        This application was built using React to practice
        components, props, state, hooks, and routing.
      </p>

      <div className="about-section">
        <h2>What can you do?</h2>

        <ul>
          <li>Add new tasks</li>
          <li>Mark tasks as completed</li>
          <li>Undo completed tasks</li>
          <li>Delete tasks</li>
          <li>Navigate between pages using React Router</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Technologies Used</h2>

        <p>React • JavaScript • CSS • React Router</p>
      </div>
    </div>
  );
}

export default About;