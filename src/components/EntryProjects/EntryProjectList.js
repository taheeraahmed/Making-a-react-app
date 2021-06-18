import React from 'react';
import { projects } from './Entries';
import { EntryProject } from './EntryProject';

const project_list = [];

for (const project in projects) {
    project_list.push(
      <EntryProject
        title={project.title}
        description={project.description}
        linkName={project.linkName}
        linkPath={project.linkPath}
        imagePath={project.imagePath}
        chips={project.chips}
      />
      )
  };

export class ProjectList extends React.Component{
  render(){
    return (
      <div>
        {project_list}
      </div>
    );
  }
}