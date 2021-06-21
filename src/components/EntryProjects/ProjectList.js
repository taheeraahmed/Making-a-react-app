import React from 'react';
import Projects from './Entries.js';
import EntryProject from './EntryProject.js';



export class ProjectList extends React.Component{
  render(){
  const project_list = [];

  for (const project in Projects) {
      let item = Projects[project];
      console.log(item.chips)
      project_list.push(
        <EntryProject
          key={item.title}
          title={item.title}
          description={item.description}
          linkName={item.linkName}
          linkPath={item.linkPath}
          image={item.image}
          chips={item.chips}
        />
        )
    };
    return (
      <div>
        {project_list}
      </div>
    );
  }
}