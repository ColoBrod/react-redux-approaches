import React, { Component } from 'react';
import { connect } from 'react-redux';
import { added as projectAdded, removed as projectRemoved } from '~/store/projects';

class Projects extends Component {
  render() {
    const { data, projectAdded } = this.props;
    return (
      <>
        <h2>Projects</h2>
        <ul>
          {
            data.map(project => <li key={project.id}>{project.title}</li>)
          }
        </ul>
        <button onClick={() => projectAdded({ title: "New project" })}>Add project</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.entities.projects });
const mapDispatchToProps = { projectAdded, projectRemoved };

export default connect(mapStateToProps, mapDispatchToProps)(Projects);