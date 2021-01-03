function showprojectDetails(event){
    const project = event.target;
    console.log(project);

    console.log(project.nextSibling.nextSibling);


    if(project.nextSibling.nextSibling.classList.contains('skill-holder')){
        if( project.nextSibling.nextSibling.style.display != 'inline'){
            project.nextSibling.nextSibling.style.display = 'inline';
        }else{
            project.nextSibling.nextSibling.style.display = 'none';
        }
        
    }
    
}